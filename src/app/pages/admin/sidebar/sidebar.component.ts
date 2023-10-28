import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // by default the menu is open, but it will close if button is clicked
  isMenuVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
