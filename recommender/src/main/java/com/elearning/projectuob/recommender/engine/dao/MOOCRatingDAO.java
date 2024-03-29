package com.elearning.projectuob.recommender.engine.dao;

import org.grouplens.lenskit.cursors.Cursor;
import org.grouplens.lenskit.cursors.Cursors;
import org.grouplens.lenskit.data.dao.EventCollectionDAO;
import org.grouplens.lenskit.data.dao.EventDAO;
import org.grouplens.lenskit.data.dao.SimpleFileRatingDAO;
import org.grouplens.lenskit.data.dao.SortOrder;
import org.grouplens.lenskit.data.event.Event;

import javax.inject.Inject;
import java.io.File;


public class MOOCRatingDAO implements EventDAO {
    private final SimpleFileRatingDAO csvDao;
    private transient volatile EventCollectionDAO cache;

    @Inject
    public MOOCRatingDAO(@RatingFile File file) {
        csvDao = new SimpleFileRatingDAO(file, ",");
    }

    /**
     */
    private void ensureRatingCache() {
        if (cache == null) {
            synchronized (this) {
                if (cache == null) {
                    cache = new EventCollectionDAO(Cursors.makeList(csvDao.streamEvents()));
                }
            }
        }
    }

    @Override
    public Cursor<Event> streamEvents() {
        ensureRatingCache();
        return cache.streamEvents();
    }

    @Override
    public <E extends Event> Cursor<E> streamEvents(Class<E> type) {
        ensureRatingCache();
        return cache.streamEvents(type);
    }

    @Override
    public <E extends Event> Cursor<E> streamEvents(Class<E> type, SortOrder order) {
        ensureRatingCache();
        return cache.streamEvents(type, order);
    }
}
