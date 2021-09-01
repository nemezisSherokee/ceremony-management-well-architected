import { Component, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable, of, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomersService } from './customers.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';
    customers$: Observable<Customer[] | undefined> = new Observable<Customer[]>();

    constructor(private customersService: CustomersService
        ) {}

    ngOnInit() {
        // this.customers$ = this.customersService.getAll();

        // Could do this to get initial customers plus 
        // listen for any changes
        this.customers$ = merge(
            // Get initial
            this.customersService.getAll(),
            // Capture any changes to the store
            this.customersService.stateChanged.pipe(
                map(state => {
                    if (state) {
                        return state.customers;
                    }else{
                        return []
                    }
                })
            ));
    }
    
    deleteCustomer(id: number) {
        if (id) {
          this.customersService.delete(id).subscribe(() => {
          });
        }
      }

    addCustomer() {
         
        const customer: Customer = {
            id: Date.now(),
            name: 'John' +Date.now(),
            city: 'Doe'+ Date.now(),
            orderTotal: Math.random() * 10
          };

          this.customersService.add(customer).subscribe(() => {
        });
        
      }
    

}