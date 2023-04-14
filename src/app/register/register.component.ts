import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = "Angular Reactive form"
  registerForm = new FormGroup({
    fName:new FormControl('',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern("[a-zA-Z]*")
    ]),
    lName:new FormControl('',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern("[a-zA-Z]*")
    ]),
    eMail:new FormControl('',[Validators.required,
      Validators.email]),
    mobileNumber:new FormControl('',[Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("[6-9][0-9]*")
    ]),
    gender:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    passWord:new FormControl('',[Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern("")
    ]),
    repeatPassword:new FormControl('',[Validators.required])
  })
  repeatPassCSS: String="none"
  constructor(private router: Router) { }

  registerUser()
  {
    if(this.registerForm.get("passWord")?.value == this.registerForm.get("repeatPassword")?.value)
    {
      alert("submitted");
      console.log(this.registerForm.value);
      this.router.navigate(['/login'])
    }
    else{
      this.repeatPassCSS="inline"
      console.log(this.registerForm.value)
    }
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
  get country()
  {
    return this.registerForm.get("country");
  }
  get passWord()
  {
    return this.registerForm.get("passWord");
  }
  get repeatPassword()
  {
    return this.registerForm.get("repeatPassword");
  }
}
