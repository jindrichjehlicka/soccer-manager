import { PlayerType } from "./../models/player-type";

export enum PlayerPositions {
  Offensive = "offensive",
  Midfield = "midfield",
  Defensive = "defensive",
  Goalkeeper = "goalkeeper",
}

export const PLAYER_POSITIONS_SPEAKS: Array<PlayerType> = [
  {
    type: PlayerPositions.Offensive,
    nameSingular: "Útočník",
    namePlural: "Útočníci",
  },
  {
    type: PlayerPositions.Midfield,
    nameSingular: "Záložník",
    namePlural: "Záložníci",
  },
  {
    type: PlayerPositions.Defensive,
    nameSingular: "Obránce",
    namePlural: "Obránci",
  },
  {
    type: PlayerPositions.Goalkeeper,
    nameSingular: "Brankář",
    namePlural: "Brankáři",
  },
];
