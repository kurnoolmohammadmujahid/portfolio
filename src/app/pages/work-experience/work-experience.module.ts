import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceComponent } from './work-experience.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProfileSummaryModule } from '../profile-summary/profile-summary.module';
import { SelectedTabService } from '../../services/selected-tab.service';

@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule,
    TabMenuModule,
    RippleModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    CarouselModule,
    SidebarModule,
    ProfileSummaryModule
  ],
  providers: [
    SelectedTabService
  ],
})

export class WorkExperienceModule { }
