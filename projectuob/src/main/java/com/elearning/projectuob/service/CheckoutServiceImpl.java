package com.elearning.projectuob.service;

import com.elearning.projectuob.dao.StudentRepository;
import com.elearning.projectuob.dto.Purchase;
import com.elearning.projectuob.dto.PurchaseResponce;
import com.elearning.projectuob.entity.Order;
import com.elearning.projectuob.entity.OrderItem;
import com.elearning.projectuob.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private StudentRepository studentRepository;

    @Autowired
    public CheckoutServiceImpl(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    @Override
    @Transactional
    public PurchaseResponce placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> {
            order.add(item);
        });

        order.setBillingAddress(purchase.getBillingAddress());

        Student student = purchase.getStudent();
        student.add(order);

        studentRepository.save(student);

        return new PurchaseResponce(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
