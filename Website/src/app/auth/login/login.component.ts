import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- needed for *ngIf, *ngFor
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // <-- needed for reactive forms
import { RouterModule } from '@angular/router'; // if you use routerLink inside template

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule] // <--- ADD THESE HERE
})

export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // short-hand accessor
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted  = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    /* TODO: Replace with real API call */
    setTimeout(() => {
      debugger;
      this.loading = false;

      if (
        this.loginForm.value.email    === 'test@example.com' &&
        this.loginForm.value.password === 'password'
      ) {
        alert('Login successful!');
        this.loginForm.reset();
        this.submitted = false;
      } else {
        this.errorMessage = 'Invalid email or password.';
      }
    }, 1200);
  }
}