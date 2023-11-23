import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FindTeamComponent } from './find-team/find-team.component';
import { HomeComponent } from './home/home.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ListPlayerComponent } from './list-player/list-player.component';
import { LoginComponent } from './login/login.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';



@NgModule({
  declarations: [
    AppComponent,
    FindTeamComponent,
    HomeComponent,
    AddTeamComponent,
    DeletePlayerComponent,
    ListPlayerComponent,
    LoginComponent,
    EditPlayerComponent,
    EditTeamComponent,
    DeleteTeamComponent
   
    
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