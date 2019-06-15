import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class ServicesProvider {
 baseUrl: string = 'http://207.148.12.144:1003/api/';

  //baseUrl:string = 'http://localhost:4000/api/';
  constructor(public http: Http,public user:User) {

  }

  SystemConfig() {
    return this.http.get(this.baseUrl + "SystemConfig").map(res => res.json());
  }

  getArrears() {
    return this.http.get(this.baseUrl + "getArrears?_id="+ this.user.getUserInfo()._id).map(res => res.json());
  }

  makePayment(data) {
    return this.http.post(this.baseUrl + "makePayment", data).map(res => res.json());
  }

  makeAllPayment() {
    return this.http.post(this.baseUrl + "makeAllPayment", this.user.getUserInfo()).map(res => res.json());
  }

  getServices(num) {
    return this.http.get(this.baseUrl + "get_Services?num="+num).map(res => res.json());
  }

  getAllServices() {
    return this.http.get(this.baseUrl + "getServices").map(res => res.json());
  }

  getAllCategories() {
    return this.http.get(this.baseUrl + "getCategories").map(res => res.json());
  }

  getCategoriesByType(type) {
    return this.http.get(this.baseUrl + "getCategoriesByType?type=" + type).map(res => res.json());
  }

  getBookedServicesById(id,status){
    return this.http.get(this.baseUrl + "getBookedServicesById?id=" + id + "&status="+status).map(res => res.json());
  }

  getCompletedBookedByUserId(){
    let id = this.user.getUserInfo()._id;
    return this.http.get(this.baseUrl + "getCompletedBookedByUserId?id=" + id).map(res => res.json());
  }


  deleteBookedService(bid,uid){
    return this.http.post(this.baseUrl + "deleteBookedService", {data:bid,uid:uid}).map(res => res.json());
  }

  deleteAcceptedService(bid){
    return this.http.post(this.baseUrl + "deleteAcceptedService", {data:bid,uid:this.user.getUserInfo()._id}).map(res => res.json());
  }

  getOffersByType(type) {
    return this.http.get(this.baseUrl + "getOffersByType?type=" + type).map(res => res.json());
  }

  getPersonelByService(type) {
    return this.http.get(this.baseUrl + "getPersonelByService?type=" + type).map(res => res.json());
  }

  getPersonelByCategory(type) {
    return this.http.get(this.baseUrl + "getPersonelByCategory?type=" + type).map(res => res.json());
  }

  getCategoryById (id){
    return this.http.get(this.baseUrl+"getCategoryById?id="+id);
  };

  getServiceById (id){
    return this.http.get(this.baseUrl+"getServiceById?id="+id);
  };

  bookService(data) {
    return this.http.post(this.baseUrl + "registerBook", data).map(res => res.json());
  }

  getPreBookedServices(){
    console.log(this.user.getUserInfo());
    return this.http.post(this.baseUrl + "PreBookedServices", this.user.getUserInfo()).map(res => res.json());
  }

  confirmBooking(data){
    return this.http.post(this.baseUrl + "confirmBooking", data).map(res => res.json());
  }

  getConfirmedBooked(){
    let id = this.user.getUserInfo()._id;
    return this.http.get(this.baseUrl + "getConfirmedBooked?id=" + id).map(res => res.json());
  }

  getCompletedBooked(){
    let id = this.user.getUserInfo()._id;
    return this.http.get(this.baseUrl + "getCompletedBooked?id=" + id).map(res => res.json());
  }

  completedService(data,type){
    return this.http.post(this.baseUrl + "completedService?type="+type, data).map(res => res.json());
  }
  paidService(data,type){
    return this.http.post(this.baseUrl + "paidService?type="+type, data).map(res => res.json());
  }

  getPersonnel(num){
    return this.http.get(this.baseUrl + "get_Personnel?num="+num).map(res => res.json());
  }

  getPersonnelById(id){
    return this.http.get(this.baseUrl + "getPersonnelById?id="+id).map(res => res.json());
  }

  PostReview(data){
    return this.http.post(this.baseUrl + "PostReview", data).map(res => res.json());
  }

  SearchItem(num, item,type) {
    return this.http.get(this.baseUrl + "SearchItem/"+item+'/'+type).map(res => res.json());
  }
}
