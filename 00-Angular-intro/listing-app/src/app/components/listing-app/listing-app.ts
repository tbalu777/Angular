import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../../interfaces/user.model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-listing-app',
  standalone: false,
  templateUrl: './listing-app.html',
  styleUrl: './listing-app.css',
})
export class ListingApp implements OnInit {
userList?: Array<Usermodel>

  constructor(private UserService: UserService) {
    this.userList = this.UserService.allChars;
  }
  ngOnInit(): void {
    this.userList = this.UserService.allChars;
  }


  deleteUser(user: Usermodel): void {
    user.deletedUser = true;
    if(confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)){
      alert(`${user.firstName} ${user.lastName} has been deleted.`);
    }
    else {
      user.deletedUser = false;
    }
}

  resetTable(): void {
    window.location.reload();
    alert('Table has been reset.');
}

  getEven(){
    this.userList = this.UserService.getEven();
}

  getOdd(){
    this.userList = this.UserService.getOdd();
}
}
