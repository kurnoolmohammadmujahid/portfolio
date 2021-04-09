import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappyCustomersComponent } from './happy-customers.component';
import { HappyCustomersRoutingModule } from './happy-customers-routing.module';

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
    HappyCustomersComponent
  ],
  imports: [
    CommonModule,
    HappyCustomersRoutingModule,
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

export class HappyCustomersModule { }
