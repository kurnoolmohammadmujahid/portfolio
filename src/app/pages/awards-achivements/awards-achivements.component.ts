import { Component, OnInit } from '@angular/core';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-awards-achivements',
  templateUrl: './awards-achivements.component.html',
  styleUrls: ['./awards-achivements.component.scss']
})
export class AwardsAchivementsComponent implements OnInit {

  products = []

  responsiveOptions;

  constructor(private selectedTab: SelectedTabService,
    private apiCall: ApiServerCommunicationService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '650px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/achievements');
    }, 1000);
    this.products = []
    this.apiCall.getAchievements().then(data => this.products = data.res);
  }

}
