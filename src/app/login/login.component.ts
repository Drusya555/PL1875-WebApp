import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! :FormGroup;
  isSubmitted = false;
  errors="";
  

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        userName:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    );
  }

  get formControls(){
    return this.loginForm.controls;
  }

  loginCredentials(){
    this.isSubmitted=true;

    if(this.loginForm.invalid){
      return;
    }
  
       

          else{
            this.errors="Sorry this role is not allowed";
          }
      }
  
      
    }

