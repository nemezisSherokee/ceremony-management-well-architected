import { Component, OnInit } from '@angular/core';
import { Hero } from '../core';
import { HerogqlService } from './herogql.service';
import {  BehaviorSubject, merge, Observable, of} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  //heroes$: Observable<Hero[]>;
  message = '?';
  heroToDelete: Hero;
  showModal = false;
  private readonly _heroSource = new BehaviorSubject<Hero[]>([]);
  heroes$ = this._heroSource.asObservable();

  constructor(private heroService: HerogqlService) {
  }


  private _setHeros(heros: Hero[]): void {
    this._heroSource.next(heros);
    // this.heroes$ = this._heroSource.asObservable();
  }

  ngOnInit() {
    this.heroService.getAll().subscribe(t => (this.heroes$ = of<Hero[]>(t)));
    //this.heroes$ = this.heroService.getAll();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
    const heros = [...this._heroSource.getValue(), hero];
    this._setHeros(heros);
    this.heroes$ = merge(this.heroes$, of(heros));
  }

  askToDelete(hero: Hero) {
    this.heroToDelete = hero;
    this.showModal = true;
    if (this.heroToDelete.name) {
      this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteHero() {
    this.closeModal();
    if (this.heroToDelete) {
      this.heroService
        .delete(this.heroToDelete.id)
        .subscribe(() => (this.heroToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.heroService.getAll();
    this.clear();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      this.update(hero);
    } else {
      this.add(hero);
    }
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  update(hero: Hero) {
    // this.heroService.update(hero);
  }
}
