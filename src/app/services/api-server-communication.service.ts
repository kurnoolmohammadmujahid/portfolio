import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServerCommunicationService {

  constructor(private http: HttpClient) { }

  getAchievements() {
    return this.http.get<any>('assets/response/achievements.json')
      .toPromise()
      .then(data => { return data; });
  }

  getQualification() {
    return this.http.get<any>('assets/response/qualification.json')
      .toPromise()
      .then(data => { return data; });
  }

  getClients() {
    return this.http.get<any>('assets/response/clients.json')
      .toPromise()
      .then(data => { return data; });
  }

  getProjects() {
    return this.http.get<any>('assets/response/projects.json')
      .toPromise()
      .then(data => { return data; });
  }

  getSkills() {
    return this.http.get<any>('assets/response/skills.json')
      .toPromise()
      .then(data => { return data; });
  }
}
