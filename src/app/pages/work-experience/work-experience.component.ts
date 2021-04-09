import { Component, OnInit } from '@angular/core';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private selectedTab: SelectedTabService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/experience');
    }, 1000);
  }

}
