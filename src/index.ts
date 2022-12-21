class Football
{

    MatchName: string;
    MatchCountry: string;
    Player1Name: string;
    Player1Country: string;
    Player2Name: string;
    Player2Country: string;

    constructor(MatchName: string, MatchCountry: string, MatchStyle: string, Player1Name: string, Player1Country: string, Player2Name: string, Player2Country: string) {
        this.MatchName = MatchName;
        this.MatchCountry = MatchCountry;
        this.Player1Name = Player1Name;
        this.Player1Country = Player1Country;
        this.Player2Name = Player2Name;
        this.Player2Country = Player2Country;

    }

    getMatchInfo(){
        console.log(`Začína sa futbalový zápas turnaja: ${this.MatchName}`);
        console.log(`Zápas sa koná v krajine: ${this.MatchCountry}`);
        console.log("----------------------------------------------------------");
        console.log(`Meno prvého futbalistu je: ${this.Player1Name}`);
        console.log(`Prvý futbalista pochádza z: ${this.Player1Country}`);
        console.log("---");
        console.log(`Meno druhého futbalista je: ${this.Player2Name}`);
        console.log(`Druhý futbalista pochádza z: ${this.Player2Country}`);
        console.log("----------------------------------------------------------");
    }

}