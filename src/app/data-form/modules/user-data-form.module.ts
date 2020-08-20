import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataFormComponent } from '../user-data-form/user-data-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDataFormService } from '../services/user-data-form.service';

@NgModule({
  declarations: [
    UserDataFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    UserDataFormComponent
  ],
  providers: [
    UserDataFormService
  ]
})

export class UserDataFormModule { }