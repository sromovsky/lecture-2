// Vytvorenie základnej triedy Person
class Person {
    private Name: string;
    private Age: number;

    constructor(Name: string, Age: number) {
        this.Name = Name;
        this.Age = Age;
    }

    getName(): string {
        return this.Name;
    }

    getAge(): number {
        return this.Age;
    }
}

// Vytvorenie podtriedy Player
// PN (Player Number) vyjadruje číslo hráča, napr. číslo na drese
// PartOfTeam vyjadruje ktorého tímu je hráč súčasťou
// Goals vyjadruje počet gólov hráča počas hry
class Player extends Person {
    private PN: number;
    private PartOfTeam: string;
    private Goals: number;

    constructor(Name: string, Age: number, PN: number, PartOfTeam: string, Goals: number, ) {
        super(Name, Age);
        this.PN = PN;
        this.Goals = Goals;
        this.PartOfTeam = PartOfTeam;
    }

    getPN(): number {
        return this.PN;
    }

    getGoals(): number | undefined {
        return this.Goals;
    }

    getPartOfTeam(): string {
        return this.PartOfTeam;
    }
}

// Vytvorenie triedy Team
// Wins a Losses vyjadrujú počet výhier a prehier za sezónu
class Team {
    private Name: string;

    // nie public ak maju spravene get metody:
    private Wins: number;
    private Losses: number;

    constructor(Name: string, Wins: number, Losses: number) {
        this.Name = Name;
        this.Wins = Wins;
        this.Losses = Losses;
    }

    getName(): string {
        return this.Name;
    }

    getWins(): number {
        return this.Wins;
    }

    getLosses(): number {
        return this.Losses;
    }
}

// Vytvorenie triedy Scoreboard
// Čísla vyjadrujú skóre tímov počas hry
// Pomocou tejto classy neskôr vypisujem stav hry na konzolu
class Scoreboard {
    private Score1: number;
    private Score2: number;

    constructor(Score1: number, Score2: number) {
        this.Score1 = Score1;
        this.Score2 = Score2;
    }

    getScore1(): number {
        return this.Score1;
    }

    getScore2(): number {
        return this.Score2;
    }
}

// Vytvorenie hráčov, tímov a tabuľky
const Player1 = new Player("Hill", 24, 35, "Phantoms", 0);
const Player2 = new Player("Brook", 21, 42, "Phantoms", 0);
const Player3 = new Player("Pager", 29, 33, "Phantoms", 0);
const Player4 = new Player("Fring", 22, 87, "Phantoms", 0);
const Player5 = new Player("Smith", 22, 7, "Phantoms", 0);

const Team1 = new Team("Phantoms", 5, 1);


const Player6 = new Player("Marth", 31, 84, "Vandals", 0);
const Player7 = new Player("Mark",28, 58, "Vandals", 0);
const Player8 = new Player("Holsen", 19, 24, "Vandals", 0);
const Player9 = new Player("Frank", 24, 30, "Vandals", 0);
const Player10 = new Player("Young", 25, 15, "Vandals", 0);

const Team2 = new Team("Vandals", 2, 3);


const Score = new Scoreboard(0, 0);

// trocha inac som si predstavoval simulaciu, chcel som aby ten priebeh zapasu bol nahodny. Ukazeme si na prednaske ako :)

// Úvodný výpis o zápase
console.log(Team1.getName(), "VS", Team2.getName(), "\n");

console.log("The Team of", Team1.getName(), "has a Win/Loss record of ", Team1.getWins(), "-", Team1.getLosses(), "this season so far.");
console.log("Playing on their side are", Player1.getName(), Player2.getName(), Player3.getName(), Player4.getName(), "and", Player5.getName(), "\n");

console.log("The Team of", Team2.getName(), "has a Win/Loss record of ", Team2.getWins(), "-", Team2.getLosses(), "this season so far.");
console.log("Playing on their side are", Player6.getName(), Player7.getName(), Player8.getName(), Player9.getName(), "and", Player10.getName(), "\n");

