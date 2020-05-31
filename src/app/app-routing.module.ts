import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { JupeterComponent } from './jupeter/jupeter.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ContactFormComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'jupeter',
    component: JupeterComponent
  },
  {
    path: '**',
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
