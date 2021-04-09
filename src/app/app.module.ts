import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTabComponent } from './shared/header-tab/header-tab.component';
import { ProfileSummaryComponent } from './pages/profile-summary/profile-summary.component';
import { EducationalQualificationComponent } from './pages/educational-qualification/educational-qualification.component';
import { SoftwareSkillsComponent } from './pages/software-skills/software-skills.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AwardsAchivementsComponent } from './pages/awards-achivements/awards-achivements.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { HappyCustomersComponent } from './pages/happy-customers/happy-customers.component';

import { SelectedTabService } from './services/selected-tab.service';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
