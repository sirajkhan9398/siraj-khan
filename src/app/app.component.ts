import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  sticky: boolean = false;
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
