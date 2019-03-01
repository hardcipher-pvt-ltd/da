import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // constructor(private http:HttpClient) { }

  url="http://localhost:5556/"
  constructor(private http:HttpClient) { }

  loginUser(data){
return this.http.post(this.url+'loginUser',data);
  }

  addVehicle(data){
return this.http.post(this.url+'addVehicle',data);
  }

  fetchVech(){
    return this.http.get(this.url+'fetchVech');
  }

fetchById(id){
  return this.http.get(this.url+'fetchById'+id);
}

updateVech(data){
  return this.http.post(this.url+'updateVech',data);
}

searchVech(data){
  return this.http.post(this.url+'searchVech',data);
}
}
