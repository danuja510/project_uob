package com.elearning.projectuob.recommender.engine;

import com.elearning.projectuob.recommender.engine.TFIDFItemScorer;
import com.elearning.projectuob.recommender.engine.dao.*;
import org.grouplens.lenskit.ItemRecommender;
import org.grouplens.lenskit.ItemScorer;
import org.grouplens.lenskit.Recommender;
import org.grouplens.lenskit.RecommenderBuildException;
import org.grouplens.lenskit.core.LenskitConfiguration;
import org.grouplens.lenskit.core.LenskitRecommender;
import org.grouplens.lenskit.data.dao.EventDAO;
import org.grouplens.lenskit.data.dao.ItemDAO;
import org.grouplens.lenskit.data.dao.UserDAO;
import org.grouplens.lenskit.scored.ScoredId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;


@Service
public class CBFMain {
    private static final Logger logger = LoggerFactory.getLogger(CBFMain.class);

//    public static void main(String[] args) throws RecommenderBuildException {
//        CSVFileLoader fileLoadernew = new CSVFileLoader();
//        fileLoadernew.loadMovieFile();
//        fileLoadernew.loadMovieTagFile();
//        fileLoadernew.loadUserFile();
//        fileLoadernew.loadRatingFile();
//
//        LenskitConfiguration config = configureRecommender();
//
//        logger.info("building recommender");
//        Recommender rec = LenskitRecommender.build(config);
//
//        if (args.length == 0) {
//            logger.error("No users specified; provide user IDs as command line arguments");
//        }
//
//        // we automatically get a useful recommender since we have a scorer
//        ItemRecommender irec = rec.getItemRecommender();
//        assert irec != null;
//        try {
//            // Generate 5 recommendations for each user
//            for (String user: args) {
//                long uid;
//                try {
//                    uid = Long.parseLong(user);
//                } catch (NumberFormatException e) {
//                    logger.error("cannot parse user {}", user);
//                    continue;
//                }
//                logger.info("searching for recommendations for user {}", user);
//                List<ScoredId> recs = irec.recommend(uid, 5);
//                if (recs.isEmpty()) {
//                    logger.warn("no recommendations for user {}, do they exist?", uid);
//                }
//                System.out.format("recommendations for user %d:\n", uid);
//                for (ScoredId id: recs) {
//                    System.out.format("  %d: %.4f\n", id.getId(), id.getScore());
//                }
//            }
//        } catch (UnsupportedOperationException e) {
//            if (e.getMessage().equals("stub implementation")) {
//                System.out.println("Congratulations, the stub builds and runs!");
//            }
//        }
//    }

    public List<Long> getRecommendations(int userId, int nRec) throws RecommenderBuildException{
        List<Long> recommendations = new ArrayList<>();

        CSVFileLoader fileLoadernew = new CSVFileLoader();
        fileLoadernew.loadCourseFile();
        fileLoadernew.loadCourseTagFile();
        fileLoadernew.loadUserFile();
        fileLoadernew.loadCourseRatingFile();

        LenskitConfiguration config = configureRecommender();

        Recommender rec = LenskitRecommender.build(config);

        ItemRecommender irec = rec.getItemRecommender();
        assert irec != null;
        try {
            List<ScoredId> recs = irec.recommend(userId, nRec);
            if (recs.isEmpty()) {
                return null;
            }
            for (ScoredId id: recs) {
                recommendations.add(id.getId());
            }
            return recommendations;
        } catch (UnsupportedOperationException e) {
            return null;
        }

    }

    public List<Long> getTeacherRecommendations(int userId, int nRec) throws RecommenderBuildException{
        List<Long> recommendations = new ArrayList<>();

        CSVFileLoader fileLoadernew = new CSVFileLoader();
        fileLoadernew.loadTeacherFile();
        fileLoadernew.loadTeacherTagFile();
        fileLoadernew.loadUserFile();
        fileLoadernew.loadTeacherRatingFile();

        LenskitConfiguration config = configureTeacherRecommender();

        Recommender rec = LenskitRecommender.build(config);

        ItemRecommender irec = rec.getItemRecommender();
        assert irec != null;
        try {
            List<ScoredId> recs = irec.recommend(userId, nRec);
            if (recs.isEmpty()) {
                return null;
            }
            for (ScoredId id: recs) {
                recommendations.add(id.getId());
            }
            return recommendations;
        } catch (UnsupportedOperationException e) {
            return null;
        }

    }

    /**
     * Create the LensKit recommender configuration.
     * @return The LensKit recommender configuration.
     */
    @SuppressWarnings("unchecked")
    private static LenskitConfiguration configureRecommender() {
        LenskitConfiguration config = new LenskitConfiguration();
        config.bind(EventDAO.class)
              .to(MOOCRatingDAO.class);
        config.set(RatingFile.class)
              .to(new File("data/course-rating.csv"));


        config.bind(ItemDAO.class)
              .to(CSVItemTagDAO.class);
        config.set(TagFile.class)
              .to(new File("data/course-tag.csv"));
        config.set(TitleFile.class)
              .to(new File("data/course.csv"));

        config.bind(UserDAO.class)
              .to(MOOCUserDAO.class);
        config.set(UserFile.class)
              .to(new File("data/user.csv"));

        config.bind(ItemScorer.class)
              .to(TFIDFItemScorer.class);
        return config;
    }

    private static LenskitConfiguration configureTeacherRecommender() {
        LenskitConfiguration config = new LenskitConfiguration();
        config.bind(EventDAO.class)
                .to(MOOCRatingDAO.class);
        config.set(RatingFile.class)
                .to(new File("data/teacher-rating.csv"));


        config.bind(ItemDAO.class)
                .to(CSVItemTagDAO.class);
        config.set(TagFile.class)
                .to(new File("data/teacher-tag.csv"));
        config.set(TitleFile.class)
                .to(new File("data/teacher.csv"));

        config.bind(UserDAO.class)
                .to(MOOCUserDAO.class);
        config.set(UserFile.class)
                .to(new File("data/user.csv"));

        config.bind(ItemScorer.class)
                .to(TFIDFItemScorer.class);
        return config;
    }
}