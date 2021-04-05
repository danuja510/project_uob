package com.elearning.projectuob.service;

import com.elearning.projectuob.dto.Purchase;
import com.elearning.projectuob.dto.PurchaseResponce;
import org.springframework.stereotype.Service;

public interface CheckoutService {

    PurchaseResponce placeOrder(Purchase purchase);
}
