package com.elearning.projectuob.service;

import com.elearning.projectuob.dao.CourseDAO;
import com.elearning.projectuob.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    private CourseDAO courseDAO;

    @Autowired
    public CourseServiceImpl(@Qualifier(value = "courseDAOImpl") CourseDAO courseDAO) {
        this.courseDAO = courseDAO;
    }

    @Override
    @Transactional
    public List<Course> getCourses() {
        return this.courseDAO.getCourses();
    }

    @Override
    public Course getCourse(Long id) {
        return null;
    }

    @Override
    public void saveCourse(Course course) {

    }

    @Override
    public void deleteCourse(Long id) {

    }
}
