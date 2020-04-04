import { Component, OnInit, Input } from "@angular/core";
import { Team } from "src/app/models/team";
import { Player } from "src/app/models/player";
import { PlayerTypes } from "src/app/const/player-types";
import { PlayerType } from "./../../models/player-type";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.sass"],
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  players: Player[];
  playerTypes: String[];
  groupedPlayers: Object;

  constructor() {
    // TODO : replace with ajax!!
    this.players = [
      {
        name: "John 1",
        type: "offensive",
      },
      {
        name: "John 2",
        type: "defensive",
      },
      {
        name: "John 2",
        type: "defensive",
      },
      {
        name: "John 3",
        type: "midfield",
      },
      {
        name: "John 3",
        type: "midfield",
      },
      {
        name: "John 3",
        type: "midfield",
      },
      {
        name: "John 4",
        type: "offensive",
      },
      {
        name: "John 5",
        type: "offensive",
      },
      {
        name: "John 6",
        type: "goalkeeper",
      },
    ];

    this.playerTypes = Object.values(PlayerTypes);
  }

  ngOnInit(): void {
    this.groupedPlayers = this.groupPlayersByType();
  }

  groupPlayersByType() {
    return this.players.reduce((obj, value) => {
      const { type } = value;
      if (obj[type] == null) obj[type] = [];

      obj[type].push(value);
      return obj;
    }, {});
  }

  addPlayer(player: Player) {
    // TODO add to DB
    this.players.push(player);

    this.groupedPlayers = this.groupPlayersByType();
  }
}
