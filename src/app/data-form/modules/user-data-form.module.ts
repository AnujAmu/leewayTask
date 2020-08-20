import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataFormComponent } from '../user-data-form/user-data-form.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    UserDataFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserDataFormComponent
  ]
})
export class UserDataFormModule { }
