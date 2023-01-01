import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$: Observable<User | null>;

  // user: User | undefined;

  constructor(private userService: UserService) {
    this.user$ = userService.getUser();
    // this.user$.subscribe({
    //   next: (user) => (this.user = user),
    // });
  }
}
