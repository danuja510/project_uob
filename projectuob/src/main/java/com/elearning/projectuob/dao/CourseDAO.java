package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;

import java.util.List;

public interface CourseDAO {
    public List<Course> getCourses();

    public Course getCourse(Long id);

    public void saveCourse(Course course);

    public void deleteCourse(Long id);
}
