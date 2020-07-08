import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

