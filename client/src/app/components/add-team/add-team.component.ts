import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-team",
  templateUrl: "./add-team.component.html",
  styleUrls: ["./add-team.component.sass"]
})
export class AddTeamComponent implements OnInit {
  @Output() addTeam: EventEmitter<any> = new EventEmitter();

  teamName: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const team = {
      name: this.teamName
    };

    this.addTeam.emit(team);
    this.teamName = "";
  }
}
