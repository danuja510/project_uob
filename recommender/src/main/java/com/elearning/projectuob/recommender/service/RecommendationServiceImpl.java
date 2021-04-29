package com.elearning.projectuob.recommender.service;

import com.elearning.projectuob.recommender.dto.Recommendations;
import com.elearning.projectuob.recommender.engine.CBFMain;
import org.grouplens.lenskit.RecommenderBuildException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecommendationServiceImpl implements RecommendationService {
    private CBFMain recommendationEngine;

    @Autowired
    public RecommendationServiceImpl (CBFMain cbfMain) {
        this.recommendationEngine = cbfMain;
    }

    @Override
    public Recommendations getRecommendations(int userId, int nRec) {
        try {
            Recommendations recommendations = new Recommendations();
            recommendations.setItemIds(recommendationEngine.getRecommendations(userId, nRec));
            return recommendations;
        } catch (RecommenderBuildException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Recommendations getTeacherRecommendations(int userId, int nRec) {
        try {
            Recommendations recommendations = new Recommendations();
            recommendations.setItemIds(recommendationEngine.getTeacherRecommendations(userId, nRec));
            return recommendations;
        } catch (RecommenderBuildException e) {
            e.printStackTrace();
            return null;
        }
    }
}
