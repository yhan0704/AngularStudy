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
import { IonicComponent } from './courses/ionic/ionic.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    JupeterComponent,
    CoursesComponent,
    SliceText,
    AngularBasisComponent,
    IonicComponent,
    ContactFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
