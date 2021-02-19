import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from './emp';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  signupForm: FormGroup;
  arrEmpp: Emp[] = [];
  n: any;
  r: any;
  f: any;
  p: any;
  constructor(private _data: ServicesService, private _actroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({

      name: new FormControl(null, [
        Validators.required,]),
      age: new FormControl(null, [
        Validators.required,
        Validators.email,]),
      sallary: new FormControl(null, [
        Validators.required,]),
      phonenumber: new FormControl(null, [
        Validators.required,]),
    });

  }

  onSSignup() {
    this.n = this.signupForm.get('name').value;
    this.r = this.signupForm.get('phonenumber').value;

    this._data.getAllNamePhone(this.n, this.r).subscribe(
      (data: Emp[]) => {
        this.arrEmpp = data;
        console.log('check', this.arrEmpp);

        if (this.arrEmpp.length >= 1) {
          alert('already added');

        } else {
          alert('Successfully registered');
          console.log('in success', this.signupForm.value)
          this._data.addEmp(this.signupForm.value).subscribe((x: any) => {
            if (x.affectedValue == 1) {
              this.arrEmpp.push(this.signupForm.value);
            }
          });
        }
      });
  }

}


  //   console.log('addd')
  //   this.n = this.signupForm.get('name').value;
  //   this.r = this.signupForm.get('phonenumber').value;
  //   this.f = this.signupForm.value;
  //   this._data.getAllNamePhone(this.n, this.r).subscribe(
  //     (data: Emp[]) => {
  //       this.arrEmpp = data;
  //       console.log(this.arrEmpp);
  //     })
  //   if (this.arrEmpp.length >= 1) {
  //     alert('this name and number is already registered try agin with different email');

  //   } else {
  //     alert('Successfully registered');
  //     this._data.addEmp(this.f).subscribe((x: any) => {
  //       if (x.affectedValue == 1) {
  //         this.arrEmpp.push(this.signupForm.value);
  //       }
  //     });
  //   }

  // }


