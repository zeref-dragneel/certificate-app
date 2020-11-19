import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import iziToast from 'izitoast';
import {Router} from '@angular/router';
import {ServerService} from '../service/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private server: ServerService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      iziToast.error({
        timeout: 3000,
        title: 'Invalid',
        message: 'Email or password',
        position: 'topCenter',
        pauseOnHover: false,
      });
      return;
    } else {
      this.server.login(this.loginForm.value).subscribe(data => {
        if (data) {
          iziToast.success({
            timeout: 3000,
            title: 'Success',
            message: 'Welcome',
            position: 'topCenter',
            pauseOnHover: false,
          });
          this.router.navigate(['/home']);
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  test() {
    this.server.test().subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
