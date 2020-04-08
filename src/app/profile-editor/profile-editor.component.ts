import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
    this.fb.control('')])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // TODO: use EventEmitter with the form value
    console.warn(this.profileForm.value);

  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Akash',
      address: {
        street : 'Allerskehre 7'
      }
    });
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases(){
    this.aliases.push(this.fb.control(''));
  }
}
