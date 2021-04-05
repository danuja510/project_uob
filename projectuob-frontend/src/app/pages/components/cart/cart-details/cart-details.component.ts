import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItem} from '../cart-item.model';
import {CartService} from '../../../../services/common/cart.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  cart: CartItem[];
  cartTotalSub: Subscription;
  cartQuantitySub: Subscription;
  cartTotal = 0.00;
  cartQuantity = 0;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.cartTotalSub = this.cartService.totalPrice.subscribe(
      data => {
        this.cartTotal = data;
      }
    );
    this.cartQuantitySub = this.cartService.totalQuantity.subscribe(
      data => {
        this.cartQuantity = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.cartTotalSub.unsubscribe();
    this.cartQuantitySub.unsubscribe();
  }

  incrementQuantity(item: CartItem): void {
    this.cartService.addCartItem(item.course);
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.decrementQuantity(item);
  }

  removeItem(item: CartItem): void {
    this.cartService.remove(item);
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
