import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-educational-qualification',
  templateUrl: './educational-qualification.component.html',
  styleUrls: ['./educational-qualification.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class EducationalQualificationComponent implements OnInit {
  products = [];

  constructor(private selectedTab: SelectedTabService,
    private apiCall: ApiServerCommunicationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/education');
    }, 1000);
    this.products = []
    this.apiCall.getQualification().then(data => this.products = data.res);
  }

}
