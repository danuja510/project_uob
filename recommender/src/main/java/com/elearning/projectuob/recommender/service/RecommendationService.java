package com.elearning.projectuob.recommender.service;

import com.elearning.projectuob.recommender.dto.Recommendations;

public interface RecommendationService {
    Recommendations getRecommendations(int userId, int nRec);

    Recommendations getTeacherRecommendations(int userId, int nRec);
}
