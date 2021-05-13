import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []
  private subscription: Subscription
  constructor(private shoppingListServie: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServie.getIngredients()
    this.subscription = this.shoppingListServie.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  

}
