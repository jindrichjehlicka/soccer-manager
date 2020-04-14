import { Component, OnInit } from "@angular/core";
import { Player } from "src/app/models/player";
import { PLAYER_POSITIONS_SPEAKS } from "src/app/const/player-types";
import { filterArrayOfObjects } from "src/app/helpers/filters";
import { PlayerService } from "./../../services/player.service";
import { convertNonEnglishChars } from "src/app/helpers/strings";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.sass"],
})
export class PlayersComponent implements OnInit {
  players: Player[];
  filteredPlayers: Player[];

  constructor(private playersService: PlayerService) {}

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers(): void {
    this.playersService.getPlayers().subscribe((players: Player[]) => {
      this.filteredPlayers = this.players = players;
    });
  }

  deletePlayer(player: Player): void {
    this.playersService.deletePlayer(player).subscribe((response: any) => {
      this.players = this.players.filter((p) => p.id !== player.id);
    });
  }

  getPositionspeak(position: string): String {
    return PLAYER_POSITIONS_SPEAKS.find((speak) => speak.type === position)
      .nameSingular;
  }

  filterPlayers(search: string): void {
    // TODO refactor
    if (search) {
      const playersSearchedByName: Player[] = filterArrayOfObjects(
        this.players,
        search,
        ["name"]
      );

      const positionsSearch: any = PLAYER_POSITIONS_SPEAKS.filter((speak) =>
        convertNonEnglishChars(speak.nameSingular.toLocaleLowerCase()).includes(
          convertNonEnglishChars(search.toLowerCase())
        )
      );

      let playersSearchedByPosistion = [];
      positionsSearch.forEach((position: any) => {
        playersSearchedByPosistion = [
          ...playersSearchedByPosistion,
          ...filterArrayOfObjects(this.players, position.type, ["position"]),
        ];
      });

      this.filteredPlayers = Array.from(
        new Set([...playersSearchedByName, ...playersSearchedByPosistion])
      );
    } else {
      this.filteredPlayers = this.players;
    }
  }
}
