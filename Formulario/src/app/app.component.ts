import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xForm : FormGroup;
  constructor(private form : FormBuilder){
  }
  ngOnInit(){
    this.xForm = this.form.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'phone' : [null , Validators.compose([Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(8), Validators.maxLength(10)])],
      'gender' : ["Male", Validators.required]
      })
  }
}
