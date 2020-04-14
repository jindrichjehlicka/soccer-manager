import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Match } from "src/app/models/match";
import { Team } from "src/app/models/team";
import { MatchService } from "./../../services/match.service";
import { TeamService } from "./../../services/team.service";

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
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teams = [];
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.matchService.getMatch(parseInt(id)).subscribe((match) => {
        match.startDate = match.startDate
          ? new Date(match.startDate).toUTCString()
          : null;
        this.match = match;
        const { teamOneId, teamTwoId } = match;
        if (teamOneId) this.getTeam(teamOneId);
        if (teamTwoId) this.getTeam(teamTwoId);
      });
    }
  }

  addMatch(match: Match) {
    this.matchService.addMatch(match).subscribe((newMatch) => {
      newMatch.startDate = newMatch.startDate
        ? new Date(newMatch.startDate).toUTCString()
        : null;
      this.match = newMatch;
    });
  }

  addTeam(team: Team) {
    this.teamService.addTeam(team).subscribe((newTeam: Team) => {
      this.teams.push(newTeam);
      this.match[this.teams.length > 1 ? "teamTwoId" : "teamOneId"] =
        newTeam.id;
      this.updateMatch(this.match);
    });
  }

  getTeam(id: number) {
    this.teamService.getTeam(id).subscribe((team: Team) => {
      this.teams.push(team);
    });
  }

  updateMatch(match: Match) {
    this.matchService.updateMatch(match).subscribe((updatedMatch) => {
      console.log(this.match);
    });
  }
}
