import { AddEventComponent } from './calendar/content/content/add-event/add-event.component';
import { ContentComponent } from './calendar/content/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadEventComponent } from './calendar/content/content/read-event/read-event.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'events',
    component: ContentComponent
  },
  {
    path: 'create',
    component: AddEventComponent
  },{
    path:'listEvents',
    component: ReadEventComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
