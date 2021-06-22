import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() sideNav = new Subject<void>()

  constructor() { }

  ngOnInit(): void {
  }

  closeSide() {
    this.sideNav.next();
  }
}
