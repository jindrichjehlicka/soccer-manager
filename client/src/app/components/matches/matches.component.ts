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
    this.getAllMatches();
  }

  getAllMatches(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches.sort(
        (a: Match, b: Match) =>
          this.getDate(a.startDate) - this.getDate(b.startDate)
      );
    });
  }

  showMatch(match: Match): void {}

  deleteMatch(match: Match) {
    this.matchService
      .deleteMatch(match)
      .subscribe(
        (response) =>
          (this.matches = this.matches.filter((m) => m.id !== match.id))
      );
  }

  private getDate(date: Date): number {
    return date != null ? date.getTime() : 0;
  }
}
