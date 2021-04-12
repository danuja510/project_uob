package com.elearning.projectuob.service;

import com.elearning.projectuob.dto.Recommendations;
import com.elearning.projectuob.entity.Course;

import java.util.List;
import java.util.Optional;

public interface RecommenderService {

    public Recommendations getCourseRecommendations(int userId, int nRec);
}
