package com.elearning.projectuob.recommender.engine.dao;

import org.grouplens.lenskit.data.dao.ItemDAO;

import java.util.List;
import java.util.Set;


public interface ItemTagDAO extends ItemDAO {
    /**
     * @param item The item.
     * @return The item's tags.
     */
    List<String> getItemTags(long item);

    /**
     * @return The set of known tags.
     */
    Set<String> getTagVocabulary();
}
