import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProfileSummaryModule } from '../profile-summary/profile-summary.module';
import { SelectedTabService } from '../../services/selected-tab.service';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TabMenuModule,
    RippleModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    CarouselModule,
    SidebarModule,
    ProfileSummaryModule,
    HttpClientModule
  ],
  providers: [
    SelectedTabService,
    ApiServerCommunicationService
  ],
})

export class ProjectsModule { }
