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
  substitutePlayers: Player[];
  substitute: string = "substitute";

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
        this.substitutePlayers = this.players.filter((p) => p.isSubstitute);
      });
  }

  groupPlayersByPosition() {
    return this.players
      .filter((p) => !p.isSubstitute)
      .reduce((obj, value) => {
        const { position } = value;
        if (obj[position] == null) obj[position] = [];

        obj[position].push(value);
        return obj;
      }, {});
  }

  // TODO add limit to players and implement substitues
  addPlayer(player: Player) {
    player.teamId = this.team.id;
    this.playerService.addPlayer(player).subscribe((newPlayer) => {
      this.players.push(newPlayer);
      if (newPlayer.isSubstitute) this.substitutePlayers.push(newPlayer);
      else this.groupedPlayers = this.groupPlayersByPosition();
    });
  }

  deletePlayer(player: Player) {
    // TODO: delete by id
    this.playerService.deletePlayer(player).subscribe((response) => {
      this.players = this.players.filter(({ id }) => id !== player.id);
      if (player.isSubstitute)
        this.substitutePlayers = this.substitutePlayers.filter(
          (p) => p.id === player.id
        );
      else this.groupedPlayers = this.groupPlayersByPosition();
    });
  }
}
