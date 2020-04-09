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

  constructor(private matchService: MatchService) {
    // TODO change to an empty array after backend is done
    // this.teams = [{ name: "Test 1" }, { name: "Test 2" }];
    // this.teams = [];
  }

  ngOnInit(): void {
    this.matchService
      .getMatches()
      .subscribe((matches) => console.log("matches", matches));
  }

  addMatch(match: Match) {
    this.match = match;
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }
}
