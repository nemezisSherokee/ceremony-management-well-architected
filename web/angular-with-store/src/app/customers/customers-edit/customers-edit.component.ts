import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

import { Customer } from '../../core/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit, OnDestroy {

  customerForm = this.formBuilder.group({
    id: [],
    name: [ '', Validators.required ],
    city: [ '', Validators.required ]
  });

  customer: Customer | null = null;
  subsink = new SubSink();

  constructor(
      private customersService: CustomersService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute) { }

  async ngOnInit() {
      const id = String(this.route.snapshot.paramMap.get('id'));
      let blog = (await this.customersService.get(id)).subscribe(customer => {
          if (customer) {
            //  alert(JSON.stringify((customer as any).data.getBlog))
            this.customer = {id: 0, name:"", city:"", orderTotal:0};
            this.customer.id = (customer as any).data.getBlog.id;
            this.customer.name = (customer as any).data.getBlog.name;
            this.customer.city = (customer as any).data.getBlog.name
            this.customerForm.patchValue(this.customer);
          }
        });
    
      
      // alert(JSON.stringify(blog))
      // this.subsink.sink = this.customersService.get(id).subscribe(customer => {
      //   if (customer) {
      //     this.customer = customer;
      //     this.customerForm.patchValue(this.customer);
      //   }
      // });
  }
  addCustomer() {
    const customer: Customer = {
      id: Date.now(),
      name: 'John' +Date.now(),
      city: 'Doe'+ Date.now(),
      orderTotal: Math.random() * 10
    };

    this.add(customer);
  }

  submit() {
    if (this.customerForm.valid) {
      const customerValue = { ...this.customer, ...this.customerForm.value } as Customer;
      if (customerValue.id) {
        this.update(customerValue);
      }
      else {
        this.add(customerValue);
      }
    }
  }

  async add(customer: Customer) {
     (await this.customersService.add(customer)).subscribe(() => {
      this.navigateHome();
    });
  }

  delete() {
    if (this.customer?.id) {
      this.subsink.sink = this.customersService.delete(this.customer.id).subscribe(() => {
        this.navigateHome();
      });
    }
  }

  update(customer: Customer) {
    this.subsink.sink = this.customersService.update(customer).subscribe(() => {
      this.navigateHome();
    });

  }

  navigateHome() {
    this.router.navigate(['/customers']);
  }

  ngOnDestroy() {
    this.subsink.unsubscribe();
  }

}
