import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  activeLiEls = [true, false, false, false, false, false, false, false, false];
  menuChecked = false;
  username = '';
  today: Date = new Date();
  date: Date = new Date();
  hostsList = [ 1, 2, 3, 4, 5, 6];
  hostsNumber = 1;
  submitRes = false;
  showAbout = false;
  menuIsOpen = false;

  constructor() { }

  scrollToElement($element: any): void {
    this.menuChecked = !this.menuChecked;
    setTimeout(() => {
      console.log($element);
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 800);
  }

  activeClass(n: number): void {
    for(let i = 0; i < this.activeLiEls.length; i++) {
      this.activeLiEls[i] = false;
    }
    this.activeLiEls[n] = true;
    for(let i = 0; i < this.activeLiEls.length; i++) {
      console.log(this.activeLiEls[i]);
    }
  }

  onSubmitRes() {
    this.submitRes = true;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  toggleAbout() {
    this.showAbout = !this.showAbout;
  }

  onChange(event: any): void {
    this.date = event.target.value;  
  }

  ngOnInit(): void {
  }

}
