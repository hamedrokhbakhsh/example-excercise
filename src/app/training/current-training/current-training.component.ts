import {Component, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;

  @Output() dataTraining = new Subject<void>();
  timer : number = 0
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.stratOrResumeTime()
  }


  onStop() {
    clearInterval(this.timer);

    const dialogRef = this.dialog.open(DialogComponent, {
      data : {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dataTraining.next();
      }else {
        this.stratOrResumeTime()

      }
    })
  }
  stratOrResumeTime(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100){
        clearInterval(this.timer);
      }
    },200)
  }
}
