import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SorterService } from '../../core/sorter.service';
import { Customer } from '../../core/model/customer';
 
@Component({
    selector: 'customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ["../../shared-styles/App.scss"]
})
export class CustomersDetailComponent implements OnInit {
     @Input() customer: any 

    
    @Output() onDeleteCustomer: EventEmitter<any> = new EventEmitter();
    @Output() onSelectCustomer: EventEmitter<any> = new EventEmitter();
 
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
   

}
