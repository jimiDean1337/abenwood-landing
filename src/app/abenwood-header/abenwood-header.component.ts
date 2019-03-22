import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-abenwood-header',
  templateUrl: './abenwood-header.component.html',
  styleUrls: ['./abenwood-header.component.scss']
})
export class AbenwoodHeaderComponent implements OnInit {
  showMobileNav: BehaviorSubject<boolean>;
  constructor() {
    this.showMobileNav = new BehaviorSubject(null);
  }

  ngOnInit() {
    this.showMobileNav.next(false);
  }

  toggleMobileNav() {
    this.showMobileNav.pipe(map(show => !show));
    const body = document.body;
    const overlay = '<div id="mobile-body-overly"></div>';
    body.classList.toggle('mobile-nav-active');
    if (this.showMobileNav.getValue()) {
      body.append(overlay);
    } else {
      body.querySelector('#mobile-body-overlay').remove();
    }
  }

}



