
class Person {
    private Name: string;
    private Surname: string;

    constructor(Name: string, Age: number)
    {
        this.Name = Name;
        this.Surname = Surname;
    }

    getName(): string
    {
        return this.Name;
    }

    getSurname(): string
    {
        return this.Surname;
    }
}
class Player extends Person {
    private Team: string;
    private NumberOnDress: number;
    public Position: string;
    public Goals: number;
    public Assistance: number;

    constructor(Name: string, Surname: string, Team: string, NumberOnDress: number, Position: string, Goals: number, Assistance: number)
    {
        super(Name, Surname);
        this.Team = Team;
        this.NumberOnDress = NumberOnDress;
        this.Position = string;
        this.Goals = number;
        this.Assistance = number;

    }

    getTeam(): string
    {
        return this.Team;
    }

    getNumberOnDress(): number
    {
        return this.NumberOnDress;
    }

    getPosition(): string
    {
             return this.Position;
    }

    getGoals(): string
    {
             return this.Goals;
    }

    getAssistance(): string
    {
             return this.Assistance;
    }
}
class Team
{
    private Name: string;
    public Matches: number;
    public Wins: number;
    public Losses: number;
    public Ties: number;

    constructor(Name: string, Matches: number, Wins: number, Losses: number, Ties: number)
    {
        this.Name = Name;
        this.Matches = Matches;
        this.Wins = Wins;
        this.Losses = Losses;
        this.Ties = Ties;
    }

    getName(): string
    {
        return this.Name;
    }

    getMatches(): string
        {
            return this.Matches;
        }

    getWins(): number
    {
        return this.Wins;
    }

    getLosses(): number
    {
        return this.Losses;
    }

    getTies(): number
        {
            return this.Ties;
        }
}

// Vytvorenie triedy Result
class Result
{
    public NO1: number;
    public NO2: number;

    constructor(NO1: number, NO2: number)
    {
        this.NO1 = NO1;
        this.NO2 = NO2;
    }

    getNO1(): number
    {
        return this.NO1;
    }

    getNO2(): number
    {
        return this.NO2;
    }
}


//constructor(Name: string, Surname: string, Team: string, NumberOnDress: number, Position: string, Goals: number, Assistance: number)
const Player1 = new Player("Meyer", "Alexander", "Dortmund", 33, "G", 0, 0);
const Player2 = new Player("Maunier", "Thomas", "Dortmund", 24, "D", 0, 0);
const Player3 = new Player("NiKO", "Scholletrbeck", "Dortmund", 4, "D", 0, 0);
const Player4 = new Player("Niklas", "Sule", "Dortmund", 25, "D", 0, 0);
const Player5 = new Player("Raphael", "Gurreiro", "Dortmund", 13, "M", 0, 0);
const Player6 = new Player("Bellingham", "Jude", "Dortmund", 22, "M", 0, 0);
const Player7 = new Player("Ozcar", "Salih", "Dortmund", 6, "M", 0, 0);
const Player8 = new Player("Adeyemi", "Karim", "Dortmund", 27, "M", 0, 0);
const Player9 = new Player("Can", "Emre", "Dortmund", 23, "M", 0, 0);
const Player10 = new Player("Julian", "Brandt", "Dortmund", 19, "M", 0, 0);
const Player11 = new Player("Modeste", "Anthony", "Dortmund", 20, "A", 0, 0);


//    constructor(Name: string, Matches: number, Wins: number, Losses: number, Ties: number)
const Team1 = new Team("Dortmund", 6, 2, 3, 1);


const Player12 = new Player("Kepa", "Arrizabalaga", "Chelsea", 3, "G", 0, 0);
const Player13 = new Player("Cesar", "Azpilicueta", "Chelsea", 28, "D", 0, 0);
const Player14 = new Player("Calobah", "Trevoh", "Chelsea", 14, "D", 0, 0);
const Player15 = new Player("Silva", "Thiago", "Chelsea", 6, "D", 0, 0);
const Player16 = new Player("Mount", "Mason", "Chelsea", 19, "M", 0, 0);
const Player17 = new Player("Jorigno", "Luiz", "Chelsea", 5, "M", 0, 0);
const Player18 = new Player("Kovacic", "Matheo", "Chelsea", 8, "M", 0, 0);
const Player19 = new Player("Raheem", "Sterling", "Chelsea", 17, "M", 0, 0);
const Player20 = new Player("Aubemeyang", "Emerick", "Chelsea", 9, "A", 0, 0);
const Player21 = new Player("Galgher", "Conor", "Chelsea", 23, "A", 0, 0);
const Player22 = new Player("Harvetz", "Kai", "Chelsea", 57, "C", 0, 0);


const Team2 = new Team("Chelsea", 6, 4, 1, 1    );


const Score = new Result(0, 0);

// Úvodný výpis o zápase
console.log(Team1.getName(), "VS", Team2.getName(), "\n");

console.log("Dnes proti sebe nastúpia  ", Team1.getName(), "VS", Team2.getName(), "Zápas začína!!!")


// Zapas 1/2
Score.NO2++;
Player22.Goals++;

console.log("\nV 5. minúte a 44. sekunde hráč číslo", Player22.getNumberOnDress(), "strieľa prvý gól za tým", Player22.getTeam(),"!");
console.log("Aktuálne skóre je: ", Score.getScore1(), ":", Score.getScore2(), ".\n");

console.log("\nZačína druhý polčas!!!\n");


Score.NO1++;
Player11.Goals++;
Player10.Assistance++;

console.log("V čase 47 minúty, 17 sekúnd 2. polčasi", Player11.getNumberOnDress(), "strieľa prvý gól za tým ", Player11.getTeam(), "!");
console.log("Skóre je: ", Score.getNO1(), ":", Score.getNO2(), ".\n");

Score.NO2++;
Player16.Goals++;

console.log("V čase 50 minút, 21 sekúnd ", Player16.getNumberOnDress(), "strieľa druhý gól za tým ", Player16.getTeam(), "!");
console.log("Aktuálne skóre je: ", Score.getNO1(), ":", Score.getNO2(), ".\n");


Score.NO1++;
Player5.Goals++;
Player10.Assistance++;

console.log("V čase 56 min.", Player5.getNumberOnDress(), "strieľa druhý gól za tým ", Player5.getTeam(), "!");
console.log("Skóre je:", Score.getNO1(), ":", Score.getNO2(), ".\n");


Score.NO2++;
Player16.Goals++;
Player17.Assistance++;

console.log("V čase 66 min.", Player16.getNumberOnDress(), "strieľa tretí gól za tým ", Player16.getTeam(), "!");
console.log("Aktuálne skóre je", Score.getNO1(), ":", Score.getNO2(), ".\n");


Score.NO1++;
Player8.Goals++;
Player7.Assistance++;


console.log("V čase 77. min", Player8.getNumberOnDress(), "strieľa  gól za tým ", Player8.getTeam(), "!");
console.log("Skóre je vyrovnané", Score.getNO1(), ":", Score.getNO2(), ".\n");

Score.NO1++;
Player7.Goals++;
Player11.Assistance++;

console.log("V čase 89: min", Player7.getNumberOnDress(), "strieľa  gól za tým ", Player7.getTeam(), "!");
console.log("Aktuálne skóre je", Score.getNO1(), ":", Score.getNO2(), ".\n");

console.log("\nKoniec zápasu!!!\n");

// rekapitulácia
Team1.Wins++;
Team2.Losses++;

console.log(Team1.getName(), "vyhrala zápas proti ", Team2.getName(), "s tesným výsledkom ", Score.getNO1(), ":", Score.getNO2() );
