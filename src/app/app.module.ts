import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectIdeasComponent } from './project-ideas/project-ideas.component';
import { ProjectProposalsComponent } from './project-proposals/project-proposals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternalRequestComponent } from './internal-request/internal-request.component';
import { WeeklyRequestComponent } from './weekly-request/weekly-request.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './project-ideas/project-detail/project-detail.component';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    NavbarComponent,
    ProjectIdeasComponent,
    ProjectProposalsComponent,
    InternalRequestComponent,
    WeeklyRequestComponent,
    ProjectDetailComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
