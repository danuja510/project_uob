package com.elearning.projectuob.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "price_per_session")
    private BigDecimal pricePerSession;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "order_id")
    private Long order;
}
