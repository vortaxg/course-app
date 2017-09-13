import { Ingredient } from '../ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Pears', 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
