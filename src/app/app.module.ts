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
import { RouterModule, Routes } from '@angular/router';
import { LecturersComponent } from './PhD/lecturers/lecturers.component';
import { InstitutionsComponent } from './PhD/institutions/institutions.component';
import { ModulesComponent } from './PhD/modules/modules.component';
import { UsefulComponent } from './PhD/useful/useful.component';
import { AnalysisComponent } from './PhD/analysis/analysis.component';
import { AlgebraComponent } from './PhD/algebra/algebra.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'algebra', component: AlgebraComponent},
  {path: 'lecturers', component: LecturersComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'useful', component: UsefulComponent},
  {path: 'institutions', component: InstitutionsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    LecturersComponent,
    InstitutionsComponent,
    ModulesComponent,
    UsefulComponent,
    AnalysisComponent,
    AlgebraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
