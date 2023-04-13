import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = "Angular Reactive form"
  registerForm = new FormGroup({
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required]),
    eMail:new FormControl('',[Validators.email]),
    mobileNumber:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required])
  })
  registerUser()
  {
    console.log(this.registerForm.value)
  }
  get fName()
  {
    return this.registerForm.get("fName");
  }
  get lName()
  {
    return this.registerForm.get("lName");
  }
  get eMail()
  {
    return this.registerForm.get("eMail");
  }
  get mobileNumber()
  {
    return this.registerForm.get("mobileNumber");
  }
  get register()
  {
    return this.registerForm.get("register");
  }
  get gender()
  {
    return this.registerForm.get("gender");
  }
}
