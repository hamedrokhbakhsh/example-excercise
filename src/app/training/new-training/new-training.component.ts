import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {


  @Output() training = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  newTraining() {
    this.training.next();
  }
}
