export type Player = "A" | "B";
export type GamePoint = "0" | "15" | "30" | "40" | "A" | "GAME";

export interface Game {
  playerA: GamePoint;
  playerB: GamePoint;
}

export interface CountScores {
  playerA: number;
  playerB: number;
}

export type TieBreakGame = CountScores;

export type SetCount = 3 | 5;
export type Sets =
  | [number, number, number]
  | [number, number, number, number, number];

export interface ScoreBoard {
  playerA: Sets;
  playerB: Sets;
}