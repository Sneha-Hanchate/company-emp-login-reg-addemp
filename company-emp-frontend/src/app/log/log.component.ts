import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';


import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../reg/register';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  a: any;
  b: any;
  arrReg: Register[] = [];
  constructor(private _data: ServicesService, private _actroute: ActivatedRoute, private _router: Router) { }
  // constructor() { }

  ngOnInit(): void {

  }

  login() {
    console.log('loggg');
    this._data.getAllRegEmailPhonePass(this.a, this.b).subscribe(
      (data: Register[]) => {
        this.arrReg = data;
        console.log(this.arrReg);
        if (this.arrReg.length >= 1) {
          alert('Successfully Logged in');
          this._router.navigate(['/view/']);
        } else {
          alert('Try Again');
        }
      }
    );


  }
}

