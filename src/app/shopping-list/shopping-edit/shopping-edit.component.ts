import { ShoppingListService } from '../../shared/services/shopping-list.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient() {
    const ingredientName = this.inputName.nativeElement.value;
    const ingredientAmount = this.inputAmount.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount));
  }
}
