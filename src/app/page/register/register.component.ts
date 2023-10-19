import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formSignin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formSignin = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        role: 2,
      },
      { validators: this.checkPassword }
    );
  }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }

  onSubmit() {
    console.log(this.formSignin.value);

    const user: IUser = {
      email: this.formSignin.value.email || '',
      password: this.formSignin.value.password || 0,
      role: this.formSignin.value.role || 1,
    };
    this.userService.addUser(user).subscribe({
      next: (data) => {
        alert('dang ky thanh cong');
        this.router.navigate(['/user/login']);
        console.log(data);
      },
      error: (error) => {
        // console.log(error.error)
        alert(error.error);
      },
    });
  }
}