console.log("\nThe game begins! The score is ", Score.getScore1(), ":", Score.getScore2(),"\n")


// Priebeh hry
// Updatovanie skóre/gólov a výpis  na konzolu

// tu potrebujeme pouzit getter: a v idealnom pripade ten increment obalit do metody ze dal gol alebo pridaj score
Score.Score2++;
Player8.Goals++;

console.log("\nIn 14th minute the first goal came in from ", Player8.getName(), "for the ", Player8.getPartOfTeam(),"!");
console.log("The score is now ", Score.getScore1(), ":", Score.getScore2(), ".\n");


Score.Score2++;
Player7.Goals++;

console.log("In 35th minute another goal came in from ", Player7.getName(), "for the ", Player7.getPartOfTeam(), "!");
console.log("The score is now ", Score.getScore1(), ":", Score.getScore2(), ".\n");


console.log("\nThe second half begins!\n");


Score.Score1++;
Player4.Goals++;

console.log("\nIn 51st minute a first goal came in from ", Player4.getName(), "for the ", Player4.getPartOfTeam(), "!");
console.log("The score is now ", Score.getScore1(), ":", Score.getScore2(), ".\n");


Score.Score1++;
Player1.Goals++;

console.log("In 59th minute already another goal came in from ", Player1.getName(), "for the ", Player1.getPartOfTeam(), "!");
console.log("The score is now ", Score.getScore1(), ":", Score.getScore2(), ".\n");


Score.Score1++;
Player4.Goals++;

console.log("On minute 87, with only 3 minutes remaining, a goal came in from", Player4.getName(), "for the", Player4.getPartOfTeam(), "!");
console.log("The score is now ", Score.getScore1(), ":", Score.getScore2(), ".\n");


// Koniec zápasu
// Pripísanie výhry a prehry pre jednotlivé tímy, rekapitulácia
Team1.Wins++;
Team2.Losses++;

console.log("\nThe match is over!", Team1.getName(), "win over", Team2.getName(), "with a score of", Score.getScore1(), "to", Score.getScore2(), "!\n");
console.log("\nThe scoring players of the match were:\n");
console.log(Player1.getName(), "with", Player1.getGoals(), "goals,");
console.log(Player4.getName(), "with", Player4.getGoals(), "goals,");
console.log(Player7.getName(), "with", Player7.getGoals(), "goals,");
console.log("and", Player8.getName(), "with", Player8.getGoals(), "goals.\n");

console.log(Team1.getName(), "have now a Win/Loss record of ", Team1.getWins(), "-", Team1.getLosses(),
            "while", Team2.getName(), "are now at", Team2.getWins(), "-", Team2.getLosses());



// Vystup na konzolu vyzera takto:
/*
Phantoms VS Vandals

The Team of Phantoms has a Win/Loss record of  5 - 1 this season so far.
Playing on their side are Hill Brook Pager Fring and Smith

The Team of Vandals has a Win/Loss record of  2 - 3 this season so far.
Playing on their side are Marth Mark Holsen Frank and Young


The game begins! The score is  0 : 0


In 14th minute the first goal came in from  Holsen for the  Vandals !
The score is now  0 : 1 .

In 35th minute another goal came in from  Mark for the  Vandals !
The score is now  0 : 2 .


The second half begins!


In 51st minute a first goal came in from  Fring for the  Phantoms !
The score is now  1 : 2 .

In 59th minute already another goal came in from  Hill for the  Phantoms !
The score is now  2 : 2 .

On minute 87, with only 3 minutes remaining, a goal came in from Fring for the Phantoms !
The score is now  3 : 2 .


The match is over! Phantoms win over Vandals with a score of 3 to 2 !


The scoring players of the match were:

Hill with 1 goals,
Fring with 2 goals,
Mark with 1 goals,
and Holsen with 1 goals.

Phantoms have now a Win/Loss record of  6 - 1 while Vandals are now at 2 - 4
 */