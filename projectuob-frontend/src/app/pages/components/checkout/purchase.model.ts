import {Student} from '../../masters/student/student.model';
import {Address} from '../../../shared/address.model';
import {Order} from './order.model';
import {OrderItem} from './order-item.model';

export class Purchase {
  student: Student;
  billingAddress: Address;
  order: Order;
  orderItems: OrderItem[];
}
