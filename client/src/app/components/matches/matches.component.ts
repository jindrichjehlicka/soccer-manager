import { Match } from "src/app/models/match";
import { Component, OnInit } from "@angular/core";
import { MatchService } from "./../../services/match.service";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.sass"],
})
export class MatchesComponent implements OnInit {
  matches: Match[];

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
      console.log(this.matches);
    });
  }
}
