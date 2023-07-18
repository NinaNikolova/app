import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
isEditMode: boolean =false;
form = this.fb.group({
  username: ['', Validators.required],
  email:['',],
  tel:['tel1']
})
constructor(private fb: FormBuilder){}
toggleEditMode(): void{
  this.isEditMode=!this.isEditMode;
}
saveProfileHandler():void{
  this.toggleEditMode()
}
}
