import { TestService } from './../test.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
@Input() names:any;

@Output() sendData =new EventEmitter();
constructor(private testser:TestService){}
ngOnInit(){
  console.log(this.names)
  this.names.forEach((x:any) => {
    console.log(x)
  });
  console.log(this.add(10,10))
  console.log(this.testser.add(10,10),"From Service file")
  this.testser.getData().subscribe(x =>{
    console.log(x)
  })
}
getData(m:any){
  console.log(m.name)
  this.sendData.emit(m)
}
add(a:number,b:number){
  return a+b
}
clickMe(){
  alert("Hello")
}
}
