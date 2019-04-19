import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatchPasswordValidator } from '../../validators/match-pasword.validator';
import { MailValidator } from '../../validators/mail.validator';
import { Store } from '@ngxs/store';
import { Register } from '../../store/auth.actions';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      user: ['', [Validators.required]],
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]

    },
    {
      updateOn: 'blur',
      /* validators: [MatchPasswordValidator]*/
    }
  );

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }


  register() {
    //Anulado, no recibe password desde validador, check con Yago
    /*if (!this.registerForm.valid) {
      this.markFormGroupAsTouched(this.registerForm);
      return;
    }*/
    this.store.dispatch(new Register(this.registerForm.value));
  }

}

