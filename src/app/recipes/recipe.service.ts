import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

    public recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Test recipe','test recipe decription','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
        new Recipe('sample recipe','sample recipe decription','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg')
        
    ]

    getRecipes(){
        return this.recipes.slice()
    }

}