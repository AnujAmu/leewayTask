import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserDataFormService } from '../services/user-data-form.service';
import { User } from './user-data-form.model';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {

  public submitted = false;
  public dataForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _service: UserDataFormService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.dataForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      image: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm() {
    return this.dataForm.controls;
  }

  userModel = new User();

  onSubmit() {
    this._service.create(this.dataForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
}