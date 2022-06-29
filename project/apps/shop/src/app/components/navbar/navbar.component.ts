import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
    console.log("loaded navbar")
  }

}
