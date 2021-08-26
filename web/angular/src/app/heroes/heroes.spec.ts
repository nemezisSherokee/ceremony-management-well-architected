import { Hero } from '../core';
import { HerogqlService as HeroService } from './herogql.service' ;
import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('Heros Component', () => {
	let component: HeroesComponent;
	let service: HeroService;

	beforeEach(() => {
    service = new HeroService(null);
		component = new HeroesComponent(service);
	});

	it('should set heroes array with the items returned from the server', () => {
		const heroes = [
			{ id: '1', name: 'a', description:'ae'},
			{ id: '2', name: 'b', description:'be'},
			{ id: '3', name: 'c', description:'ce'},
		];

		spyOn(service, 'getAll').and.callFake(() => {
			return of<Hero[]>(heroes);
		});
    
		component.ngOnInit(); 
    component.heroes$.subscribe(data=>
      {
        expect(data).toEqual(heroes);
      }
    )

	});

  
});

