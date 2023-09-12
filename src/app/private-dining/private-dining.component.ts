import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-private-dining',
  templateUrl: './private-dining.component.html',
  styleUrls: ['./private-dining.component.scss']
})
export class PrivateDiningComponent {
  @Input() active: boolean = false;
}
