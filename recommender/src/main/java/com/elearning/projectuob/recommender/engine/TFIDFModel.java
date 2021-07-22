package com.elearning.projectuob.recommender.engine;

import com.elearning.projectuob.recommender.engine.TFIDFModelBuilder;
import org.grouplens.grapht.annotation.DefaultProvider;
import org.grouplens.lenskit.core.Shareable;
import org.grouplens.lenskit.vectors.MutableSparseVector;
import org.grouplens.lenskit.vectors.SparseVector;

import java.io.Serializable;
import java.util.Map;


@Shareable
@DefaultProvider(TFIDFModelBuilder.class)
public class TFIDFModel implements Serializable {
    private static final long serialVersionUID = 1L;

    private final Map<String, Long> tagIds;
    private final Map<Long, SparseVector> itemVectors;

    /**
     * @param tagIds A map of tags to their IDs.
     * @param itemVectors A map of item IDs to tag vectors.
     */
    TFIDFModel(Map<String,Long> tagIds, Map<Long,SparseVector> itemVectors) {
        this.tagIds = tagIds;
        this.itemVectors = itemVectors;
    }

    /**
     * @return A fresh vector over tag IDs.
     */
    public MutableSparseVector newTagVector() {
        return MutableSparseVector.create(tagIds.values());
    }

    /**
     * @param item The item.
     * @return The item's tag vector.
     */
    public SparseVector getItemVector(long item) {
        SparseVector vec = itemVectors.get(item);
        if (vec == null) {
            return SparseVector.empty();
        } else {
            return vec;
        }
    }
}
