import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-app';
  name:string = 'Paweł';
  surname:string = 'Wojtak';
  adress:string = 'Puscha 9/29 Kielce 25-635';
  email:string = 'wojtakpawel@gmail.com';
  birthDate:string = '1991-06-19';



}
