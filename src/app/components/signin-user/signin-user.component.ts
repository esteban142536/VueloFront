import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css'],
})
export class SigninUserComponent implements OnInit {
  user: User = {
    email: '',
    name: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      email: this.user.email,
      name: this.user.name,
      password: this.user.password,
      type: 'user',
    };

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error log in add user \n', error);
      }
    );
  }
}
