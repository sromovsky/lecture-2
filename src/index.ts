// Start here ...
class Tennis{


}
class Player{
    PlayerName: String;
    PlayerNationality: String;
    PlayerRanking: Number;
    PlayerRankingPoints: Number;

    constructor (PlayerName: String, PlayerNationality: String, PlayerRanking: Number, PlayerRankingPoints)
    this.PlayerName= PlayerName;
    this.PlayerNationality= PlayerNationality;
    this.PlayerRanking= PlayerRanking;
    this.PlayerRankingPoints= PlayerRankingPoints;
}
const CarlosAlcaraz= new Player('Carlos Alcaraz', 'Spain', 1, 6730)
const NovakDjokovic= new Player('Novak Djokovic', 'Serbia', 7, 4320);

class