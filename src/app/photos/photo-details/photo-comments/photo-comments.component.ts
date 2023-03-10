import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FormValidationService } from '../../../shared/form-validation.service';
import { PhotoComment } from '../../photo/photo-comment.interface';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss'],
})
export class PhotoCommentsComponent implements OnInit {
  comments$: Observable<PhotoComment[]> = of([]);
  @Input() photoId: number | undefined;
  commentForm!: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private photoService: PhotoService,
    private formValidationService: FormValidationService,
  ) {}

  get comment() {
    return this.commentForm.get('comment');
  }

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId!);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  saveComment() {
    this.comments$ = this.photoService
      .addComment(this.photoId!, this.commentForm.controls['comment'].value)
      .pipe(
        switchMap(() => this.photoService.getComments(this.photoId!)),
        tap(() => {
          this.commentForm.reset();
        }),
      );
  }

  validationFields(fieldName: string, translatedField: string) {
    return this.formValidationService.errorMessage(
      fieldName,
      translatedField,
      this.commentForm,
    );
  }
}
