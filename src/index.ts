// základná trieda Person
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

// trieda Player obsahujúca prvky triedy Person + nové
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

// Vytvorenie triedy Team
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

// Vytvorenie triedy Result kde vidíme skóre
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

// Vytvorenie hráčov a tímov a nastavenie počiatočného skóre
//constructor(Name: string, Surname: string, Team: string, NumberOnDress: number, Position: string, Goals: number, Assistance: number)
const Player1 = new Player("Pierre-Edouard", "Bellemare", "Tampa Bay Lightning", 41, "LW", 0, 0);
const Player2 = new Player("Anthony", "Cirelli", "Tampa Bay Lightning", 71, "C", 0, 0);
const Player3 = new Player("Ross", "Colton", "Tampa Bay Lightning", 79, "C", 0, 0);
const Player4 = new Player("Brandon", "Hagel", "Tampa Bay Lightning", 38, "LW", 0, 0);
const Player5 = new Player("Alex", "Killorn", "Tampa Bay Lightning", 17, "LW", 0, 0);
const Player6 = new Player("Cole", "Koepke", "Tampa Bay Lightning", 45, "LW", 0, 0);
const Player7 = new Player("Nikita", "Kucherov", "Tampa Bay Lightning", 86, "RW", 0, 0);
const Player8 = new Player("Pat", "Maroon", "Tampa Bay Lightning", 14, "LW", 0, 0);
const Player9 = new Player("Vladislav", "Namestnikov", "Tampa Bay Lightning", 90, "C", 0, 0);
const Player10 = new Player("Nicholas", "Paul", "Tampa Bay Lightning", 20, "LW", 0, 0);
const Player11 = new Player("Corey", "Perry", "Tampa Bay Lightning", 10, "RW", 0, 0);
const Player12 = new Player("Brayden", "Point", "Tampa Bay Lightning", 21, "C", 0, 0);
const Player13 = new Player("Steven", "Stamkos(C)", "Tampa Bay Lightning", 91, "C", 0, 0);
const Player14 = new Player("Zach", "Bogosian", "Tampa Bay Lightning", 24, "R", 0, 0);
const Player15 = new Player("Erik", "Cernak", "Tampa Bay Lightning", 81, "R", 0, 0);
const Player16 = new Player("Ian", "Cole", "Tampa Bay Lightning", 28, "L", 0, 0);
const Player17 = new Player("Haydn", "Fleury", "Tampa Bay Lightning", 7, "L", 0, 0);
const Player18 = new Player("Cal", "Foote", "Tampa Bay Lightning", 52, "R", 0, 0);
const Player19 = new Player("Victor", "Hedman", "Tampa Bay Lightning", 77, "L", 0, 0);
const Player20 = new Player("Philippe", "Myers", "Tampa Bay Lightning", 5, "R", 0, 0);
const Player21 = new Player("Nick", "Perbix", "Tampa Bay Lightning", 48, "R", 0, 0);
const Player22 = new Player("Mikhail", "Sergachev", "Tampa Bay Lightning", 98, "L", 0, 0);
const Player23 = new Player("Brian", "Elliott", "Tampa Bay Lightning", 1, "G", 0, 0);
const Player24 = new Player("Andrei", "Vasilevskiy", "Tampa Bay Lightning", 88, "G", 0, 0);

//    constructor(Name: string, Matches: number, Wins: number, Losses: number, Ties: number)
const Team1 = new Team("Tampa Bay Lightning", 9, 5, 4, 0);


const Player25 = new Player("Drake", "Batherson", "Ottawa Senators", 19, "RW", 0, 0);
const Player26 = new Player("Derick", "Brassard", "Ottawa Senators", 61, "C", 0, 0);
const Player27 = new Player("Alex", "DeBrincat", "Ottawa Senators", 12, "RW", 0, 0);
const Player28 = new Player("Dylan", "Gambrell", "Ottawa Senators", 27, "C", 0, 0);
const Player29 = new Player("Claude", "Giroux", "Ottawa Senators", 28, "RW", 0, 0);
const Player30 = new Player("Mathieu", "Joseph", "Ottawa Senators", 21, "RW", 0, 0);
const Player31 = new Player("Mark", "Kastelic", "Ottawa Senators", 47, "C", 0, 0);
const Player32 = new Player("Parker", "Kelly", "Ottawa Senators", 45, "LW", 0, 0);
const Player33 = new Player("Tyler", "Motte", "Ottawa Senators", 14, "LW", 0, 0);
const Player34 = new Player("Josh", "Norris", "Ottawa Senators", 9, "C", 0, 0);
const Player35 = new Player("Shane", "Pinto", "Ottawa Senators", 57, "C", 0, 0);
const Player36 = new Player("Tim", "Stützle", "Ottawa Senators", 18, "LW", 0, 0);
const Player37 = new Player("Brady", "Tkachuk", "Ottawa Senators", 7, "LW", 0, 0);
const Player38 = new Player("Austin", "Watson", "Ottawa Senators", 16, "LW", 0, 0);
const Player39 = new Player("Erik", "Brannstrom", "Ottawa Senators", 26, "L", 0, 0);
const Player40 = new Player("Thomas", "Chabot", "Ottawa Senators", 72, "L", 0, 0);
const Player41 = new Player("Travis", "Hamonic", "Ottawa Senators", 23, "R", 0, 0);
const Player42 = new Player("Nick", "Holden", "Ottawa Senators", 5, "L", 0, 0);
const Player43 = new Player("Jake", "Sanderson", "Ottawa Senators", 85, "L", 0, 0);
const Player44 = new Player("Nikita", "Zaitsev", "Ottawa Senators", 22, "R", 0, 0);
const Player45 = new Player("Artem", "Zub", "Ottawa Senators", 2, "R", 0, 0);
const Player46 = new Player("Anton", "Forsberg", "Ottawa Senators", 31, "G", 0, 0);
const Player47 = new Player("Magnus", "Hellberg", "Ottawa Senators", 39, "G", 0, 0);
const Player48 = new Player("Cam", "Talbot", "Ottawa Senators", 33, "G", 0, 0);


