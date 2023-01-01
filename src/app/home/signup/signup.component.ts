import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { lowerCaseValidator } from '../../shared/components/validators/lower-case.validator';
import { FormValidationService } from '../../shared/form-validation.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private formValidationService: FormValidationService,
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
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
      ],
    });
  }

  validationFields(fieldName: string) {
    return this.formValidationService.errorMessage(fieldName, this.signupForm);
  }
}
