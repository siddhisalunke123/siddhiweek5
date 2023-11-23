
import { Component, OnInit } from "@angular/core";
 
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 
  constructor() { }
 
  players : [{id:number, name: string, age:number, category: string, biddingPrice: number}];
  newPlayer : {id:number, name: string, age:number, category: string, biddingPrice: number}
  ngOnInit(): void {
  }
 
}
 