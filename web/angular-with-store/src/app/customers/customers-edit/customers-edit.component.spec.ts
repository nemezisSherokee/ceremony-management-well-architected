import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { Customer } from 'src/app/core/model';
import { CustomersService } from '../customers.service';
import { CustomersEditComponent } from './customers-edit.component';

describe('Customer Edit component', () => {
	let component: CustomersEditComponent;
	let service: CustomersService;
    let  http: HttpClient;
    let  router: Router;
    let formBuilder: FormBuilder = new FormBuilder();
    let route: ActivatedRoute = new ActivatedRoute();
    let snapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    
	beforeEach(() => {
    service = new CustomersService(http);
		component = new CustomersEditComponent(service, router, formBuilder, route);
	});

	it('should return a specific component when needed', () => {
		const customers = [
			{ id: 1, name: 'a', city:'ae', orderTotal:45 },
			{ id: 2, name: 'b', city:'be', orderTotal:45},
			{ id: 3, name: 'c', city:'ce', orderTotal:45},
		];

        let customer = { id: 1, name: 'a', city:'ae', orderTotal:45 }
      
		spyOn(service, 'getAll').and.callFake(() => {
			return of<Customer[]>(customers);
		});

        spyOn(service,'get').and.callFake(function(arg) {
            if (arg === 10){
                return of(customer);
            } else {
                return of(customer);
            }
        });

        route.snapshot = snapshot;
		component.ngOnInit(); 
    // component.heroes$.subscribe(data=>
    //   {
    //     expect(data).toEqual(heroes);
    //   }
    // )

    expect(component.customer).toBe(customer);
});

  
});

