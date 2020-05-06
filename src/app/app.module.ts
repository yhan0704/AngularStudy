import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JupeterComponent } from './jupeter/jupeter.component';

import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { HeroesService } from './heroes.service';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    JupeterComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
