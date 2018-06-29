import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('First Recipe', 'This is simply test', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
        new Recipe('Second Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE613GBAI7t6A1kvMOPA8aP_3r_vSxmZ14XDdw9xN0kRePQxWY'),
        new Recipe('Third Recipe', 'This is simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbRawUzO_pSws9MjxWaC2JGvcq6R7KOTYg2a3Zw5EQlOUQlt6'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}