// Start here ...
import {
  ScoreBoard,
  Player,
  Game,
  TieBreakGame,
  CountScores,
  SetCount,
} from "./types";

export default class ScoreTennis {
  // Hra má 3 sety
  scoreBoard: ScoreBoard = {
    playerA: [0, 0, 0],
    playerB: [0, 0, 0],
  };
  winner: Player | undefined;

  constructor() {
    this.winner = this.countMatch(this.scoreBoard.playerA.length);
    console.log("Scoreboard:", this.scoreBoard);
    console.log("Winner:", this.winner);
  }

  whichPlayerScored = (): Player =>
    Math.floor(Math.random() * 2) + 1 === 1 ? "A" : "B";

  decideRoundWinner = <T extends CountScores>(
    scoreTarget: number,
    scores: T
  ): Player | undefined => {
    if (
      scores.playerA >= scoreTarget &&
      scores.playerB === scores.playerA - 2
    ) {
      return "A";
    } else if (
      scores.playerB >= scoreTarget &&
      scores.playerA === scores.playerB - 2
    ) {
      return "B";
    } else {
      return undefined;
    }
  };

  countGame = (
    game: Game = {
      playerA: "0",
      playerB: "0",
    }
  ): Player => {
    let winner: Player | undefined = undefined;

    const checkPlayerAdvantage = (player: Player) => {
      if (player === "A") {
        if (game.playerB === "A") {
          game.playerB = "40";
        }
      } else {
        if (game.playerA === "A") {
          game.playerA = "40";
        }
      }
    };

    const onScore = (p: Player, g: Game) => {
      const playerScore = p === "A" ? g.playerA : g.playerB;
      switch (playerScore) {
        case "0":
          checkPlayerAdvantage(p);
          if (p === "A") {
            g.playerA = "15";
          } else {
            g.playerB = "15";
          }
          return g;
        case "15":
          checkPlayerAdvantage(p);
          if (p === "A") {
            g.playerA = "30";
          } else {
            g.playerB = "30";
          }
          return g;
        case "30":
          checkPlayerAdvantage(p);
          if (p === "A") {
            g.playerA = "40";
          } else {
            g.playerB = "40";
          }
          break;
        case "40":
          checkPlayerAdvantage(p);
          if (p === "A") {
            g.playerA = "A";
          } else {
            g.playerB = "A";
          }
          break;
        case "A":
          if (p === "A") {
            g.playerA = "GAME";
          } else {
            g.playerB = "GAME";
          }
      }
      return g;
    };

    while (true) {
      if (game.playerA === "GAME") {
        winner = "A";
        break;
      } else if (game.playerB === "GAME") {
        winner = "B";
        break;
      }

      if (this.whichPlayerScored() === "A") {
        game = onScore("A", game);
      } else {
        game = onScore("B", game);
      }
    }
    return winner;
  };

  countTieBreakGame = (
    game: TieBreakGame = {
      playerA: 0,
      playerB: 0,
    }
  ): Player => {
    let winner: Player | undefined = undefined;

    while (true) {
      this.whichPlayerScored() === "A" ? game.playerA++ : game.playerB++;

      if (this.decideRoundWinner(7, game) === "A") {
        winner = "A";
        break;
      } else if (this.decideRoundWinner(7, game) === "B") {
        winner = "B";
        break;
      }
    }

    return winner;
  };

  countSet = (): CountScores => {
    const set: CountScores = {
      playerA: 0,
      playerB: 0,
    };

    while (true) {
      this.countGame() === "A" ? set.playerA++ : set.playerB++;

      if (this.decideRoundWinner(6, set) === "A") {
        break;
      } else if (this.decideRoundWinner(6, set) === "B") {
        break;
      } else if (set.playerA === 6 && set.playerB === 6) {
        this.countTieBreakGame() === "A" ? set.playerA++ : set.playerB++;
        break;
      }
    }

    return set;
  };

  countMatch = (setCount: SetCount): Player => {
    for (let i = 0; i < setCount; i++) {
      const set = this.countSet();
      this.scoreBoard.playerA[i] = set.playerA;
      this.scoreBoard.playerB[i] = set.playerB;
    }

    const match: CountScores = {
      playerA: 0,
      playerB: 0,
    };

    const setsToWin = setCount === 3 ? 3 : 4;

    for (let i = 0; i < setsToWin; i++) {
      this.scoreBoard.playerA[i] > this.scoreBoard.playerB[i]
        ? match.playerA++
        : match.playerB++;
    }
    return match.playerA > match.playerB ? "A" : "B";
  };

}
