package com.elearning.projectuob.dto;

import com.elearning.projectuob.entity.Course;
import lombok.Data;

import java.util.List;

@Data
public class CourseRecommendations {
    private List<Course> courses;
}
