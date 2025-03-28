import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface singupForm {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
}   
@Component({
  selector: 'app-singuppage',
  imports: [DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './singuppage.component.html',
  styleUrl: './singuppage.component.scss'
})
export class SinguppageComponent {

    singupForm!: FormGroup<singupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.singupForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }


  submit() {
      this.loginService.singup(this.singupForm.value.username, this.singupForm.value.email, this.singupForm.value.password).subscribe({
      next: () => this.toastService.success("Singup feito com sucesso"),
      error: () => this.toastService.error("Singup falhou, tente novamente mais tarde")
    })
  }

  navigate() {
    this.router.navigate(["/login"]);
  }
}
