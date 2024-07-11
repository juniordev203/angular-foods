import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../service/food/food.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ratingChanged($event: CustomEvent<number>) {
    throw new Error('Method not implemented.');
  }
  onRate($event: Event) {
    throw new Error('Method not implemented.');
  }
  foods: Food[] = [];
  constructor(
    private foodsService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodsService
        .getALl()
        .filter((food) =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
      );
      }else{
        this.foods = this.foodsService.getALl();

      }
    });
  }
}
