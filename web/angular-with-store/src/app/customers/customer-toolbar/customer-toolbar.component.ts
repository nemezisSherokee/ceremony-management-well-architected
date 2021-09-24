import { Customer } from 'src/app/core/model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SorterService } from '../../core/sorter.service';
 
@Component({
    selector: 'customer-toolbar',
    templateUrl: './customer-toolbar.component.html',
    styleUrls: ["../../shared-styles/App.scss"]
})
export class CustomersToolbarComponent implements OnInit {
     @Input() customer: any 

    
    @Output() onDeleteCustomer: EventEmitter<any> = new EventEmitter();
    @Output() onAddingCustomer: EventEmitter<any> = new EventEmitter();
    @Output() onEditingCustomer: EventEmitter<any> = new EventEmitter();
 
    filteredCustomers: Customer[] = [];
    customersOrderTotal = 0;
    currencyCode = 'USD';

    constructor(private sorterService: SorterService) { }

    @Input() addingItem: boolean = false
    @Input() editingItem: boolean = false
    @Input() deletingItem: boolean = false
    
    ngOnInit() {

    }

    delete(id: number) {
        if (id) {
            this.onDeleteCustomer.emit([id]);
        }
      }

      addCustomer() {
        this.onAddingCustomer.emit();
        this.addingItem = true
    }
   
    editCustomer(customer: any) {
        this.onEditingCustomer.emit([customer]);
        this.editingItem = true
        this.addingItem = false
        this.customer = customer
    }

}
