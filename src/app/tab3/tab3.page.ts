import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchForm:FormGroup;
resData;
resObj;
fetch;
  constructor(private fb:FormBuilder,private crud:CrudService) { }

  ngOnInit() {
    this.searchF();
  }
  searchF(){
    this.searchForm = this.fb.group({
      'vechno':['',Validators.required]
    })
  }
search(){
  var formData = this.searchForm.getRawValue();
  var seriliz = formData;
this.resData= this.crud.searchVech(seriliz).subscribe((res)=>{
  this.resObj=res;

  console.log(this.resObj);
})
}
}
