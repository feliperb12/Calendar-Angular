import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FullCalendarModule } from 'primeng/fullcalendar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddContasComponent } from './calendar/content/content/add-contas/add-contas.component';
import { AddEventComponent } from './calendar/content/content/add-event/add-event.component';
import { ContentComponent } from './calendar/content/content/content.component';
import { DeleteEventComponent } from './calendar/content/content/delete-event/delete-event.component';
import { EditEventComponent } from './calendar/content/content/edit-event/edit-event.component';
import { ReadContasComponent } from './calendar/content/content/read-contas/read-contas.component';
import { ReadEventComponent } from './calendar/content/content/read-event/read-event.component';
import { HeaderComponent } from './calendar/content/header/header.component';
import { EditContasComponent } from './calendar/content/content/edit-contas/edit-contas.component';
import { DeleteContasComponent } from './calendar/content/content/delete-contas/delete-contas.component';
import { ReadMesContasComponent } from './calendar/content/content/read-mes-contas/read-mes-contas.component';
import { FooterComponent } from './calendar/content/content/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    ContentComponent,
    AddEventComponent,
    EditEventComponent,
    ReadEventComponent,
    DeleteEventComponent,
    ReadContasComponent,
    AddContasComponent,
    EditContasComponent,
    DeleteContasComponent,
    ReadMesContasComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





