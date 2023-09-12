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
  showAbout = false;

  constructor() { }

  toggleAbout() {
    this.showAbout = !this.showAbout;
  }

  onActiveLiEls(value: any) {
    this.activeLiEls = value; 
    console.log(this.activeLiEls); 
  } 
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


  ngOnInit(): void {
  }

}
