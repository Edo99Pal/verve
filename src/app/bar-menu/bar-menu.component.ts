import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})
export class BarMenuComponent {
  activeLiEls = [true, false, false, false, false, false, false, false, false];
  showAbout = false;
  menuIsOpen = false;
  @Output() onActive = new EventEmitter<boolean[]>();
  activeClass(n: number): void {
    for(let i = 0; i < this.activeLiEls.length; i++) {
      this.activeLiEls[i] = false;
    }
    this.activeLiEls[n] = true;
    for(let i = 0; i < this.activeLiEls.length; i++) {
      console.log(this.activeLiEls[i]);
    }
    this.onActive.emit(this.activeLiEls);
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  toggleAbout() {
    this.showAbout = !this.showAbout;
  }
}
