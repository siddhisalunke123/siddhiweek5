import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FindTeamComponent } from './find-team/find-team.component';
import { HomeComponent } from './home/home.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ListPlayerComponent } from './list-player/list-player.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    FindTeamComponent,
    HomeComponent,
    AddTeamComponent,
    DeletePlayerComponent,
    ListPlayerComponent
   
    
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