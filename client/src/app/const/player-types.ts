import { PlayerType } from "./../models/player-type";

export const PLAYER_TYPES: any = {
  OFFENSIVE: "offensive",
  MIDFIELD: "midfield",
  DEFENSIVE: "defensive",
  GOALKEEPER: "goalkeeper"
};

export const PLAYER_TYPES_SPEAKS: Array<PlayerType> = [
  {
    type: PLAYER_TYPES.OFFENSIVE,
    nameSingular: "Útočník",
    namePlural: "Útočníci"
  },
  {
    type: PLAYER_TYPES.MIDFIELD,
    nameSingular: "Záložník",
    namePlural: "Záložníci"
  },
  {
    type: PLAYER_TYPES.DEFENSIVE,
    nameSingular: "Obránce",
    namePlural: "Obránci"
  },
  {
    type: PLAYER_TYPES.GOALKEEPER,
    nameSingular: "Brankář",
    namePlural: "Brankáři"
  }
];
