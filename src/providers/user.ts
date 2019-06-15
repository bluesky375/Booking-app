import { Injectable } from '@angular/core';
import { Http , Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class User {
    baseUrl:string = 'http://207.148.12.144:1003/users/';
    baseUrl_:string = 'http://207.148.12.144:1003/api/';
    //baseUrl:string = 'http://localhost:8000/users/';
  constructor(public http: Http) {
    this.GlobalGetRequests();
  }

  private GlobalGetRequests(){

  }

  //headers

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', JSON.parse(window.localStorage.getItem('token')));
  }


  private() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.baseUrl + 'private', {
      headers: headers
    }).map(res => res.json());
  }

  //check logged in status

  isLogged() {
    return window.localStorage.getItem('token');
  }

  //other functions


  getUserInfo() {
    if (this.isLogged()) {
      if(window.localStorage.getItem('user')){
        return JSON.parse(window.localStorage.getItem('user'));
      }else{
        return null;
      }
    }
  }

  // private functions

  private extractData(res: Response) {
    let body = res.json();
    if (body.access_token) {
      console.log(body.user);
      window.localStorage.setItem('user',  JSON.stringify(body.user));
      window.localStorage.setItem('token', JSON.stringify(body.access_token));
      window.localStorage.setItem('type', JSON.stringify(body.type));
    }
    return body || {};
  }

  SaveUser(user){
    return this.http.post(this.baseUrl+"register",user).map(res => res.json());
  }

  SaveFUser(user){
    return this.http.post(this.baseUrl+"registerF",user).map(res => res.json());
  }

  Verify(data){
    return this.http.post(this.baseUrl+"verify", data).map(res => res.json());
  }

  addUser(user){
    return this.http.post(this.baseUrl+"add-user",user).map(this.extractData);
  }

  Login(data){
    return this.http.post(this.baseUrl+"authenticate",data).map(this.extractData);
  }

  FacebookLogin(data){
    return this.http.post(this.baseUrl+"facebook-authenticate",data).map(res => res.json());
  }

  GetLocations(){
    return this.http.post(this.baseUrl+"profile",{data: 'd'}).map(res => res.json());
  }

  logout(){
    let data = this.getUserInfo().phone;
    return this.http.post(this.baseUrl+"logout",{phone:data}).map(res => res.json());
  }

  ProLogout(){
    let data = this.getUserInfo().email;
    return this.http.post(this.baseUrl+"ProLogout",{email:data}).map(res => res.json());
  }

  editAvatar(data){
    return this.http.post(this.baseUrl+"edit-avatar",data).map(this.extractData);
  }

  editProAvatar(data){
    return this.http.post(this.baseUrl+"edit-pro-avatar",data).map(this.extractData);
  }

  editInfo(data){
    return this.http.post(this.baseUrl+"edit-info",data).map(this.extractData);
  }

  editProInfo(data){
    return this.http.post(this.baseUrl_+"changeInfo",data).map(this.extractData);
  }

  EditContacts(data){
    return this.http.post(this.baseUrl+"edit-contacts",data).map(this.extractData);
  }

  EditProContacts(data){
    return this.http.post(this.baseUrl+"edit-pro-contacts",data).map(this.extractData);
  }

  ChangeNumber(data){
    return this.http.post(this.baseUrl+"edit-number",data).map(this.extractData);
  }

  ChangeProNumber(data){
    return this.http.post(this.baseUrl+"edit-pro-number",data).map(this.extractData);
  }

  ForgotPass(data){
    return this.http.post(this.baseUrl+"forgot-password",data).map(res => res.json());
  }

  editPass(data){
    return this.http.post(this.baseUrl+"edit-pass",data).map(this.extractData);
  }

  editProPass(data){
    return this.http.post(this.baseUrl+"edit-pro-pass",data).map(this.extractData);
  }

  updateDeviceToken(data){
    return this.http.post(this.baseUrl+"update-device-token",data).map(this.extractData);
  }

  getUserByToken(token){
    return this.http.post(this.baseUrl+"getUserByToken",{token:token,id:JSON.parse(window.localStorage.getItem('user'))._id}).map(res => res.json());
  }

  getProByToken(token){
    return this.http.post(this.baseUrl+"getProByToken",{token:token,id:JSON.parse(window.localStorage.getItem('user'))._id}).map(res => res.json());
  }

}
