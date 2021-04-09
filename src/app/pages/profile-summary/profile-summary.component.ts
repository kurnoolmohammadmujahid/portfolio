import { Component, OnInit } from '@angular/core';
import { SelectedTabService } from '../../services/selected-tab.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent implements OnInit {
  diffHuman: any;
  display: any;

  constructor(private selectedTab: SelectedTabService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.selectedTab.childComponentGlobalData('/profile');
    }, 1000);
    this.dateDiff('2015-08-10');
  }

  dateDiff(startingDate, endingDate?) {
    let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      let swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    let startYear = startDate.getFullYear();
    let february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    let daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    // this.diffHuman = yearDiff + 'Years ' + monthDiff + 'Months ' + dayDiff + 'D';
    this.diffHuman = yearDiff + ' Years ' + monthDiff + ' Months ';
    this.display = `Around ${this.diffHuman} of extensive hands on experience on Mobile and Web application development in IONIC/ANGULAR Framework`;
    // console.log(yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D')
  }

}
