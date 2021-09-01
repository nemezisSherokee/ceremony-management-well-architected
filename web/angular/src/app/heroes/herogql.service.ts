import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Hero } from '../core';

@Injectable({ providedIn: 'root' })
export class HerogqlService {
	constructor(private http: HttpClient) {}

	add(todo) {
		return this.http.post('...', todo).pipe(map(r => JSON.stringify(r)));
	}

	getTodos() {
		return this.http.get('...').pipe(map(r => [JSON.stringify(r)]));
	}

	getAll(): Observable<Hero[]> {
		const heroes = [
			{ id: 'Hero 1s', name: 'Hero 1 Name', description:'Hero 1 Description'},
			{ id: 'Hero 2', name: 'Hero 2 Name', description:'Hero 2 Description'},
			{ id: 'Hero 3', name: 'Hero 3 Name', description:'Hero 3 Description'},
		];

		return  of(heroes);
	}

	delete(id) {
		return this.http.delete('...').pipe(map(r => JSON.stringify(r)));
	}

	handleError<T>(arg0: string, arg1: undefined[]): any {
		throw new Error('Method not implemented.');
	}
}
