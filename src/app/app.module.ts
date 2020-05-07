import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JupeterComponent } from './jupeter/jupeter.component';

import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { HeroesService } from './heroes.service';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { SliceText } from './courses/slice.pipe';
import { AngularBasisComponent } from './courses/angular-basis/angular-basis.component';

@NgModule({
  declarations: [
    AppComponent,
    JupeterComponent,
    CoursesComponent,
    SliceText,
    AngularBasisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
