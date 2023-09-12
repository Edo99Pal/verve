import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  menuIsOpen = false;
  activeLiEls = [true, false, false, false, false, false, false, false, false];
  @Output() onActiveEls = new EventEmitter<boolean[]>();

  activeClass(n: number): void {
    for(let i = 0; i < this.activeLiEls.length; i++) {
      this.activeLiEls[i] = false;
    }
    this.activeLiEls[n] = true;
    this.onActiveEls.emit(this.activeLiEls);
  }


  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
