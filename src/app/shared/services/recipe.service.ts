import { ShoppingListService } from './shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Recipe } from '../../recipes/recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe('Test Recipe Name',
      'The Recipe Description',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
      [new Ingredient('meat', 1),
      new Ingredient('potatoes', 3)]),
    new Recipe('Struffoli Meal Food Sweet',
      'The Recipe Description2',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg',
      [new Ingredient('potatoes', 2),
      new Ingredient('tomato', 5),
      new Ingredient('pepper', 1)]),
  ];
  selectedRecipe = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
