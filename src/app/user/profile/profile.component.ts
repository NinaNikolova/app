import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
isEditMode: boolean =false;
form = this.fb.group({
  username: ['', Validators.required, Validators.minLength(5)],
  email:['', Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
  tel:['']
})
constructor(private fb: FormBuilder){}
toggleEditMode(): void{
  this.isEditMode=!this.isEditMode;
}
saveProfileHandler():void{
 if( this.form.invalid){
  return;
 }
  this.toggleEditMode()
}
}
