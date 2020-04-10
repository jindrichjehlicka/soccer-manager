import { MatchService } from "./../../services/match.service";
import { Component, OnInit, Input } from "@angular/core";
import { Match } from "src/app/models/match";
import { Team } from "src/app/models/team";

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.sass"],
})
export class MatchComponent implements OnInit {
  @Input() match: Match;
  @Input() newTeam: Team;

  teams: Team[];

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.getAllMatches();
    this.teams = [];
  }

  addMatch(match: Match) {
    this.matchService
      .addMatch(match)
      .subscribe((newMatch) => (this.match = newMatch));
    // this.match = match;
    this.getAllMatches();
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }

  getAllMatches() {
    this.matchService
      .getMatches()
      .subscribe((matches) => console.log("matches", matches));
  }
}
