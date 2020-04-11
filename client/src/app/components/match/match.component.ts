import { TeamService } from "./../../services/team.service";
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

  constructor(
    private matchService: MatchService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.getAllMatches();
    this.teams = [];
  }

  addMatch(match: Match) {
    this.matchService
      .addMatch(match)
      .subscribe((newMatch) => (this.match = newMatch));
    this.getAllMatches();
  }

  addTeam(team: Team) {
    this.teamService.addTeam(team).subscribe((newTeam) => {
      this.teams.push(newTeam);
      this.match[this.teams.length > 1 ? "teamTwoId" : "teamOneId"] =
        newTeam.id;
      this.updateMatch(this.match);
    });
  }

  getAllMatches() {
    this.matchService
      .getMatches()
      .subscribe((matches) => console.log("matches", matches));
  }

  updateMatch(match: Match) {
    console.log("updating match", match);
    this.matchService.updateMatch(match).subscribe((updatedMatch) => {
      console.log(this.match);
    });
  }
}
