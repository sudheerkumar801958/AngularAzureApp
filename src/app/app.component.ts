import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frist';
  name='Sudheer';
  age=26
  employee = [{
    name:"Sudheer Reddy",
    deg:"Software Engineer"
  },
  {
    name:"Madhu Reddy",
    deg:"Team Lead"
  }
]
department =[
  {
    dept:"Cloud",
    count:100
  },
  {
    dept:"Application",
    count:57
  },
  {
    dept:"SAP",
    count:76
  }
]
marks=[
  {
    maths:50,
    subject:"maths"
  },
  {
    
  }
]

tutoriels=[
  {lang:"Angular",
dur:"30 days"},
{
  lang:"React",
  dur:"45 daya"
}
]
 constructor(){
 
}
regData=[
  {
    user:"Sudheer",
    id:1234
  },
  {
    user:"Sreelakshmi",
    id:4567
  },
  {
    user:"Mahi",
    id:8970
  }
]
gotData(m:any){
  console.log("Got It!",m)
}
passing(info:any){
  console.log("Done!",info)
 }
 test(h:any){
  console.log("Testing !",h)
 }
 child(k:any){
  console.log("Hello",k)
 }
}

