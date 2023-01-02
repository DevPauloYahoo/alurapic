import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/components/validators/lower-case.validator';
import { FormValidationService } from '../../shared/form-validation.service';
import { NewUser } from './new-user.interface';
import { SignupService } from './signup.service';
import { UserExistsValidatorService } from './user-exists-validator.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  @ViewChild('emailInput', { static: true }) emailInput:
    | ElementRef<HTMLInputElement>
    | undefined;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private render: Renderer2,
    private signupService: SignupService,
    private formValidationService: FormValidationService,
    private userExistsValidatorService: UserExistsValidatorService,
  ) {}

  get email() {
    return this.signupForm?.get('email');
  }

  get fullName() {
    return this.signupForm?.get('fullName');
  }

  get userName() {
    return this.signupForm?.get('userName');
  }

  get password() {
    return this.signupForm?.get('password');
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30),
          lowerCaseValidator,
        ],
        [this.userExistsValidatorService.isUsernameExists()],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
      ],
    });

    this.render.selectRootElement(this.emailInput?.nativeElement).focus();
  }

  signup() {
    const newUser: NewUser = this.signupForm.getRawValue();
    this.signupService.signup(newUser).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => console.log(err),
    });
  }

  validationFields(fieldName: string) {
    return this.formValidationService.errorMessage(fieldName, this.signupForm);
  }
}
