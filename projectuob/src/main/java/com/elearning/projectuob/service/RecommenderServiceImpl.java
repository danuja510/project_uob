package com.elearning.projectuob.service;

import com.elearning.projectuob.dao.CourseRepository;
import com.elearning.projectuob.dto.Recommendations;
import com.elearning.projectuob.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class RecommenderServiceImpl implements RecommenderService{

    final String url = "http://localhost:8081/api/recommendations/";
    private CourseRepository courseDAO;

    @Autowired
    public RecommenderServiceImpl(CourseRepository CourseRepository) {
        this.courseDAO = courseDAO;
    }

    @Override
    public Recommendations getCourseRecommendations(int userId, int nRec) {

        RestTemplate restTemplate = new RestTemplate();
        Map<String, Integer> params = new HashMap<String, Integer>();
        params.put("userId", userId);
        params.put("nRec", nRec);
        Recommendations recommendations = restTemplate.getForObject(url+"get-recommendations/?userId="+userId+"&nRec="+nRec, Recommendations.class);


        return recommendations;
    }
}
