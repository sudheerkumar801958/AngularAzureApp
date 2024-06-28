import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
 @Input() testData:any

 @Output() sendToParent=new EventEmitter()

 ngOnInit(){
  console.log(this.testData,"RegData")
 }
 getTestData(){
  console.log(this.testData)
 }
 sendTestData(x:any){
  this.sendToParent.emit(x)
 }
}
