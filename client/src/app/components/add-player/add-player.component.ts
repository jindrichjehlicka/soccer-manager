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
  errors: string[];

  constructor() {}

  ngOnInit(): void {
    this.errors = [];
    this.playerTypesWithSpeaks = PLAYER_TYPES_SPEAKS;
  }

  onSubmit() {
    const player = {
      name: this.playerName,
      type: this.playerType,
    };

    if (this.playerName && this.playerType) {
      this.addPlayer.emit(player);
      this.playerName = "";
      this.playerType = "";
      this.errors = [];
    } else {
      // todo import into a different file
      this.errors = [];
      const error = `Vyplňte, prosím, jméno a pozici hráče!`;
      this.errors.push(error);
    }
  }
}
