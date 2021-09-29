import { getCustomer, listCustomers, headCustomers } from './../../graphql/queries';
import {  createCustomer, deleteCustomer, updateCustomer } from './../../graphql/mutations';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';
import { StoreState } from '../shared/interfaces';
import { API, graphqlOperation } from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class CustomersService extends ObservableStore<StoreState> {

    nextNextToken: any = undefined
    previousTokens: any = undefined
    constructor() { 
        super({ });

    }

    private setNextNextToken(token: any){
        if(this.nextNextToken !== undefined)
          this.previousTokens = this.nextNextToken

        this.nextNextToken = token
    }
    private async fetchCustomers() {

        let owner = "";
        let nextToken = this.nextNextToken;
        let limit = 2;
        let sortDirection = "ASC";

        const variables = {
            nextToken,
            owner,
            limit,
            sortDirection,
          }
      
        var response = await API.graphql(graphqlOperation(headCustomers, variables))
        var customers = (response as any).data.listCustomers.items;
        this.setNextNextToken((response as any).data.listCustomers.nextToken)
        // alert((response as any).data.listCustomers.nextToken)
        return of(customers)       
             .pipe(
                    map(customers => {
                        this.setState({ customers }, CustomersStoreActions.GetCustomers);
                        return customers;
                    }),
                    catchError(this.handleError)
                );
    }

    async getAll()  {
        const state = this.getState();
        // pull from store cache
        if (state && state.customers) {
            return of(state.customers);
        }
        // doesn't exist in store so fetch from server
        else {
            return (await this.fetchCustomers())
                .pipe(
                    // map added to better handle extern http call
                map(customers => {
                    // this.setState({ customers }, CustomersStoreActions.GetCustomers);
                    return customers;
                }), 
            catchError(this.handleError)
                );
        }
    }
 
    async get(id: string) {
        let customerIdObject: any = {"id": id}
        let customer = await  API.graphql(graphqlOperation(getCustomer, customerIdObject))
 
        return of(customer)
        .pipe(
               map(customers => {
                   this.setState({ customer }, CustomersStoreActions.GetCustomers);
                   return customers;
               }),
               catchError(this.handleError)
           );

    }

     async add(customer: any) {
       await  API.graphql(graphqlOperation(createCustomer, {input: customer}))
       this.setState( { customer }, CustomersStoreActions.UpdateCustomer);
       return this.fetchCustomers()
    }

    async update(customer: any) {
        let updatedCustomer = {
            id: customer.id,
            name: customer.name,
            city: customer.city
        }
        await  API.graphql(graphqlOperation(updateCustomer, {input: updatedCustomer}))
        this.setState( { customer }, CustomersStoreActions.UpdateCustomer);
        return this.fetchCustomers()
    }

    async delete(id: any) {
        let customerIdObject: any = {"id": id}
        await  API.graphql(graphqlOperation(deleteCustomer, {input: customerIdObject}))
        return this.fetchCustomers()
    }

    private deleteLocalCustomer(id: String) {
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