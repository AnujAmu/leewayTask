import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataFormComponent } from '../user-data-form/user-data-form.component';



@NgModule({
  declarations: [
    UserDataFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDataFormComponent
  ]
})
export class UserDataFormModule { }
