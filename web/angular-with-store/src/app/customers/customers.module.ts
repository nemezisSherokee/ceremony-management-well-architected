import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersToolbarComponent } from './customer-toolbar/customer-toolbar.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';


@NgModule({
    imports: [ CommonModule, SharedModule, CustomersRoutingModule ],
    declarations: [ CustomersListComponent, 
        FilterTextboxComponent, 
        CustomersComponent, 
        CustomersEditComponent,
        CustomersDetailComponent,
        CustomersToolbarComponent
    ]})
export class CustomersModule { }
