import { Component, OnInit } from '@angular/core';
// import { Book1,Book2 } from '../all-book/book';
import { ServicesService } from '../services.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../addemp/emp';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  arrEmp: Emp[] = [];
  constructor(private _data: ServicesService, private _actroute: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
    this._data.getAllEmployee().subscribe(
      (data: Emp[]) => {
        this.arrEmp = data;
        console.log(this.arrEmp)
      }
    );
  }
  onKeyUp(val: any) {
    this.arrEmp = this.arrEmp.filter((x) => x.name.startsWith(val));

  }

}
