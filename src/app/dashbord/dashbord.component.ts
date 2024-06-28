import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  @Input() dashbordNames:any;
  @Output() sendingData=new EventEmitter()

  ngOnInit(){
    console.log(this.dashbordNames)
  }
  gotData(info:any){
    this.sendingData.emit(info)
   }
}
