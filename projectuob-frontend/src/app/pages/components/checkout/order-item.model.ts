import {CartItem} from '../cart/cart-item.model';

export class OrderItem {
  imageUrl: string;
  pricePerSession: number;
  quantity: number;
  courseId: number;

  constructor(cartItem: CartItem) {
    this.imageUrl = cartItem.course.imageUrl;
    this.pricePerSession = cartItem.course.perSessionPrice;
    this.quantity = cartItem.quantity;
    this.courseId = cartItem.course.courseId;
  }
}
