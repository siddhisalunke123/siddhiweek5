import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';


import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTeamComponent,
    DeletePlayerComponent,
    EditPlayerComponent,
    AddPlayersComponent,
    ListPlayersComponent,
    ListTeamComponent,
    MenuComponent,
    PlayerComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }