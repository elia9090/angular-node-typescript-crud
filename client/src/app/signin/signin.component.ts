import { Component, OnInit } from '@angular/core';
import { AuthService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) {
    //auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
