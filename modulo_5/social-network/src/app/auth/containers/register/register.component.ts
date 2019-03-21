import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatchPasswordValidator } from '../../validators/match-pasword.validator';
import { MailValidator } from '../../validators/mail.validator';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      updateOn: 'blur',
      validators: [MatchPasswordValidator]
    }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {}

  register() {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