const Team2 = new Team("Ottawa Senators", 8, 4, 4, 0);


const Score = new Result(0, 0);

// Úvodný výpis o zápase
console.log(Team1.getName(), "VS", Team2.getName(), "\n");

console.log("Dnes proti sebe nastúpia  ", Team1.getName(), "VS", Team2.getName(), "Zápas začína!!!")


// tampa/ottawa 0/1
Score.NO2++;
Player28.Goals++;

console.log("\nV 5. minúte a 44. sekunde hráč číslo", Player28.getNumberOnDress(), "strieľa prvý gól za tým", Player28.getTeam(),"!");
console.log("Aktuálne skóre je: ", Score.getScore1(), ":", Score.getScore2(), ".\n");

console.log("\nZačína druhá tretina!!!\n");

//tampa/ottawa 1/1
Score.NO1++;
Player22.Goals++;
Player13.Assistance++;
Player7.Assistance++;

console.log("V čase 3 minúty, 17 sekúnd 2. tretiny hráč číslo", Player22.getNumberOnDress(), "strieľa prvý gól za tým ", Player22.getTeam(), "!");
console.log("Skóre je vyrovnané: ", Score.getNO1(), ":", Score.getNO2(), ".\n");

//tampa/ottawa 1/2
Score.NO2++;
Player30.Goals++;

console.log("V čase 12 minút, 21 sekúnd 2. tretiny hráč číslo", Player30.getNumberOnDress(), "strieľa druhý gól za tým ", Player30.getTeam(), "!");
console.log("Aktuálne skóre je: ", Score.getNO1(), ":", Score.getNO2(), ".\n");

console.log("\nZačína tretia tretina!!!\n");

//tampa/ottawa 2/2
Score.NO1++;
Player5.Goals++;
Player13.Assistance++;
Player10.Assistance++;

console.log("V čase 11 minút a 4 sekundy  3. tretiny hráč číslo", Player5.getNumberOnDress(), "strieľa druhý gól za tým ", Player5.getTeam(), "!");
console.log("Skóre je vyrovnané", Score.getNO1(), ":", Score.getNO2(), ".\n");

//tampa/ottawa 2/3
Score.NO2++;
Player29.Goals++;
Player37.Assistance++;

console.log("V čase 11 minút a 44 sekúnd  3. tretiny hráč číslo", Player29.getNumberOnDress(), "strieľa tretí gól za tým ", Player29.getTeam(), "!");
console.log("Aktuálne skóre je", Score.getNO1(), ":", Score.getNO2(), ".\n");

//tampa/ottawa 3/3
Score.NO1++;
Player12.Goals++;
Player7.Assistance++;
Player16.Assistance++;

console.log("V čase 15 minút a 55 sekúnd  3. tretiny hráč číslo", Player12.getNumberOnDress(), "strieľa tretí gól za tým ", Player12.getTeam(), "!");
console.log("Skóre je vyrovnané", Score.getNO1(), ":", Score.getNO2(), ".\n");

//tampa/ottawa 4/3
Score.NO1++;
Player7.Goals++;
Player22.Assistance++;
Player12.Assistance++;

console.log("V čase 17 minút a 30 sekúnd  3. tretiny hráč číslo", Player7.getNumberOnDress(), "strieľa druhý gól za tým ", Player7.getTeam(), "!");
console.log("Aktuálne skóre je", Score.getNO1(), ":", Score.getNO2(), ".\n");

console.log("\nKoniec zápasu!!!\n");

// Pripísanie výhry a prehry pre jednotlivé tímy, rekapitulácia
Team1.Wins++;
Team2.Losses++;



console.log(Team1.getName(), "vyhral zápas proti ", Team2.getName(), "s tesným výsledkom ", Score.getNO1(), ":", Score.getNO2() );
