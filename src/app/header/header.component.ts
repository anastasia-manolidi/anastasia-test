import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var toggle = document.getElementById('dropdown-toggle');
    var menu = document.getElementById('dropdown-menu');

    toggle.onclick = function() {
      console.log(toggle.classList);
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    }

    var menuOpen = document.getElementById('menu-open');
    var menuClose = document.getElementById('menu-close');
    var menuMobile = document.getElementById('menu-mobile');

    menuOpen.onclick = function() {
      menuMobile.classList.toggle('open');
      menuClose.classList.toggle('hide');
      menuOpen.classList.toggle('hide');
    }

    menuClose.onclick = function() {
      menuMobile.classList.toggle('open');
      menuClose.classList.toggle('hide');
      menuOpen.classList.toggle('hide');
    }
    // var dropdown = document.getElementById('dropdown-menu');

  }

}
