import { Player } from "./../../models/player";
import { Component, OnInit, Input } from "@angular/core";
import { PLAYER_TYPES_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.sass"],
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[];
  @Input() type: string;
  title: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.getTitle();
  }

  getTitle() {
    const { nameSingular, namePlural } = PLAYER_TYPES_SPEAKS.find(
      (speak) => speak.type === this.type
    );

    return this.players.length > 1 ? namePlural : nameSingular;
  }
}
