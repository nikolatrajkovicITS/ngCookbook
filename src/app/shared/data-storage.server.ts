import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  apiUrl: string = 'https://cookbook-101ab.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService ) { }

  storeRecipes() {
    return this.http.put(this.apiUrl, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.apiUrl)
    .map(
      (response: Response) => {
        const recipes: Recipe = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
        (recipes: Recipes[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
