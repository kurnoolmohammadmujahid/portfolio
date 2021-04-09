import { Component, OnInit } from '@angular/core';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss']
})
export class SoftwareSkillsComponent implements OnInit {

  products = []

  responsiveOptions;

  constructor(private selectedTab: SelectedTabService,
    private apiCall: ApiServerCommunicationService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/skills');
    }, 1000);
    this.products = []
    this.apiCall.getSkills().then(data => this.products = data.res);
  }

}
