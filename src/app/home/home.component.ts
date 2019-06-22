import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  errMess: string;

  constructor(private dishservice: DishService,
               @Inject('baseURL') private baseURL,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
    // with observables
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
                errmess => this.errMess = <any>errmess);
    // before promises this.dish = this.dishservice.getFeaturedDish();
    /* with promises
    this.dishservice.getFeaturedDish()
      .then(dish => this.dish = dish);
      */
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  }

}
