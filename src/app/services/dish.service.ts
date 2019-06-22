import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
// no longer needed as constant. We will get from server side  import { DISHES } from '../shared/dishes';


import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

/*****************************************/
    /* before handling errors
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
  */
/***********************************************/
    /* before http 
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (+dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    console.log("here");
    return of(DISHES.map(dish => dish.id ));
  }
*/
/**********************************************/
/*
 // return of() returns only one item in the future we will change this
 getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getDish(id: number): Promise<Dish> {
    return of(DISHES.filter((dish) => (+dish.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  }
  */
/***********************************************/
    /* delay with promises and before rxjs
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
  }
  getDish(id: string): Promise<Dish> {
    return new Promise ( resolve => {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }
  getFeaturedDish(): Promise<Dish> {
    return  new Promise ( resolve => {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }*/
/* initial promises
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }
  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (+dish.id === id))[0]);
  }
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
*/
  /* version before promises
  getDishes(): Dish[] {
    return DISHES;
  }
  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }*/
}
