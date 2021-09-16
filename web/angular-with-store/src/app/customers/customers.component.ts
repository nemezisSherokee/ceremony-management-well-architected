import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomersService } from './customers.service';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Storage } from 'aws-amplify';


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';
    customers$: Observable<Customer[] | undefined> = new Observable<Customer[]>();
    user: CognitoUserInterface | undefined;
    authState!: AuthState;
 
    constructor(private customersService: CustomersService,
         private ref: ChangeDetectorRef
        ) {}

        async ngOnInit() {
          
             onAuthUIStateChange(    async (authState, authData) => {
                this.authState = authState;
                this.user = authData as CognitoUserInterface;

                this.customers$ = 
                merge(
                   // Get initial
                    await (await this.customersService.getAll())
                    .pipe(           
                         map(customers => {
                          return customers;
                      })),
                   // Capture any changes to the store
                   this.customersService.stateChanged.pipe(
                       map(state => {
                           if (state) {
                               return state.customers;
                           }else{
                               return []
                           }
                       })
                   )) ;
                this.ref.detectChanges();
            })
          
    }

    ngOnDestroy() {
        return onAuthUIStateChange;
      }
    
    async deleteCustomer(id: number) {
        if (id) {
          (await this.customersService.delete(id)).subscribe(() => {
          });
        }
      }

      async addCustomer() {
         
        //  Storage.put('test-private-mocked.txt', 'Private Content', {
        //   level: 'private',
        //   contentType: 'text/plain'
        //  })
        // .then (result => alert(JSON.stringify(result)))
        // .catch(err => alert(err));

        const customer: any = {
            id: Date.now(),
            name: 'John' +Date.now(),
            city: 'City of '+ Date.now()
        };

         (await  this.customersService.add(customer)).subscribe((t) => {
          // alert(JSON.stringify(t))
        });
        
      }
}
