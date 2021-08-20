import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { asyncScheduler } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Hero } from '../core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
 

describe('TodoList in AppComponent', () =>  {
  let appComponent: HeroesComponent;
 
  let fixture: ComponentFixture<HeroesComponent>;
   
  let heroService: HeroService;
  const heroData: Hero[] = [
 
    {
     
     
    id: '1',
     
    name: 'delectus aut autem',
    description: 'delectus aut autem'
    }
      
    ];
  beforeEach(waitForAsync(() => {
 
    TestBed.configureTestingModule({
     
    imports: [FormsModule],
     
    declarations: [HeroesComponent],
     
    providers: [ {
     
    provide: HeroService,
     
    useValue: {
         getAll: () => of(heroData )
    }
     
    } ]
     
    }).compileComponents(); }));

    it('should have todo item from service in component', () => {
      let fixture: ComponentFixture<HeroesComponent>;

      //fixture.detectChanges();
      
      expect(appComponent.heroes$).toEqual(of(heroData ));
      
      });
  
});


// describe('HeroesComponent: integration test', () => {
//   let component: HeroesComponent;
//   let fixture: ComponentFixture<HeroesComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HeroesComponent],
//       providers: [HeroService],
//     }).compileComponents();

//     fixture = TestBed.createComponent(HeroesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('shows the start count', () => {
//     expectText(fixture, 'count', '0');
//   });

//   it('increments the count', () => {
//     click(fixture, 'increment-button');
//     fixture.detectChanges();
//     expectText(fixture, 'count', '1');
//   });

//   it('decrements the count', () => {
//     click(fixture, 'decrement-button');
//     fixture.detectChanges();
//     expectText(fixture, 'count', '-1');
//   });

//   it('resets the count', () => {
//     const newCount = 456;
//     setFieldValue(fixture, 'reset-input', String(newCount));
//     click(fixture, 'reset-button');
//     fixture.detectChanges();
//     expectText(fixture, 'count', String(newCount));
//   });
// });


// function expectText(fixture: ComponentFixture<HeroesComponent>, arg1: string, arg2: string) {
//   throw new Error('Function not implemented.');
// }

// function click(fixture: ComponentFixture<HeroesComponent>, arg1: string) {
//   throw new Error('Function not implemented.');
// }

// function setFieldValue(fixture: ComponentFixture<HeroesComponent>, arg1: string, arg2: string) {
//   throw new Error('Function not implemented.');
// }
// // describe('HeroesComponent: integration test', () => {

// // let httpClientSpy: { get: jasmine.Spy };
// // let heroService: HeroService;

// // let heroServiceStub: Partial<HeroService>;

// // beforeEach(() => {
// //   // stub UserService for test purposes
// //   heroServiceStub = {
// //     getAll: null
// //   };

// //   TestBed.configureTestingModule({
// //      declarations: [ HeroesComponent ],
// //      providers: [ { provide: HeroService, useValue: heroServiceStub } ],
// //   });

// //   let fixture = TestBed.createComponent(HeroesComponent);
// //   const comp    = fixture.componentInstance;

// //   // UserService from the root injector
// //   heroService = TestBed.inject(HeroService);

// //   //  get the "welcome" element by CSS selector (e.g., by class name)
// //   const  content_heros = fixture.nativeElement.querySelector('.content-heros');
// // });

// // it('should welcome the user', () => {
// //   fixture.detectChanges();
// //   const content = el.textContent;
// //   expect(content).toContain('Welcome', '"Welcome ..."');
// //   expect(content).toContain('Test User', 'expected name');
// // });
// // }