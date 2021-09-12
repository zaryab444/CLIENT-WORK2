import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { InternalRequestComponent } from './internal-request/internal-request.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './project-ideas/project-detail/project-detail.component';
import { ProjectIdeasComponent } from './project-ideas/project-ideas.component';
import { ProjectProposalsComponent } from './project-proposals/project-proposals.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';

import { WeeklyRequestComponent } from './weekly-request/weekly-request.component';

const routes: Routes = [
  // {path: " ", redirectTo: '/loginform', pathMatch: 'full'},
  {path:'', component:LoginformComponent},
  {path: "loginform", component: LoginformComponent},
  {path: "side", component: SidebarComponent},
  {path: "signup", component: SignupComponent},
  {path: "home", component: HomeComponent},
  {path: "teacherlogin", component: TeacherloginComponent},
  {path:'ideas', component: ProjectIdeasComponent},
  {path:'proposals', component: ProjectProposalsComponent},
  {path:'internal', component: InternalRequestComponent},
  // {path:'detail/:id', component: ProjectDetailComponent},
 {path: 'chat', component: ChatComponent},
  {path: 'view/:id', component: ProjectDetailComponent},
  {path:'weekly', component: WeeklyRequestComponent},




  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginformComponent, SignupComponent, HomeComponent, TeacherloginComponent, PageNotFoundComponent]
