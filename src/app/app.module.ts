import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './PhD/home/home.component';
import { AboutComponent } from './PhD/about/about.component';
import { StudentsComponent } from './PhD/students/students.component';
import { ContactComponent } from './PhD/contact/contact.component';
import { LecturersComponent } from './PhD/lecturers/lecturers.component';
import { InstitutionsComponent } from './PhD/institutions/institutions.component';
import { ModulesComponent } from './PhD/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    ContactComponent,
    LecturersComponent,
    InstitutionsComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
