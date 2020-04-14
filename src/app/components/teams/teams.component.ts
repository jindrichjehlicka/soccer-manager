import { Component, OnInit } from "@angular/core";
import { filterArrayOfObjects } from "src/app/helpers/filters";
import { Team } from "./../../models/team";
import { TeamService } from "./../../services/team.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.sass"],
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  filteredTeams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.filteredTeams = this.teams = teams;
    });
  }

  deleteTeam(team: Team) {
    this.teamService.deleteTeam(team).subscribe((response) => {
      this.filteredTeams = this.filteredTeams.filter((m) => m.id !== team.id);
      this.teams = this.teams.filter((m) => m.id !== team.id);
    });
  }

  filterTeams(search: string): void {
    const searchFields = ["name", "country"];
    this.filteredTeams = search
      ? filterArrayOfObjects(this.teams, search, searchFields)
      : this.teams;
  }
}
