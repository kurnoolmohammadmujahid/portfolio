import { Component, OnInit } from '@angular/core';
import { ApiServerCommunicationService } from '../../services/api-server-communication.service';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [];

  constructor(private selectedTab: SelectedTabService,
    private apiCall: ApiServerCommunicationService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/projects');
    }, 1000);
    this.projects = []
    this.apiCall.getProjects().then(data => this.projects = data.res);
  }

}
