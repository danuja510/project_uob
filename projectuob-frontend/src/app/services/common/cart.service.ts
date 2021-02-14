import {Injectable} from '@angular/core';
import {CartItem} from '../../pages/components/cart/cart-item.model';
import {Subject} from 'rxjs';
import {Course} from '../../pages/masters/course/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  addCartItem(course: Course): void{
    let itemExisting = false;

    for (const cartItem of this.cart){
      if (cartItem.course.courseId === course.courseId){
        itemExisting = true;
        cartItem.quantity++;
        break;
      }
    }
    if (!itemExisting) {
      console.log('hi');
      this.cart.push(new CartItem(course));
    }
    this.calculateCart();
  }

  private calculateCart(): void {
    let totalCartPrice = 0.00;
    let totalCartQuantity = 0;

    for (const item of this.cart){
      totalCartPrice += item.course.perSessionPrice * item.quantity;
      totalCartQuantity += item.quantity;
    }

    this.totalPrice.next(totalCartPrice);
    this.totalQuantity.next(totalCartQuantity);
  }
}
