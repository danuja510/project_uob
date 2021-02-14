package com.elearning.projectuob.rest;

import com.elearning.projectuob.entity.Course;
import com.elearning.projectuob.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseRestController {

    private CourseService courseService;

    @Autowired
    public CourseRestController (CourseService courseService){
        this.courseService = courseService;
    }

    @GetMapping("/get")
    public List<Course> getCourses(){
        return courseService.getCourses();
    }
}
