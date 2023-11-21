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
  createTeam():Observable<any[]>
  {
    return this.httpclient.post<any[]>(this.url1+'/GetTeams')
  }
}
