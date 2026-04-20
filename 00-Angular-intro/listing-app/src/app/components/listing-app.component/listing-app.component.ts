import { Component } from '@angular/core';
import { Usermodel } from '../../interfaces/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listing-app.component',
  standalone: false,
  templateUrl: './listing-app.component.html',
  styleUrl: './listing-app.component.css',
})
export class ListingAppComponent {
  userList?: Array<Usermodel> = this.UserService.allChars;

  constructor(private UserService: UserService) {
    this.userList = this.UserService.allChars;
  }
}
