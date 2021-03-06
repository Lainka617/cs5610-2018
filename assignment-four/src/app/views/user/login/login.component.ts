import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  hello: String = 'hello from components!';

  constructor(private userService: UserService, private router: Router) {}

  login(username: String, password: String) {
    //this.user = this.userService.findUserByCredentials(username, this.password);

      this.userService.findUserByCredentials(this.username, this.password)
        .subscribe((user: User) => {
        if (user) {
          //console.log(user);
          this.router.navigate(['/profile', user._id ]);
        }
      });
  }

  ngOnInit(){

  }

}
