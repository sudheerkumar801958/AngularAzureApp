import { TestService } from './../test.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() homeData:any

  @Output() recevingData=new EventEmitter()
  constructor(private testser:TestService){}
  ngOnInit(){
    console.log(this.homeData)
    console.log(this.add(4,5))
    console.log(this.testser.add(10,10),"From Service file")
  }
  recivedData(m:any){
   this.recevingData.emit(m)
  }

  add(a:number,b:number){
    return a+b
  }
  getInfo(){
    this.testser.getData().subscribe(x =>{
      console.log(x)
    })
  }
}
