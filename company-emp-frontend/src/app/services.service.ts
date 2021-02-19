import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './reg/register';
import { Emp } from './addemp/emp';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url: string = "http://localhost:3000/registraition/";
  url2: string = "http://localhost:3000/employee/";
  constructor(private _http: HttpClient) { }
  // reg
  getAllRegistraition() {
    return this._http.get(this.url);
  }
  getAllRegEmailPhone(email: any) {
    return this._http.get(this.url + email);
  }
  getAllRegEmailPhonePass(user: any, password: any) {
    return this._http.get(`http://localhost:3000/registraition/${user}/${[password]}`);
  }
  addReg(item: Register) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: head });
  }
  // employee
  getAllNamePhone(name: any, phonenumber: any) {
    return this._http.get(`http://localhost:3000/employee/${name}/${[phonenumber]}`);
  }
  getAllEmployee() {
    return this._http.get(this.url2);
  }

  addEmp(item: Emp[]) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.post(this.url2, body, { headers: head });
  }


}
