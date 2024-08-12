import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    // this.recipeForm = new FormGroup({
    //   name: new FormControl('Western Chicken', [Validators.required, Validators.minLength(3)]),
    //   description: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(200),
    //   ]),
    //   price: new FormControl('' , Validators.required)
    // });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      emailaddress: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  handleFormSubmit() {
    console.log(this.registerForm)
  }

  get testName() {
    return this.registerForm.get('name');
  }
  get testEmail() {
    return this.registerForm.get('emailaddress');
  }
  get tesUsername() {
    return this.registerForm.get('username');
  }
  get testPassword() {
    return this.registerForm.get('password');
  }
  get testConfPass() {
    return this.registerForm.get('confpassword');
  }
}
