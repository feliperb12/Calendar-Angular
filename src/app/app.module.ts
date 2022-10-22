
//angulalr
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//components
import { FullCalendarModule } from 'primeng/fullcalendar';
import { HeaderComponent } from './calendar/content/header/header.component';
import { ContentComponent } from './calendar/content/content/content.component';
import { AddEventComponent } from './calendar/content/content/add-event/add-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    ContentComponent,
    AddEventComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





