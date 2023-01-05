import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { UserService } from '../../../core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[apPhotoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto!: Photo;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (user) => {
        console.log(user?.id);
        console.log(this.ownedPhoto.userId);
        if (user?.id !== this.ownedPhoto.userId) {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }
      },
    });
  }
}
