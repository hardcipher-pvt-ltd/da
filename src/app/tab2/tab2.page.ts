import { Component } from '@angular/core';
import {FormGroup,Validators, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
addForm:FormGroup;
resData;
resObj;
fetch;
constructor(private fb:FormBuilder,private crud:CrudService) { }

ngOnInit() {
  this.addV();
  // this.searchF();
}

addV(){
  this.addForm=this.fb.group({
    'name':['',Validators.required],
    'vechno':['',Validators.required],
    'mobile':['',Validators.required],
    'vehicle':['',Validators.required],
    'parking':['',Validators.required]
  })
}

// searchF(){
//   this.searchForm = this.fb.group({
//     'vechno':['',Validators.required]
//   })
// }


addvech(){
 var formData= this.addForm.getRawValue();
 var seriliz = formData;
 this.resData=this.crud.addVehicle(seriliz).subscribe((res)=>{
   this.resObj=res;
   console.log(this.resObj);
 })
}
}
