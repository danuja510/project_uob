package com.elearning.projectuob.recommender.engine;

import org.grouplens.lenskit.basic.AbstractItemScorer;
import org.grouplens.lenskit.data.dao.UserEventDAO;
import org.grouplens.lenskit.data.event.Rating;
import org.grouplens.lenskit.data.pref.Preference;
import org.grouplens.lenskit.vectors.MutableSparseVector;
import org.grouplens.lenskit.vectors.SparseVector;
import org.grouplens.lenskit.vectors.VectorEntry;

import javax.annotation.Nonnull;
import javax.inject.Inject;
import java.util.List;


public class TFIDFItemScorer extends AbstractItemScorer {
    private final UserEventDAO dao;
    private final TFIDFModel model;

    /**
     *
     * @param dao The user-event DAO, so we can fetch a user's ratings when scoring items for them.
     * @param m   The precomputed model containing the item tag vectors.
     */
    @Inject
    public TFIDFItemScorer(UserEventDAO dao, TFIDFModel m) {
        this.dao = dao;
        model = m;
    }

    /**
     *
     * @param user   The user to score for.
     * @param output The output vector.  The contract of this method is that the caller creates a
     *               vector whose possible keys are all items that should be scored; this method
     *               fills in the scores.
     */
    @Override
    public void score(long user, @Nonnull MutableSparseVector output) {
        SparseVector userVector = makeUserVector(user);


        for (VectorEntry e: output.fast(VectorEntry.State.EITHER)) {

            SparseVector iv = model.getItemVector(e.getKey());

            double numerator = userVector.dot(iv);
            double denominator = userVector.norm() * iv.norm();
            double cosine = numerator / denominator;
            output.set(e.getKey(), cosine);


        }
    }

    private SparseVector makeUserVector(long user) {

        List<Rating> userRatings = dao.getEventsForUser(user, Rating.class);
        if (userRatings == null) {
            // the user doesn't exist
            return SparseVector.empty();
        }


        MutableSparseVector profile = model.newTagVector();

        profile.fill(0);

        double ratingSum = 0;
        int counter = 0;
        for (Rating r: userRatings) {
            Preference p = r.getPreference();

            counter++;
            ratingSum += p.getValue();
        }
        double avgRating = ratingSum/counter;
        for(Rating r: userRatings){
            Preference p = r.getPreference();
            double ratingValue = p.getValue();
            double multiplier = ratingValue - avgRating;

            long itemId = r.getItemId();
            SparseVector itemVector = this.model.getItemVector(itemId);
            for(VectorEntry v: itemVector.fast()){
                long vKey = v.getKey();
                double vValue = v.getValue();
                double sum = vValue * multiplier + profile.get(vKey);
                profile.set(vKey, sum);
            }

        }


        System.out.println("");


        return profile.freeze();
    }
}
