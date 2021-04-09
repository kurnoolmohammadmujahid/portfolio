import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { SelectedTabService } from 'src/app/services/selected-tab.service';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  visibleSidebar1;
  constructor(private primengConfig: PrimeNGConfig,
    private selectedTab: SelectedTabService,
    private cdr: ChangeDetectorRef,
    private route: Router) {

    // this.activeItem = this.items[0];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/profile']
      },
      {
        label: 'Experience',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['/experience']
      },
      {
        label: 'Skills',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/skills']
      },
      {
        label: 'Education',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: ['/education']
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-check-square',
        routerLink: ['/projects']
      },
      {
        label: 'Achievements',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/achievements']
      },
      {
        label: 'Details',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/personal-details']
      },
      {
        label: 'Clients',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/happy-clients']
      }
    ];
    this.selectedTab.transferCommonData.subscribe((obj) => {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].routerLink[0] == obj) {
          this.activeItem = this.items[i];
          this.cdr.detectChanges();
        }
      }
    });
  }

  resume(){
    window.open('assets/resume/KurnoolMohammadMujahid_Resume2021.pdf');
  }

}