import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { FormValidationService } from '../../shared/form-validation.service';

@Component({
  selector: 'ap-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  @ViewChild('userNameInput', { static: true }) userNameInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private render: Renderer2,
    private authService: AuthService,
    private formValidationService: FormValidationService,
  ) {}

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.render.selectRootElement(this.userNameInput?.nativeElement).focus();
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe({
      next: () => {
        this.router.navigate(['user', userName]);
        console.log('Autenticado');
      },
      error: (err) => {
        console.error(err);
        this.loginForm.reset();
        this.render.selectRootElement(this.userNameInput?.nativeElement).focus();
        // this.userNameInput?.nativeElement.focus();
        alert('Credenciais inválidas');
      },
    });
  }

  validationFields(fieldName: string, translatedField: string) {
    return this.formValidationService.errorMessage(
      fieldName,
      translatedField,
      this.loginForm,
    );
  }
}
