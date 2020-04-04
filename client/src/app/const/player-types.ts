import { PlayerType } from "./../models/player-type";

export enum PlayerTypes {
  Offensive = "offensive",
  Midfield = "midfield",
  Defensive = "defensive",
  Goalkeeper = "goalkeeper",
}

export const PLAYER_TYPES_SPEAKS: Array<PlayerType> = [
  {
    type: PlayerTypes.Offensive,
    nameSingular: "Útočník",
    namePlural: "Útočníci",
  },
  {
    type: PlayerTypes.Midfield,
    nameSingular: "Záložník",
    namePlural: "Záložníci",
  },
  {
    type: PlayerTypes.Defensive,
    nameSingular: "Obránce",
    namePlural: "Obránci",
  },
  {
    type: PlayerTypes.Goalkeeper,
    nameSingular: "Brankář",
    namePlural: "Brankáři",
  },
];
