import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsAchivementsComponent } from './awards-achivements.component';
import { AwardsAchivementsRoutingModule } from './awards-achivements-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ProfileSummaryModule } from '../profile-summary/profile-summary.module';
import { SelectedTabService } from '../../services/selected-tab.service';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AwardsAchivementsComponent
  ],
  imports: [
    CommonModule,
    AwardsAchivementsRoutingModule,
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

export class AwardsAchivementsModule { }
