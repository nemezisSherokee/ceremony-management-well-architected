import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// The following is for testing only
// import { ObservableStore } from '../../../../../src/observable-store';
import { ObservableStore } from '@codewithdan/observable-store';

import { Order } from '../core/model';
import { StoreState } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class OrdersService extends ObservableStore<StoreState> {

    apiUrl = 'assets/orders.json';

    constructor(private http: HttpClient) { 
        super({ trackStateHistory: true, logStateChanges: true });
     }

    private fetchOrders() {
        return this.http.get<Order[]>(this.apiUrl)
            .pipe(
                map(orders => {
                    this.setState({ orders }, OrdersStoreActions.GetOrders);
                    return orders;
                }),
                catchError(this.handleError)
            );
    }

    getAll() {
        let state = this.getState();
        // pull from store cache
        if (state && state.orders) {
            return of(state.orders);
        }
        // doesn't exist in store so fetch from server
        else {
            return this.fetchOrders();
        }
    }

    get(id: any) {
        let state = this.getState();
        // pull from store cache
        if (state && state.orders) {
            return of(this.filterOrders(id, state.orders));
        }
        // doesn't exist in store so fetch from server
        else {
            return this.fetchOrders()
                .pipe(
                    map(orders => {
                        return this.filterOrders(id, orders);
                    })
                );
        }
    }

    filterOrders(id: any, orders : Order[]) {
       return orders.filter(order => +order.customerId === id);
    }
    

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
    }
}

export enum OrdersStoreActions {
    GetOrders = 'GET_ORDERS'
}