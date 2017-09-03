import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe Name',
      'The Recipe Description',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'),
    new Recipe('Struffoli Meal Food Sweet',
      'The Recipe Description2',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg')];
  constructor() { }
  ngOnInit() {
  }
  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
