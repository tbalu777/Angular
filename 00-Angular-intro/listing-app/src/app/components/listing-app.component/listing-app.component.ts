import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../../interfaces/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listing-app',
  standalone: false,
  templateUrl: './listing-app.component.html',
  styleUrl: './listing-app.component.css',
})
export class ListingAppComponent implements OnInit {
  userList?: Array<Usermodel>

  constructor(private UserService: UserService) {
    this.userList = this.UserService.allChars;
  }

  ngOnInit(): void {
    this.userList = this.UserService.allChars;
  }
}
