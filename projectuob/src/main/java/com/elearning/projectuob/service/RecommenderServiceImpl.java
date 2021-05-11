package com.elearning.projectuob.service;

import com.elearning.projectuob.dto.Recommendations;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class RecommenderServiceImpl implements RecommenderService{

//    final String url = "http://localhost:8081/api/recommendations/";
    final String url = "http://localhost:8081/api/recommendations/";

    @Override
    public Recommendations getCourseRecommendations(int userId, int nRec) {

        RestTemplate restTemplate = new RestTemplate();
//        Map<String, Integer> params = new HashMap<String, Integer>();
//        params.put("userId", userId);
//        params.put("nRec", nRec);
        Recommendations recommendations = restTemplate.getForObject(url+"get-recommendations/?userId="+userId+"&nRec="+nRec, Recommendations.class);
        return recommendations;
    }

    @Override
    public Recommendations getTeacherRecommendations(int userId, int nRec) {
        RestTemplate restTemplate = new RestTemplate();
        Recommendations recommendations = restTemplate.getForObject(url+"get-teacher-recommendations/?userId="+userId+"&nRec="+nRec, Recommendations.class);
        return recommendations;
    }
}
