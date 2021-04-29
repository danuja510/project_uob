package com.elearning.projectuob.recommender.controller;

import com.elearning.projectuob.recommender.dto.Recommendations;
import com.elearning.projectuob.recommender.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:8080")
@RestController
@RequestMapping("/api/recommendations")
public class RecommendationsController {

    private RecommendationService recommendationService;

    @Autowired
    public RecommendationsController (RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @GetMapping("/get-recommendations")
    public Recommendations getRecommendations(@RequestParam int userId, @RequestParam int nRec){
        Recommendations recommendations = recommendationService.getRecommendations(userId, nRec);
        return recommendations;
    }

    @GetMapping("/get-teacher-recommendations")
    public Recommendations getTeacherRecommendations(@RequestParam int userId, @RequestParam int nRec){
        Recommendations recommendations = recommendationService.getTeacherRecommendations(userId, nRec);
        return recommendations;
    }
}
