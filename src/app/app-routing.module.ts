import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BtechComponent } from './education/btech/btech.component';
import { CttcComponent } from './education/cttc/cttc.component';
import { DiplomaComponent } from './education/diploma/diploma.component';
import { EducationComponent } from './education/education.component';
import { TenthComponent } from './education/tenth/tenth.component';
import { WebdevComponent } from './education/webdev/webdev.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'education',
    component: EducationComponent,
    children:[
      {
        path:'tenth',
        component:TenthComponent
      },
      {
        path:'diploma',
        component:DiplomaComponent
      },
      {
        path:'btech',
        component:BtechComponent
      },
      {
        path:'cttc',
        component:CttcComponent
      },
      {
        path:'webdev',
        component:WebdevComponent
      }
    ]
  },
  {
    path:'skill',
    component: SkillsComponent
  },
  {
    path: 'project',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
