import { AddEventComponent } from './calendar/content/content/add-event/add-event.component';
import { ContentComponent } from './calendar/content/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadEventComponent } from './calendar/content/content/read-event/read-event.component';
import { EditEventComponent } from './calendar/content/content/edit-event/edit-event.component';
import { DeleteEventComponent } from './calendar/content/content/delete-event/delete-event.component';
import { ReadContasComponent } from './calendar/content/content/read-contas/read-contas.component';
import { AddContasComponent } from './calendar/content/content/add-contas/add-contas.component';
import { EditContasComponent } from './calendar/content/content/edit-contas/edit-contas.component';
import { DeleteContasComponent } from './calendar/content/content/delete-contas/delete-contas.component';
import { ReadMesContasComponent } from './calendar/content/content/read-mes-contas/read-mes-contas.component';

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
  },
  {
    path:'listEvents',
    component: ReadEventComponent
  },
  {
    path:'update/:id',
    component: EditEventComponent
  },
  {
    path:'delete/:id',
    component: DeleteEventComponent
  },
  {
    path:'listarContas',
    component: ReadContasComponent
  },
  {
    path:'contas/create',
    component: AddContasComponent
  },
  {
    path:'contas/update/:id',
    component:EditContasComponent
  },
  {
    path:'contas/delete/:id',
    component:DeleteContasComponent
  },
  {
    path:'contas/mes/:id_mes',
    component:ReadMesContasComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
