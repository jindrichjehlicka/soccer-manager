import { Player } from "./../../models/player";
import { Component, OnInit, Input } from "@angular/core";
import { PLAYER_TYPES_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.sass"]
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[];
  
  constructor() {}

  ngOnInit(): void {
    console.log("players: ", this.players);
  }
}
