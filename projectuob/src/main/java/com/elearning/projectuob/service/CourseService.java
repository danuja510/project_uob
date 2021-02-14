package com.elearning.projectuob.service;

import com.elearning.projectuob.entity.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getCourses();

    public Course getCourse(Long id);

    public void saveCourse(Course course);

    public void deleteCourse(Long id);
}
