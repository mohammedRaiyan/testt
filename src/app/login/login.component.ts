import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(

    private fb: FormBuilder,

    private route: ActivatedRoute,

    private router: Router,

   // private authService: AuthService

  ) {

  }


   ngOnInit() {

 


    this.form = this.fb.group({

      username: ['', Validators.email],

      password: ['', Validators.required]

    });


   

    }

  }


  // async onSubmit() {

  //   this.loginInvalid = false;

  //   this.formSubmitAttempt = false;

  //   if (this.form.valid) {

  //     try {

  //       const username = this.form.get('username').value;

  //       const password = this.form.get('password').value;

  //       await this.authService.login(username, password);

  //     } catch (err) {

  //       this.loginInvalid = true;

  //     }

  //   } else {

  //     this.formSubmitAttempt = true;

  //   }

  // }

//}