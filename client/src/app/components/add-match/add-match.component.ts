import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.sass"],
})
export class AddMatchComponent implements OnInit {
  @Output() addMatch: EventEmitter<any> = new EventEmitter();

  matchName: string;
  errors: string[];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const match = {
      name: this.matchName,
    };

    if (this.matchName) {
      this.addMatch.emit(match);
      this.matchName = "";
      this.errors = [];
    } else {
      // todo import into a different file
      this.errors = [];
      const error = `Vyplňte, prosím, název zápasu!`;
      this.errors.push(error);
    }
  }
}
