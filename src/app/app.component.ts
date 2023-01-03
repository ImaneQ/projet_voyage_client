import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todayDate: Date = new Date();

  title = 'projet-voyages';
  dateTime!: Date;
  constructor(
  ) { }

  ngOnInit(): void {

    this.dateTime = new Date()

  }
}
