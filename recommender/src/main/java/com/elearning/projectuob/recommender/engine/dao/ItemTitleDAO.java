package com.elearning.projectuob.recommender.engine.dao;

import org.grouplens.lenskit.data.dao.ItemDAO;

import javax.annotation.Nullable;

/**
 * @author <a href="http://www.grouplens.org">GroupLens Research</a>
 */
public interface ItemTitleDAO extends ItemDAO {
    /**
     * @param item
     * @return
     */
    @Nullable
    public String getItemTitle(long item);
}
