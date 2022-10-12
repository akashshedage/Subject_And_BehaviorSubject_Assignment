import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-compo4',
  templateUrl: './compo4.component.html',
  styleUrls: ['./compo4.component.css']
})
export class Compo4Component implements OnInit {

  username;
  CD={
    brandname: '',
    modelname:'',
    modelprice:'',
    modelcolor:''
  }
 


  constructor(private _demo: DemoService) {
    this._demo.username.subscribe(res => {
      this.username = res;
    })

    this._demo.brandname.subscribe(res=>{
      this.CD.brandname=res;
    })
    this._demo.modelname.subscribe(res=>{
      this.CD.modelname=res;
    })
    this._demo.modelprice.subscribe(res=>{
      this.CD.modelprice=res;
    })
    this._demo.modelcolor.subscribe(res=>{
      this.CD.modelcolor=res;
    })


  }

  ngOnInit() {
  }

  updateUserName(uname) {
    this._demo.username.next(uname.value)
  }

  updateCarDetails(bname, mname, price, color){
    this._demo.brandname.next(bname.value);
    this._demo.modelname.next(mname.value);
    this._demo.modelprice.next(price.value);
    this._demo.modelcolor.next(color.value);

  }
}
