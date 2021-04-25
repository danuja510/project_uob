package com.elearning.projectuob.service;

import com.elearning.projectuob.dao.OrderRepository;
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
    private OrderRepository orderRepository;

    @Autowired
    public CheckoutServiceImpl(
            StudentRepository studentRepository,
            OrderRepository orderRepository){
        this.studentRepository = studentRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional
    public PurchaseResponce placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        order.setBillingAddress(purchase.getBillingAddress());

        order = orderRepository.save(order);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        Order finalOrder = order;
        orderItems.forEach(item -> {
            finalOrder.add(item);
        });


        Student student = purchase.getStudent();
        student.add(finalOrder);

        studentRepository.save(student);

        return new PurchaseResponce(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
