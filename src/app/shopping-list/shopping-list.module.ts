import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
=======
import { CommonModule } from '/@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
  ],
  imports: [
    CommonModule,
    FormsModule
<<<<<<< HEAD
  ]
})
export class ShoppingListModule {}
=======
  ],
  exports: [
  ]
})
export class ShoppingListModule { }
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
