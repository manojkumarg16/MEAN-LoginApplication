import { Component, OnInit,AnimationTransitionEvent } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
// import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
logout() {
	localStorage.removeItem('authkey');
	this._router.navigate(['login']);
}
openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("content").style.marginLeft = "-15px";
}
}
