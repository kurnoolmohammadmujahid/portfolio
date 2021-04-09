import { Component, OnInit } from '@angular/core';
import { SelectedTabService } from '../../services/selected-tab.service';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';

@Component({
  selector: 'app-happy-customers',
  templateUrl: './happy-customers.component.html',
  styleUrls: ['./happy-customers.component.scss']
})
export class HappyCustomersComponent implements OnInit {
  products = [];

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
        breakpoint: '780px',
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
      this.selectedTab.childComponentGlobalData('/happy-clients');
    }, 1000);
    this.products = [];
    this.apiCall.getClients().then(data => {
      this.products = data.res;
      console.log(this.products)
    });
  }
}
