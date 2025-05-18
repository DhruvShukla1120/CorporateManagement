import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule] // <--- ADD THESE HERE
})

export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        email:           ['', [Validators.required, Validators.email]],
        password:        ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  passwordsMatchValidator = (form: FormGroup) =>
    form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { passwordsMismatch: true };

  onSubmit(): void {
    this.submitted   = true;
    this.errorMessage  = '';
    this.successMessage = '';

    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;

    /* TODO: Replace with real API call */
    setTimeout(() => {
      this.loading        = false;
      this.successMessage = 'Registration successful! You can now log in.';
      this.signupForm.reset();
      this.submitted = false;
    }, 1500);
  }
}
