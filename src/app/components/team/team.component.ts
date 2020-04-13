import { PlayerService } from "./../../services/player.service";
import { Component, OnInit, Input } from "@angular/core";
import { Team } from "src/app/models/team";
import { Player } from "src/app/models/player";
import { PlayerPositions } from "src/app/const/player-types";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.sass"],
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  players: Player[];
  playerPositions: string[];
  groupedPlayers: object;

  constructor(private playerService: PlayerService) {
    this.players = [];

    this.playerPositions = Object.values(PlayerPositions);
  }

  ngOnInit(): void {
    this.playerService
      .getPlayersByTeam(this.team.id)
      .subscribe((players: Player[]) => {
        this.players = players || [];
        this.groupedPlayers = this.groupPlayersByPosition();
      });
  }

  groupPlayersByPosition() {
    return this.players.reduce((obj, value) => {
      const { position } = value;
      if (obj[position] == null) obj[position] = [];

      obj[position].push(value);
      return obj;
    }, {});
  }

  addPlayer(player: Player) {
    player.teamId = this.team.id;
    this.playerService.addPlayer(player).subscribe((newPlayer) => {
      this.players.push(newPlayer);
      this.groupedPlayers = this.groupPlayersByPosition();
    });
  }

  deletePlayer(player: Player) {
    // TODO: delete by id
    this.players = this.players.filter((item) => item.name !== player.name);
    this.groupedPlayers = this.groupPlayersByPosition();
  }
}
