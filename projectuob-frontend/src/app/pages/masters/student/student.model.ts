import {Order} from '../../components/checkout/order.model';

export class Student {

  public studentNumber: number;

  constructor(public slug: string,
              public studentFirstName: string,
              public studentLastName: string,
              public studentEmail: string,
              public active?: boolean,
              public imageUrl?: string) {
  }

}
