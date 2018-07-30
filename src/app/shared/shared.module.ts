import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [ ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule { }
