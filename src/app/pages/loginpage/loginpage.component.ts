import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from "../../components/default-login-layout/default-login-layout.component";
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-loginpage',
  imports: [DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {

  loginForm!:  FormGroup;
  
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
}
