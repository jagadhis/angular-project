import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "i have changed the title"
    // },3000)
  }
}
