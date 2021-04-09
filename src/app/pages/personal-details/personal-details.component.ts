import { Component, OnInit } from '@angular/core';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private selectedTab: SelectedTabService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/personal-details');
    }, 1000);
  }

}
