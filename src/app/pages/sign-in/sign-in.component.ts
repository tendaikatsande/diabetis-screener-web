import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { JwtResponse } from 'src/app/models/jwt.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: (data: JwtResponse) => {
        const { token, refreshToken } = data;
        this.authService.setTokens(token, refreshToken);
        this.router.navigate(['/layout/dashboard']);
      },
      error: (err) => {
        this.notification.error(
          'Error', // these are the title
          'Failed to add visit', // and the description of the notification
          { nzDuration: 3000 } // this is optional configuration, e.g., duration in ms
        );
        console.log(err);
      },
    });
  }

  
}
