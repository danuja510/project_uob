import {Course} from '../../masters/course/course.model';

export class CartItem {

  public quantity: number;

  constructor(public course: Course) {
    this.quantity = 1;
  }
}
