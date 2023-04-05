import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  loginForm:  FormGroup;

	submitted = false;


  constructor() {}

  ngOnInit(){
    this.loginForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
  'email': new FormControl('', [
   Validators.required,
   Validators.email,
   Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)
  ])
  });

  

}

//Easy access to form fields
get emailFormControl() {
 return this.loginForm.controls;
}

requestPasscode(){
 //console.log(this.loginForm);
 this.submitted = true;

 if(this.loginForm.invalid){
        return
 }
}






  
}
