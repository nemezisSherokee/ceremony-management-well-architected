import { Customer } from 'src/app/core/model';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomersService } from './customers.service';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Auth, Storage } from 'aws-amplify';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ["../shared-styles/App.scss"]

})
export class CustomersComponent implements OnInit {
    title = 'Customers';
    customers$: Observable<Customer[] | undefined> = new Observable<Customer[]>();
    selectedCustomerId: String = '';
    selectedCustomer: Observable<any> = new Observable<any>();
    showCustomerDetail: boolean = true;
    user: CognitoUserInterface | undefined;
    authState!: AuthState;
 
    constructor(private customersService: CustomersService,
         private ref: ChangeDetectorRef,
         private route: ActivatedRoute
        ) {
        }

        async ngOnInit() {
          // Could do this to get initial customers plus 
          // listen for any changes
          
          
                
        this.route.params.subscribe( params =>
            {
                this.selectedCustomerId = params.id
            }
          );
    
    
          const token = await Auth.currentAuthenticatedUser();
        //   this.addCustomer();  
          // alert( await (await Auth.currentSession()).getAccessToken().getJwtToken())
          (this.customers$ = merge(
              // Get initial
              await this.customersService.getAll(),
              // Capture any changes to the store
              this.customersService.stateChanged.pipe(
                  map(state => {
                      if (state) {
                          return state.customers;
                      }else{
                          return []
                      }
                  })
              )));
            //   .subscribe( async customers => {
            //       if(this.selectedCustomerId){
            //           var obj = customers.filter((node: any) => {
            //             return node.id===this.selectedCustomerId;
            //         });

            //         if(obj !== undefined && obj.length > 0)
            //         {
            //             this.selectedCustomer = obj[0]
            //         }
                
            //       }
            // });

            ( await this.customersService.get(this.selectedCustomerId as string))
                    .subscribe(
                        ( customer: any) => {
                             this.selectedCustomer = ((customer as any).data.getCustomer)
                        }
                    )
            
         

            // this.customers$.subscribe(customers => {
            //         if(this.selectedCustomerId && customers){
            //           var obj = customers.filter((node: { id: String; }) => {
            //             return node.id===this.selectedCustomerId;
            //         });

            //         if(obj)
            //         {
            //             // alert(JSON.stringify(obj))
            //             this.selectedCustomer = (obj[0] as Customer)
            //         }
                
            //       }                
            //   });
              
  
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

        async selectCustomer(customer: any) {
        if (customer) {
            this.selectedCustomerId = (customer as Customer).id;
            // this.selectedCustomer = customer
            (await this.customersService.get((customer as Customer).id))
            .subscribe(
                customer => {
                     this.selectedCustomer = ((customer as any).data.getCustomer)
                }
            )
        }
      }


      
      async addCustomer() {
         
        //  Storage.put('test-private-mocked.txt', 'Private Content', {
        //   level: 'private',
        //   contentType: 'text/plain'
        //  })
        // .then (result => alert(JSON.stringify(result)))
        // .catch(err => alert(err));
        var groceries = [
            'Douala',
            'Maroua',
            'Touboro',
            'Paderborn',
            'Stuttgart',
            'Nuremberg',
            'Yaoundé'
            ]
            let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]

        const customer: any = {
            id: Date.now(),
            name: 'John' +Date.now(),
            city: mygroceries
        };

         (await  this.customersService.add(customer)).subscribe((t) => {
          // alert(JSON.stringify(t))
        });
        
      }
}
