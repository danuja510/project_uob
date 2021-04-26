import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/common/login.service';
import {StudentService} from '../../../services/backend/student.service';
import {OrderService} from '../../../services/backend/order.service';
import {Order} from '../../components/checkout/order.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(
    private login: LoginService,
    private studentService: StudentService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.orderService.getOrdersByStudent(this.login.getStudent().studentNumber).subscribe(
      response => {
        this.orders = response;
      }
    );
  }

  orderDetails(id: number): void {

  }
}
