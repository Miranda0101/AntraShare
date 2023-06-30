import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  hide = true;
  constructor(private fb: FormBuilder, private loginService: LoginService, private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    
  }
  // getter method to access email formControl
  get email(){
    return this.loginForm.controls.email;
  }
  // getter method to access email formControl
  get password(){
    return this.loginForm.controls.password;
  }
  onSubmit(): void {
    // console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe((res) =>{
      console.log("Logged in successfully")
    },
    (error)=>{
      console.log("Login failed: ", error.error);
      this.dialog.open(ErrorDialogComponent, {data: error.error.message})
    });
  }
}
