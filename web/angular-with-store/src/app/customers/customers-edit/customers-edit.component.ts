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

  customer: any | null = null;
  subsink = new SubSink();

  constructor(
      private customersService: CustomersService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute) { }
 
  async ngOnInit() {
      const id = String(this.route.snapshot.paramMap.get('id'));
      (await this.customersService.get(id)).subscribe(customerAsync => {
          if (customerAsync) {
            this.customer = (customerAsync as any).data.getCustomer;//{}
            // this.customer.id = (customer as any).data.getCustomer.id;
            // this.customer.name = (customer as any).data.getCustomer.name;
            // this.customer.city = (customer as any).data.getCustomer.city
            this.customerForm.patchValue(this.customer);
          }
        });
  }

  addCustomer() {
    const customer: any = {
      id: Date.now(),
      name: 'John' +Date.now(),
      city: 'City of '+ Date.now()
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

  async add(customer: any) {
     (await this.customersService.add(customer)).subscribe(() => {
      this.navigateHome();
    });
  }

  async delete() {
    if (this.customer?.id) {
      this.subsink.sink = (await this.customersService.delete(this.customer.id)).subscribe(() => {
        this.navigateHome();
      });
    }
  }

  async update(customer: Customer) {
    (await this.customersService.update(customer)).subscribe(() => {
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
