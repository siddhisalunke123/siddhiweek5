import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ListTeamComponent } from './list-team/list-team.component';
@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    ListTeamsComponent,
    AddPlayersComponent,
    PlayerComponent,
    HomeComponent,
  
    EditPlayerComponent,
    MenuComponent,
   
    DeletePlayerComponent,
   
    AddTeamComponent,
   
    ListTeamComponent
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