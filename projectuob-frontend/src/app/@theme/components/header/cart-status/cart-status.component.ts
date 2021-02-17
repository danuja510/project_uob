import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../../services/common/cart.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit, OnDestroy {
  private totalPriceSub: Subscription;
  private totalQuantitySub: Subscription;

  totalPrice = 0.00;
  totalQuantity = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalPriceSub = this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data;
      }
    );

    this.totalQuantitySub = this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.totalPriceSub.unsubscribe();
    this.totalPriceSub.unsubscribe();
  }

}
