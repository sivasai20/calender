import { Component } from '@angular/core';
import  data  from  './dates.json';
interface datas{
  date:string;
  enter:string;
  exit:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calender';
  Dataas : datas[] =data;
  
}

