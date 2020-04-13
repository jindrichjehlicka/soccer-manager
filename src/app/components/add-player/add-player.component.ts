import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { PLAYER_POSITIONS_SPEAKS } from "src/app/const/player-types";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.sass"],
})
export class AddPlayerComponent implements OnInit {
  @Output() addPlayer: EventEmitter<any> = new EventEmitter();

  playerPositionsWithSpeaks: Object[];
  playerName: string;
  playerPosition: string;
  errors: string[];

  constructor() {}

  ngOnInit(): void {
    this.errors = [];
    this.playerPositionsWithSpeaks = PLAYER_POSITIONS_SPEAKS;
  }

  onSubmit() {
    const player = {
      name: this.playerName,
      position: this.playerPosition,
    };
    if (this.playerName && this.playerPosition) {
      this.addPlayer.emit(player);
      this.playerName = "";
      this.playerPosition = "";
      this.errors = [];
    } else {
      // todo import into a different file
      this.errors = [];
      const error = `Vyplňte, prosím, jméno a pozici hráče!`;
      this.errors.push(error);
    }
  }
}
