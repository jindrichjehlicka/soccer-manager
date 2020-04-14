import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  PLAYER_POSITIONS_SPEAKS,
  PlayerPositions,
} from "src/app/const/player-types";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.sass"],
})
export class AddPlayerComponent implements OnInit {
  @Output() addPlayer: EventEmitter<any> = new EventEmitter();

  playerName: string;
  playerPosition: string;
  isSubstitute: boolean;
  errors: string[];
  playerPositions: object;

  constructor() {}

  ngOnInit(): void {
    this.errors = [];
    this.playerPositions = Object.values(PlayerPositions);
  }

  onSubmit() {
    const player = {
      name: this.playerName,
      position: this.playerPosition,
      isSubstitute: this.isSubstitute,
    };
    if (this.playerName && this.playerPosition) {
      this.addPlayer.emit(player);
      this.playerName = "";
      this.playerPosition = "";
      this.isSubstitute = false;
      this.errors = [];
    } else {
      // todo import into a different file
      this.errors = [];
      const error = `Vyplňte, prosím, jméno a pozici hráče!`;
      this.errors.push(error);
    }
  }

  getOption(option: string): string {
    return PLAYER_POSITIONS_SPEAKS.find((speak) => speak.type === option)
      .nameSingular;
  }
}
