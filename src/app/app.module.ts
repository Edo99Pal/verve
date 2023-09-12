import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarMenuComponent } from './bar-menu/bar-menu.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { PrivateDiningComponent } from './private-dining/private-dining.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ContactComponent } from './contact/contact.component';
import { TraditionComponent } from './tradition/tradition.component';
import { ChefComponent } from './chef/chef.component';
import { PressComponent } from './press/press.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    BarMenuComponent,
    HamburgerMenuComponent,
    PrivateDiningComponent,
    ReservationsComponent,
    ContactComponent,
    TraditionComponent,
    ChefComponent,
    PressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,  
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
