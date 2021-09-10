import { getBlog } from './../../graphql/queries';
// import { graphqlOperation } from '@aws-amplify/api-graphql';
import { createBlog } from './../../graphql/mutations';
import { listBlogs } from './../../graphql/queries';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';

import { Customer } from '../core/model';
import { StoreState } from '../shared/interfaces';

import { AmplifyService } from 'aws-amplify-angular';
import { API, graphqlOperation } from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class CustomersService extends ObservableStore<StoreState> {

    apiUrl = 'apisss/customers';

    constructor(private http: HttpClient) { 
        super({ });
    }

    private async fetchCustomers() {
        var response = await API.graphql(graphqlOperation(listBlogs))
        var blogs = (response as any).data.listBlogs.items;

        // alert("fetching ...."+JSON.stringify(blogs.length))
        return of(blogs)       
             .pipe(
                    map(customers => {
                        //  alert(JSON.stringify(customers))
                        this.setState({ customers }, CustomersStoreActions.GetCustomers);
                        return customers;
                    }),
                    catchError(this.handleError)
                );
    ;
        // return this.http.get<Customer[]>(this.apiUrl)
        //     .pipe(
        //         map(customers => {
        //             this.setState({ customers }, CustomersStoreActions.GetCustomers);
        //             return customers;
        //         }),
        //         catchError(this.handleError)
        //     );
    }

    async getAll()  {
        const state = this.getState();
        // pull from store cache
        if (state && state.customers) {
            return of(state.customers);
        }
        // doesn't exist in store so fetch from server
        else {
            // alert(JSON.stringify(this.fetchCustomers() ))

            // of(this.fetchCustomers()).subscribe(asta => 
            // {
            //     alert(JSON.stringify(asta))
            // })

            // return this.fetchCustomers().then((blogs) => {
            //     blogs.pipe(
            //     map(customers => {
            //         alert(customers)
            //         // this.setState({ customers }, CustomersStoreActions.GetCustomers);
            //         return customers;
            //     }),
            //     catchError((this.handleError))


            //     )
            //     // alert("tout le monde est lá")
            // })
            return (await this.fetchCustomers())
                .pipe(
                    catchError(this.handleError)
                );
        }
    }

    async get(id: string) {
        // let blogId: any = {"id": "21568d74-844d-4759-b85d-30089add20af"}
        let blogId: any = {"id": id}
        let blog = await  API.graphql(graphqlOperation(getBlog, blogId))
 
        return of(blog)
        .pipe(
               map(customers => {
                   //  alert(JSON.stringify(customers))
                //    this.setState({ customers }, CustomersStoreActions.GetCustomers);
                   return customers;
               }),
               catchError(this.handleError)
           );

        // return of(blogs)       
        // .pipe(
        //        map(customers => {
        //            //  alert(JSON.stringify(customers))
        //            this.setState({ customers }, CustomersStoreActions.GetCustomers);
        //            return customers;
        //        }),
        //        catchError(this.handleError)
        //    );

        // return of(this.getAll())
        //     .pipe(
        //         map(custs => {
        //             let filteredCusts = custs.filter((cust: { id: number; }) => cust.id === id);
        //             const customer = ((filteredCusts && filteredCusts.length) ? filteredCusts[0] : null) as Customer;                
        //             this.setState({ customer }, CustomersStoreActions.GetCustomer);
        //             return customer;
        //         }),
        //         catchError(this.handleError)
        //     );
    }

     async add(customer: Customer) {
       
       let blog: any = {name: customer.name }
       await  API.graphql(graphqlOperation(createBlog, {input: blog}))
       return this.fetchCustomers()
    //    return this.http.post(this.apiUrl, customer)
    //         .pipe(
    //               tap( u => alert(JSON.stringify(u))),
    //             switchMap(cust => {
    //                 // update local store with added customer data
    //                 // not required of course unless the store cache is needed 
    //                 // (it is for the customer list component in this example)
    //                 // this.setState( { customer }, CustomersStoreActions.UpdateCustomer);
    //                 return this.fetchCustomers();
    //             }),
    //             catchError(this.handleError)
    //         );
    }

    update(customer: Customer) {
        return this.http.put(this.apiUrl + '/' + customer.id, customer)
            .pipe(
                // tap( u => alert(JSON.stringify(u))),
                switchMap(cust => {
                    // update local store with updated customer data
                    // not required of course unless the store cache is needed 
                    // (it is for the customer list component in this example)
                    this.setState( { customer }, CustomersStoreActions.UpdateCustomer);
                    return this.fetchCustomers();
                }),
                catchError(this.handleError)
            );
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + '/' + id)
            .pipe(
                switchMap(() => {
                    // update local store since customer deleted
                    // not required of course unless the store cache is needed 
                    // (it is for the customer list component in this example)  
                    const customers = this.deleteLocalCustomer(id);
                    this.setState({ customers, customer: null }, CustomersStoreActions.DeleteCustomer);                 
                    return this.fetchCustomers();
                }),
                catchError(this.handleError)
            );
    }

    private deleteLocalCustomer(id: number) {
        let customers = this.getState().customers;
        for(let i = customers.length -1; i--;){ 
            if(customers[i].id === id){ 
                customers.splice(i,1); 
                break;
            }
        }
        return customers;
    }

    private handleError(error: any) {
        alert('server error:' + error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
      }
}

export enum CustomersStoreActions {
    GetCustomers = 'GET_CUSTOMERS',
    GetCustomer = 'GET_CUSTOMER',
    UpdateCustomer = 'UPDATE_CUSTOMER',
    DeleteCustomer = 'DELETE_CUSTOMER'
}