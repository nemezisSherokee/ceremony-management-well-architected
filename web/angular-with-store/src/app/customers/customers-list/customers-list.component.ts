import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SorterService } from '../../core/sorter.service';
import { Customer } from '../../core/model/customer';
 
@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ["../../shared-styles/App.scss"]
})
export class CustomersListComponent implements OnInit {
    private _customers: Customer[] = [];

    @Input() get customers(): Customer[] {
        return this._customers;
    }
    
    @Input() selectedCustomer: String = ""

    
    @Output() onDeleteCustomer: EventEmitter<any> = new EventEmitter();
    @Output() onSelectCustomer: EventEmitter<any> = new EventEmitter();

    set customers(value: Customer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }
    filteredCustomers: Customer[] = [];
    customersOrderTotal = 0;
    currencyCode = 'USD';

    constructor(private sorterService: SorterService) { }

    ngOnInit() {

    }

    delete(id: number) {
        if (id) {
            this.onDeleteCustomer.emit([id]);
        }
      }

      selectCustomer(id: String) {
        if (id) {
            this.onSelectCustomer.emit([id]);
        }
      }
 
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: Customer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: Customer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string) {
        this.sorterService.sort(this.filteredCustomers, prop);
    }

    customerTrackBy(index: number, customer: Customer) {
        return customer.id;
    }

}
