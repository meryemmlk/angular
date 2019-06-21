import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // older version before promises this.dish = this.dishservice.getDish(id);
    this.dishservice.getDish(id)
      .then(dish => this.dish = dish);
    // this.dishes = this.dishService.getDishes();
    // this.dishService.getDishes()
      // .then(dishes => this.dishes = dishes);
  }

  goBack(): void {
    this.location.back();
  }

}
