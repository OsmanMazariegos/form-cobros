import { Component, OnInit } from '@angular/core';
import { log } from 'util';


class Button {
  text: string;
  disabled: boolean;
  color: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  public button: Button = {
    text: 'Enviar datos',
    color: 'primary',
    disabled: false
  };

  date = new Date();
  

  constructor() { }

  ngOnInit() {
   
  }

}
