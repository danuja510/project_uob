package com.elearning.projectuob.dto;

import com.elearning.projectuob.entity.Address;
import com.elearning.projectuob.entity.Order;
import com.elearning.projectuob.entity.OrderItem;
import com.elearning.projectuob.entity.Student;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Student student;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
