import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formSignin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formSignin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    console.log(this.formSignin.value);
    const user: IUser = {
      email: this.formSignin.value.email || '',
      password: this.formSignin.value.password || '',
      role: this.formSignin.value.role || 1,
    };
    this.userService.signIn(user).subscribe({
      next: (data) => {
        alert('dang nhap thanh cong');
        localStorage.setItem('user', JSON.stringify(data));
        const userString: any = localStorage.getItem('user');
        const user = JSON.parse(userString);
        // console.log(user);
        console.log(data);
        // console.log("accessToken",data.accessToken);
      },
      error: (error) => {
        console.log(error);
        alert('dang nhap that bai' + error.error);
      },
    });
  }
}
