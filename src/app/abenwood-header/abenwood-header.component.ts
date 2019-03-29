import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-abenwood-header',
  templateUrl: './abenwood-header.component.html',
  styleUrls: ['./abenwood-header.component.scss']
})
export class AbenwoodHeaderComponent implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef<HTMLElement>;
  showMobileNav: BehaviorSubject<boolean>;
  constructor() {
    this.showMobileNav = new BehaviorSubject(false);
  }

  ngOnInit() {
  }

  toggleMobileNav() {
    const showing = this.showMobileNav.getValue();
    this.showMobileNav.next(!showing);
    const body = document.body;
    const nav = this.navMenu.nativeElement;
    const mobile = nav.cloneNode(true);

    mobile.firstChild.parentElement.setAttribute('id', 'mobile-nav');
    const mobileMenu = mobile.firstChild;
    mobileMenu.firstChild.parentElement.setAttribute('class', '');
    const li = body.querySelectorAll('#mobile-nav > ul > li');
    const clicked = fromEvent(mobileMenu.childNodes, 'click');
    body.classList.toggle('mobile-nav-active');
    // console.log('mobile nav', nav, mobile, mobileMenu);
    if (this.showMobileNav.getValue()) {
      body.append(mobile);
      clicked.subscribe(clicker => {
        this.toggleMobileNav();
      });
    } else {
      mobile.firstChild.parentElement.remove();
    }
  }

}



