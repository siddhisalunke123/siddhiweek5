import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  private url='https://8080-abafbabeebcfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin/'

  constructor(private httpclient:HttpClient) {  }

  
  // getPlayer(id:number):Observable<IPlayer>{
  //   return this.httpclient.get<IPlayer>(this.url +'/GetPlayer/'+id);
  // }

}
