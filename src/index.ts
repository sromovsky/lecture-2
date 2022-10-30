class ScoreBoard{private Set:number; private GameScore: number;

constructor(Set: number, GameScore: number)
{
this.Set= Set;
this.GameScore= GameScore;
}

getSet(): number {
return this.Set;
}

getGameScore(): number {
return this.GameScore;
}
}
class Player{private PlayerName: String;private PlayerNationality: String;private PlayerRanking: Number;private PlayerRankingPoints: Number;

constructor (PlayerName: String, PlayerNationality: String, PlayerRanking: Number, PlayerRankingPoints: Number)
{
this.PlayerName= PlayerName;
this.PlayerNationality= PlayerNationality;
this.PlayerRanking= PlayerRanking;
this.PlayerRankingPoints= PlayerRankingPoints;}}

getPlayerName(): string {
return this.PlayerName;
}
getPlayerNationality(): string {
return this.PlayerNationality;
}

getPlayerRanking(): number {
return this.PlayerRanking;
}

getPlayerRankingPoints(): number {
return this.PlayerRankingPoints;
}


const CarlosAlcaraz= new Player('Carlos Alcaraz', 'Spain', 1, 6730);
const RafaelNadal= new Player('Rafael Nadal', 'Spain', 2, 5810);
const CasperRuud= new Player('Casper Ruud', 'Norway', 3, 5600);
const DaniilMedvedev= new Player('Daniil Medvedev', 'Russia', 4, 5155);
const StefanosTsitsipas= new Player('Stefanos Tsitsipas', 'Greece', 5, 4930);
const AlexanderZverev= new Player('Alexander Zverev', 'Germany', 6, 4860);
const NovakDjokovic= new Player('Novak Djokovic', 'Serbia', 7, 4320);
const AndreyRublev= new Player('Andrey Rublev', 'Russia', 8, 3685)
const TaylorFritz= new Player('Taylor Fritz', 'USA', 9, 3195)

