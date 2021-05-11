import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    public recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Test recipe','test recipe description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',[new Ingredient('Meat',1), new Ingredient('French Fries',25)]),
        new Recipe('sample recipe','sample recipe description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',[ new Ingredient('Bread',5), new Ingredient('Jam',1) ]) 
    ]

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice()
    }

    getRecipe(index: number){
        return this.recipes.slice()[index]
    }

    addIngrToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }

}