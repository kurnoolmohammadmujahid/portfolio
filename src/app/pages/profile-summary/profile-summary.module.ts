import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryComponent } from './profile-summary.component';
import { ProfileSummaryRoutingModule } from './profile-summary-routing.module';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { HeaderTabComponent } from '../../shared/header-tab/header-tab.component';
import { SelectedTabService } from '../../services/selected-tab.service';

@NgModule({
  declarations: [
    ProfileSummaryComponent,
    HeaderTabComponent
  ],
  exports:[
    HeaderTabComponent
  ],
  imports: [
    CommonModule,
    ProfileSummaryRoutingModule,
    TabMenuModule,
    RippleModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    CarouselModule,
    SidebarModule
  ],
  providers: [
    SelectedTabService
  ],
})

export class ProfileSummaryModule { }
