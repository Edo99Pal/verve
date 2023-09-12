import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  @Input() active = false;
  submitRes = false;
  username = '';
  today: Date = new Date();
  date: Date = new Date();
  hostsNumber = 1;
  hostsList = [ 1, 2, 3, 4, 5, 6];
  onChange(event: any): void {
    this.date = event.target.value;  
  }
  onSubmitRes() {
    this.submitRes = true;
  }

}
