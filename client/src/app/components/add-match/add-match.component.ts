import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.sass"]
})
export class AddMatchComponent implements OnInit {
  @Output() addMatch: EventEmitter<any> = new EventEmitter();

  matchName: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const match = {
      name: this.matchName
    };

    this.addMatch.emit(match);
    this.matchName = "";
  }
}
