package com.elearning.projectuob.recommender.engine.dao;

import org.grouplens.lenskit.data.dao.UserDAO;


public interface UserNameDAO extends UserDAO {
    /**
     * @param name The user name.
     * @return The user ID (>= 0), or -1 if the user does not exist.
     */
    public long getUserByName(String name);
}
