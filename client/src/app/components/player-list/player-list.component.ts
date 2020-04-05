import { Player } from "./../../models/player";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PLAYER_TYPES_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.sass"],
})
export class PlayerListComponent implements OnInit {
  @Output() deletePlayer: EventEmitter<Player> = new EventEmitter();

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

  onDelete = (player: Player) => this.deletePlayer.emit(player);
}
