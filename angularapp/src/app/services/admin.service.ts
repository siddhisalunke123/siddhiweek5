import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/models/player.model';
import { Team } from 'src/models/team.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url='https://8080-abafbabeebcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin/'
  private url1 = 'https://8080-abafbabeebcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'

  constructor(private httpclient:HttpClient) { }
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url+'/GetPlayer')
  }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url1+'/GetTeams')
  }

  httpOptions={headers:new HttpHeaders ({'Content-type':'application/json'})}
  createTeam(t: Team):Observable<Team>
  {
    return this.httpclient.post<Team>(this.url1 +'/AddTeam/',t,this.httpOptions);
  }
  
}
