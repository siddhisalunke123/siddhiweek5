import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { HomeComponent } from './home/home.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:"home",component:HomeComponent},
  {path:"addteam",component:AddTeamComponent},
  {path:"addplayer",component:AddPlayersComponent},
  {path:"editplayer/:id",component:EditPlayerComponent},
  {path:"listplayer",component:ListPlayersComponent},
  {path:"delete/:id", component:DeletePlayerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }