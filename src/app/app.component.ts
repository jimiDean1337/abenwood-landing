import { Component, OnInit } from '@angular/core';
import { fromEvent, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as AOS from 'aos';
import * as $ from 'JQuery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Abenwood Property Solutions';

  ngOnInit() {
    AOS.init({
      useClassNames: true,
      animatedClassName: 'animated',
      duration: 800,
      easing: 'ease',
    });
  }
}
