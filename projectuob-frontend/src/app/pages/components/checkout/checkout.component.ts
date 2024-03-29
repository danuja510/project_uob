import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../../../services/common/cart.service';
import {Subscription} from 'rxjs';
import {CheckoutService} from '../../../services/backend/checkout.service';
import {Router} from '@angular/router';
import {Order} from './order.model';
import {OrderItem} from './order-item.model';
import {Purchase} from './purchase.model';
import {Student} from '../../masters/student/student.model';
import {LoginService} from '../../../services/common/login.service';
import {CourseEnrollmentService} from '../../../services/backend/course-enrollment.service';
import {CourseEnrollment} from '../../masters/student/student-course-enrollments/course-enrollment.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  checkoutForm : FormGroup;
  totalValueSub: Subscription;
  totalQuantitySub: Subscription;
  totalValue = 0.00;
  totalQuantity = 0;

  constructor(
    private cartService: CartService,
    private checkoutSerice: CheckoutService,
    private router: Router,
    private login: LoginService,
    private courseEnrollmentService: CourseEnrollmentService
  ) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      customer: new FormGroup({
        studentFirstName: new FormControl(this.login.getStudent().studentFirstName, Validators.required),
        studentLastName: new FormControl(this.login.getStudent().studentLastName, Validators.required),
        studentEmail: new FormControl(this.login.getStudent().studentEmail, [Validators.required, Validators.email])
      }),
      billingAddress: new FormGroup({
        street: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        zip: new FormControl(null, Validators.required)
      }),
      creditCard: new FormGroup({
        type: new FormControl('visa'),
        name: new FormControl(null, Validators.required),
        cardNo: new FormControl(null, Validators.required),
        cvv: new FormControl(null, Validators.required),
        expiryMonth: new FormControl(null),
        expiryYear: new FormControl(null)
      })
    });

    this.totalValueSub = this.cartService.totalPrice.subscribe( data => {
      this.totalValue = data;
    });
    this.totalQuantitySub = this.cartService.totalQuantity.subscribe( data => {
      this.totalQuantity = data;
    });

  }

  onSubmit(): void{
    console.log(this.checkoutForm.value);

    if (this.checkoutForm.invalid){
      this.checkoutForm.markAllAsTouched();
      return;
    }

    let order= new Order();
    order.totalPrice = this.totalValue;
    order.totalQuantity = this.totalQuantity;

    const cartIems = this.cartService.getCartItems();

    let orderItem: OrderItem[] = cartIems.map(tempCartItem => new OrderItem(tempCartItem));

    let purchase = new Purchase();

    // purchase.student = this.checkoutForm.controls['customer'].value;
    purchase.student = this.login.getStudent();
    // purchase.student.studentFirstName = this.checkoutForm.controls['customer'].value.studentFirstName;
    // purchase.student.studentLastName = 'test';
    // purchase.student.studentEmail = 'test@test.com';

    purchase.billingAddress = this.checkoutForm.controls['billingAddress'].value;

    purchase.order = order;
    purchase.orderItems = orderItem;

    this.checkoutSerice.placeOrder(purchase).subscribe({
      next: responce => {
        console.log(responce.orderTrackingNumber);
        this.courseEnrollmentService.getCourseEnrollmentsByStudent(this.login.getStudent().studentNumber).subscribe(
          response2 => {
            const enrolledCourses = response2;
            if (enrolledCourses.length === 0){
              for (const cartItem of cartIems){
                this.courseEnrollmentService.addCourseEnrollment(
                  new CourseEnrollment(
                    cartItem.course.courseId,
                    this.login.getStudent().studentNumber,
                    cartItem.quantity
                  )
                ).subscribe();
              }
            }else{
              loop1: for (const cartItem of cartIems){
                loop2: for ( const course of enrolledCourses){
                  if (course.courseId === cartItem.course.courseId) {
                    course.noOfSessions += cartItem.quantity;
                    this.courseEnrollmentService.updateCourseEnrollment(course, course.no).subscribe();
                    continue loop1;
                  }
                }
                this.courseEnrollmentService.addCourseEnrollment(
                  new CourseEnrollment(
                    cartItem.course.courseId,
                    this.login.getStudent().studentNumber,
                    cartItem.quantity
                  )
                ).subscribe();
                continue loop1;
              }
            }
          }
        );
        this.resetCart();
      },
      error: err => {
        alert(`An Error occurred ${err.message}`);
      }
    });
  }

  // billAddressSameAsShippingAddress(event: Event): void {
  //   if (event.target.value){
  //     this.checkoutForm.controls.billingAddress.setValue(this.checkoutForm.controls.shippingAddress.value);
  //   } else {
  //     this.checkoutForm.controls.billingAddress.reset();
  //   }
  // }

  ngOnDestroy(): void {
    this.totalValueSub.unsubscribe();
    this.totalQuantitySub.unsubscribe();
  }

  private resetCart() {
    this.cartService.cart = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    this.checkoutForm.reset();

    this.router.navigateByUrl('/course');
  }
}
