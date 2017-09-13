import { Recipe } from '../../recipes/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe Name',
      'The Recipe Description',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg'),
    new Recipe('Struffoli Meal Food Sweet',
      'The Recipe Description2',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg')];

  getRecipes() {
    return this.recipes.slice();
  }
}
