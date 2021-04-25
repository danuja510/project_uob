import {OrderItem} from './order-item.model';

export class Order {
  public totalQuantity: number;
  public totalPrice: number;
  public id: number;
  public orderTrackingNumber: string;
  public status: string;
  public dateCreated: Date;
  public lastUpdated: Date;
  public orderItems: OrderItem[];

}
