import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tradition',
  templateUrl: './tradition.component.html',
  styleUrls: ['./tradition.component.scss']
})
export class TraditionComponent {
  @Input() active = false;

}
