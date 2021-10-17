import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
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
        console.log(response);
        this.router.navigate(['index']);
      },
      (error) => {
        console.log('Error log in login user \n', error);
      }
    );
  }
}
