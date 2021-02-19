import { Component, OnInit } from '@angular/core';
// import { Book1,Book2 } from '../all-book/book';
import { ServicesService } from '../services.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from './register';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  signupForm: FormGroup;
  arrReg: Register[] = [];
  n: any;
  r: any;
  constructor(private _data: ServicesService, private _actroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // this._data.getAllRegistraition().subscribe(
    //   (data: Register[]) => {
    //     this.arrReg = data;
    //   }
    // );

    this.signupForm = new FormGroup({

      name: new FormControl(null, [
        Validators.required,]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,]),
      phone: new FormControl(null, [
        Validators.required,]),
      password: new FormControl(null, [
        Validators.required,]),
    });

  }

  onSignup() {
    this.n = this.signupForm.get('email').value;

    this._data.getAllRegEmailPhone(this.n).subscribe(
      (data: Register[]) => {
        this.arrReg = data;

        if (this.arrReg.length >= 1) {
          alert('this email is already registered try agin with different email');

        } else {
          alert('Successfully registered');
          console.log(this.signupForm.value)
          this._data.addReg(this.signupForm.value).subscribe((x: any) => {
            if (x.affectedValue == 1) {
              this.arrReg.push(this.signupForm.value);
            }
          }); this._router.navigate(['/']);
        }
      })
  }

}
