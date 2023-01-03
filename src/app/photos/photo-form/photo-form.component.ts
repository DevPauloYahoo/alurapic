import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormValidationService } from '../../shared/form-validation.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  photoFile!: File;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private photoService: PhotoService,
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

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photoService.upload(description, allowComments, this.photoFile).subscribe({
      next: () => this.router.navigate(['']),
      error: (err) => console.log(err),
    });
  }

  validationFields(fieldName: string) {
    return this.formValidationService.errorMessage(fieldName, this.photoForm);
  }
}
