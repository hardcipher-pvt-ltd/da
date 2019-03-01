import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resData;
resObj;
fetch;
  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.fetchData();
  }
add(){
  console.log("Add Vechile");
}
fetchData(){
  this.resData= this.crud.fetchVech().subscribe((res)=>{
    this.resObj=res;
this.fetch=this.resObj.data;
  })
}
}
