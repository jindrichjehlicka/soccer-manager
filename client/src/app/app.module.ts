import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { MatchComponent } from "./components/match/match.component";
import { TeamComponent } from "./components/team/team.component";
import { PlayersComponent } from "./components/players/players.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchComponent,
    TeamComponent,
    PlayersComponent,
    AddMatchComponent,
    AddTeamComponent,
    PlayerListComponent,
    AddPlayerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
