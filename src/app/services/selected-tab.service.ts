import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedTabService {
  transferCommonData: Subject<any> = new Subject<any>();

  constructor() { }

  childComponentGlobalData(message: any){
    this.transferCommonData.next(message);
  }

}
