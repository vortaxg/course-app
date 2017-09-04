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
  @Output() ingredientCreation = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddIngredient() {
    this.ingredientCreation.emit(new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value));
  }
}
