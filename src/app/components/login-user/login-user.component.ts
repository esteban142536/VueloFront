import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  user: User = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginUser(): void {
    const data = {
      email: this.user.email,
      password: this.user.password,
    };

    this.userService.login(data).subscribe(
      (response) => {
        console.log(response._id);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log('Error log in login user \n', error);
      }
    );
  }
}
