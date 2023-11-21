import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 t:any[]=[]
  constructor(private as:AdminService) {
    this.as.getPlayers().subscribe(data=>{this.t.push(...data)})
    console.log(this.t)
   }

  ngOnInit() {
  }
}
