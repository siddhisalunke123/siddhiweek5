import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
  id:number
  playerdata:{id:number,name:string,age:number,category:string,biddingPrice:number}
  constructor(private adminservice:AdminService, private ar:ActivatedRoute, private router:Router) { }

  getPlayer(id:number){
    this.adminservice.getPlayer(id).subscribe((data)=>{
      this.playerdata = data;
    })
  }

  onDelete() {
    // this.playerdata
    this.adminservice.deletePlayer(this.id).subscribe(()=>{
      alert("Record Deleted Successfully!")
      this.router.navigate(['/listplayer'])
    })
  }


  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.getPlayer(this.id);
  }

  

}