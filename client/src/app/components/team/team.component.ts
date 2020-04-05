import { Component, OnInit, Input } from "@angular/core";
import { Team } from "src/app/models/team";
import { Player } from "src/app/models/player";
import { PlayerTypes } from "src/app/const/player-types";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.sass"],
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  players: Player[];
  playerTypes: string[];
  groupedPlayers: object;

  constructor() {
    // TODO : replace with ajax!!
    this.players = [
      // {
      //   id: 1,
      //   name: "John Doe 1",
      //   type: "offensive",
      // },
      // {
      //   id: 2,
      //   name: "John Doe 2",
      //   type: "defensive",
      // },
      // {
      //   id: 3,
      //   name: "John Doe 3",
      //   type: "defensive",
      // },
      // {
      //   id: 3,
      //   name: "John Doe 4",
      //   type: "midfield",
      // },
      // {
      //   id: 3,
      //   name: "John Doe 5",
      //   type: "goalkeeper",
      // },
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

  deletePlayer(player: Player) {
    // add htpp and change to delete by id
    console.log("delete");
    this.players = this.players.filter((item) => item.name !== player.name);
    this.groupedPlayers = this.groupPlayersByType();
  }
}
