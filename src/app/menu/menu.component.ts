import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  // selectedDish: Dish;

  // previously: constructor(private dishService: DishService) { }
  constructor(private dishService: DishService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    // with error handling
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);

    // with observables
    // this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
    // with promises
    // this.dishService.getDishes()
    //  .then(dishes => this.dishes = dishes);
    // before promises
    // this.dishes = this.dishService.getDishes();

  }

/* not used anymore
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }*/
}
