package com.elearning.projectuob.rest;

import com.elearning.projectuob.dto.Purchase;
import com.elearning.projectuob.dto.PurchaseResponce;
import com.elearning.projectuob.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutRestController {

    private CheckoutService checkoutService;

    @Autowired
    public CheckoutRestController (CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponce placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponce purchaseResponce = checkoutService.placeOrder(purchase);

        return purchaseResponce;
    }
}
