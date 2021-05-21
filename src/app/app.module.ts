import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TenthComponent } from './education/tenth/tenth.component';
import { DiplomaComponent } from './education/diploma/diploma.component';
import { BtechComponent } from './education/btech/btech.component';
import { WebdevComponent } from './education/webdev/webdev.component';
import { CttcComponent } from './education/cttc/cttc.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    NavComponent,
    TenthComponent,
    DiplomaComponent,
    BtechComponent,
    WebdevComponent,
    CttcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
