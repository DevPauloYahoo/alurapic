import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { FormValidationService } from '../../shared/form-validation.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private formValidationService: FormValidationService,
  ) {}

  get file() {
    return this.photoForm.get('file');
  }

  get description() {
    return this.photoForm.get('description');
  }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', [Validators.required]],
      description: ['', [Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  validationFields(fieldName: string) {
    return this.formValidationService.errorMessage(fieldName, this.photoForm);
  }
}
