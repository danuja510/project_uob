package com.elearning.projectuob.rest;

import com.elearning.projectuob.dao.CourseDAO;
import com.elearning.projectuob.dto.Purchase;
import com.elearning.projectuob.dto.PurchaseResponce;
import com.elearning.projectuob.dto.Recommendations;
import com.elearning.projectuob.entity.Course;
import com.elearning.projectuob.service.CheckoutService;
import com.elearning.projectuob.service.RecommenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/recommender")
public class RecommenderRestController {

    private RecommenderService recommenderService;

    @Autowired
    public RecommenderRestController(RecommenderService recommenderService) {
        this.recommenderService = recommenderService;
    }

    @GetMapping("/course/get-recommendations")
    public Recommendations getRecommendations(@RequestParam int userId, @RequestParam int nRec) {

        Recommendations courses = recommenderService.getCourseRecommendations(userId, nRec);

        return courses;
    }

    @GetMapping("/teacher/get-recommendations")
    public Recommendations getTeacherRecommendations(@RequestParam int userId, @RequestParam int nRec) {

        Recommendations teachers = recommenderService.getTeacherRecommendations(userId, nRec);

        return teachers;
    }
}
