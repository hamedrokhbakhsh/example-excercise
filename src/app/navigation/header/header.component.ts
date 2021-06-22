import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNav = new Subject<void>()
  constructor() { }

  ngOnInit(): void {
  }

  ontoggle() {
    this.sideNav.next();
  }
}
