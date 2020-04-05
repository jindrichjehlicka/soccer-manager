import { PlayersComponent } from "./components/players/players.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { MatchComponent } from "./components/match/match.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: MatchComponent },
  { path: "matches", component: MatchesComponent },
  { path: "teams", component: TeamsComponent },
  { path: "players", component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
