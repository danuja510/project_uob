package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Course;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

@Repository
public class CourseDAOImpl implements CourseDAO {
    EntityManager entityManager;

    @Autowired
    public CourseDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Course> getCourses() {
//        Session currentSession = entityManager.unwrap(Session.class);
        StoredProcedureQuery courses = entityManager.createNamedStoredProcedureQuery("getCourses");
        return courses.getResultList();
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
