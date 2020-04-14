import { Match } from "src/app/models/match";
import { Component, OnInit } from "@angular/core";
import { MatchService } from "./../../services/match.service";
import { filterArrayOfObjects } from "src/app/helpers/filters";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.sass"],
})
export class MatchesComponent implements OnInit {
  matches: Match[];
  filteredMatches: Match[];
  search: string;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.getAllMatches();
  }
  // TODO add pagination
  getAllMatches(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.filteredMatches = this.matches = matches
        .map(({ startDate, ...rest }) => ({
          startDate: startDate ? new Date(startDate).toUTCString() : null,
          ...rest,
        }))
        .sort((a, b) => this.getDate(a.startDate) - this.getDate(b.startDate));
    });
  }

  deleteMatch(match: Match) {
    this.matchService
      .deleteMatch(match)
      .subscribe(
        (response) =>
          (this.matches = this.matches.filter((m) => m.id !== match.id))
      );
  }

  private getDate(date: any): number {
    return date ? new Date(date).getTime() : 0;
  }

  filterMatches(search: string): void {
    const searchFields = ["name", "location"];
    this.filteredMatches = search
      ? filterArrayOfObjects(this.matches, search, searchFields)
      : this.matches;
  }
}
