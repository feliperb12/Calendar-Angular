import { AddEventComponent } from './calendar/content/content/add-event/add-event.component';
import { ContentComponent } from './calendar/content/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
