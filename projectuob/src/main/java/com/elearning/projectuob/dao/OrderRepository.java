package com.elearning.projectuob.dao;

import com.elearning.projectuob.entity.Order;
import com.elearning.projectuob.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {

    Page<Order> findByStudentStudentNumber(@RequestParam("id") Long id, Pageable pageable);
}
