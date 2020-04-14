import { Player } from "./../../models/player";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PLAYER_POSITIONS_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.sass"],
})
export class PlayerListComponent implements OnInit {
  @Output() deletePlayer: EventEmitter<Player> = new EventEmitter();

  @Input() players: Player[];
  @Input() position: string = "";
  title: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.getTitle(this.position);
  }
  ngOnChange():void {
    this.title = this.getTitle(this.position);

  }

  getTitle(position, singular = false) {
    // const { nameSingular, namePlural } = PLAYER_POSITIONS_SPEAKS.find(
    const { nameSingular, namePlural } = PLAYER_POSITIONS_SPEAKS.find(
      (speak) => {
        return speak.type === position;
      }
    );

    return this.players.length < 2 || singular ? nameSingular : namePlural;
  }

  onDelete = (player: Player) => this.deletePlayer.emit(player);
}
