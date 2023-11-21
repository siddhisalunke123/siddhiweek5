import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  teamdata:any[]=[]
  constructor(private as : AdminService) {
    this.as.getTeams().subscribe(data=>{this.teamdata.push(...data)})
    console.log(this.teamdata)
   }

  ngOnInit() {
  }

}
