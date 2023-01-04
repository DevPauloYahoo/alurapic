import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormValidationService } from '../../../shared/form-validation.service';
import { PhotoComment } from '../../photo/photo-comment.interface';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss'],
})
export class PhotoCommentsComponent implements OnInit {
  comments$: Observable<PhotoComment[]> = new Observable<PhotoComment[]>();
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

  addComment() {
    return this.photoService
      .addComment(this.photoId!, this.commentForm.controls['comment'].value)
      .subscribe({
        next: () => {
          this.commentForm.reset();
          alert('Comentário adicionado com sucesso.');
        },
      });
  }

  validationFields(fieldName: string, translatedField: string) {
    return this.formValidationService.errorMessage(
      fieldName,
      translatedField,
      this.commentForm,
    );
  }
}
