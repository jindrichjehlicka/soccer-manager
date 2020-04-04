import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PLAYER_TYPES_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.sass"],
})
export class AddPlayerComponent implements OnInit {
  @Output() addPlayer: EventEmitter<any> = new EventEmitter();

  playerTypesWithSpeaks: Object[];
  playerName: string;
  playerType: string;

  constructor() {}

  ngOnInit(): void {
    this.playerTypesWithSpeaks = PLAYER_TYPES_SPEAKS;
  }

  onSubmit() {
    const player = {
      name: this.playerName,
      type: this.playerType,
    };

    this.addPlayer.emit(player);
    this.playerName = "";
    this.playerType = "";
  }
}
