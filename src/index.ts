class RaceTrack {
    private trackName: String;
    private trackLenght: Number;
    private trackCorners: Number;
    private trackLaps: Number;

    constructor(trackName: String, trackLenght: Number, trackCorners: Number, trackLaps: Number) {
        this.trackName = trackName;
        this.trackLenght = trackLenght;
        this.trackCorners = trackCorners;
        this.trackLaps = trackLaps;
    }

    getTrackName() {
        return this.trackName;
    }
    getTrackLength() {
        return this.trackLenght;
    }
    getTrackCorners() {
        return this.trackCorners;
    }
    getTrackLaps() {
        return this.trackLaps;
    }
}

class Formula {
    private formulaName: String;
    private speed: Number;
    private breaking: Number;

    constructor(formulaName: String, speed: Number, breaking: Number) {
        this.formulaName = formulaName;
        this.speed = speed;
        this.breaking = breaking;
    }

    getFormulaName() {
        return this.formulaName;
    }
    getSpeed(){
        return this.speed;
    }
    getBreaking(){
        return this.breaking;
    }
}

class Driver {
    private driverName: String;
    private skillLevel: Number;

    constructor(driverName: String, skillLevel: Number) {
        this.driverName = driverName;
        this.skillLevel = skillLevel;
    }

    getDriverName() {
        return this.driverName;
    }
    getSkillLevel() {
        return this.skillLevel;
    }
}

class Team {
    private teamName: String;
    private formula: Formula;
    private teamMember1: Driver;
    private teamMember2: Driver;

    constructor(teamName: String, formula: Formula, teamMember1: Driver, teamMember2: Driver) {
        this.teamName = teamName;
        this.formula = formula;
        this.teamMember1 = teamMember1;
        this.teamMember2 = teamMember2;
    }
    getTeamName() {
        return this.teamName;
    }
    getFormula() {
        return this.formula;
    }
    getTeamMember1() {
        return this.teamMember1;
    }
    getTeamMember2() {
        return this.teamMember2;
    }
}

class Qualifying {
    private raceTrack: RaceTrack;
    private teams: Team[];
    private qualifyingPositions: Driver[];

    constructor(raceTrack: RaceTrack, teams: Team[]) {
        this.raceTrack = raceTrack;
        this.teams = teams;
        this.qualifyingPositions = [];
        [...this.teams].forEach((key, index) => {
            this.qualifyingPositions.push(key.getTeamMember1());
            this.qualifyingPositions.push(key.getTeamMember2());
        });
        this.shuffle(this.qualifyingPositions);
    }

    getRaceTrack() {
        return this.raceTrack;
    }
    getTeams() {
        return this.teams;
    }
    getQualifyingPositions() {
        return this.qualifyingPositions;
    }

    //shuffle() function from:
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    private shuffle(array: Driver[]) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
}

class Race {
    private qualifyingResult: Qualifying;

    constructor(qualifyingResult: Qualifying) {
        this.qualifyingResult = qualifyingResult;
    }

    runRace() {
        let currentLap: Number = 0;
        let totalLaps: Number = this.qualifyingResult.getRaceTrack().getTrackLaps();
        let trackPositions = this.qualifyingResult.getQualifyingPositions();

        while(currentLap <= totalLaps) {
            
        }

    }

    private calculateProbabilityOfOvertake(driver1: Driver, driver2: Driver) {
        
    }
}

//Racing track creation
const Spa = new RaceTrack('Spa-Francorchamps', 7004, 19, 44);

//Formula creation
const RedbullFormula = new Formula('RB18', 9, 10);
const FerrariFormula = new Formula('F1-75', 10, 9);
const MercedesFormula = new Formula('W13', 9, 9);
const AlpineFormula = new Formula('A522', 8, 8);
const McLarenFormula = new Formula('MCL36', 8, 8);
const AlfaRomeoFormula = new Formula('C42', 7, 6);
const AstonMartinFormula = new Formula('AMR22', 6, 7);
const HaasFormula = new Formula('VF-22', 5, 7);
const AlphaTauriFormula = new Formula('AT03', 7, 4);
const WilliamsFormula = new Formula('FW44', 5, 5);

//Driver creation
const SergioPerez = new Driver('Sergio Perez', 9.8);
const MaxVerstappen = new Driver('Max Verstappen', 9.9);
const CarlosSainz = new Driver('Carlos Sainz', 9.5);
const CharlesLecrelc = new Driver('Charles Leclerc', 9.7);
const GeorgeRussell = new Driver('George Russell', 9);
const LewisHamilton = new Driver('Lewis Hamilton', 9.8);
const FernandoAlonso = new Driver('Fernando Alonso', 9.8);
const EstebanOcon = new Driver('Esteban Ocon', 8.5);
const LandoNorris = new Driver('Lando Norris', 9.2);
const DanielRicciardo = new Driver('Daniel Ricciardo', 7.9);
const ValtteriBottas = new Driver('Valtteri Bottas', 9.4);
const ZhouGuanyu = new Driver('Zhou Guanyu', 8);
const LanceStroll = new Driver('Lance Stroll', 7.5);
const SebastianVettel = new Driver('Sebastian Vettel', 9.5);
const KevinMagnussen = new Driver('Kevin Magnussen', 7.9);
const MickSchumacher = new Driver('Mick Schumacher', 7.3);
const PierreGasly = new Driver('Pierre Gasly', 7.6);
const YukiTsunoda = new Driver('Yuki Tsunoda', 7);
const NicholasLatifi = new Driver('Nicholas Latifi', 6);
const AlexanderAlbon = new Driver('Alexander Albon', 6.9);

//Assign Drivers and Formulas to Teams
const RedBullTeam = new Team('RedBull Racing', RedbullFormula, MaxVerstappen, SergioPerez);
const FerrariTeam = new Team('Ferrari', FerrariFormula, CharlesLecrelc, CarlosSainz);
const MercedesTeam = new Team('Mercedes', MercedesFormula, GeorgeRussell, LewisHamilton);
const AlpineTeam = new Team('Alpine', AlpineFormula, FernandoAlonso, EstebanOcon);
const McLarenTeam = new Team('McLaren', McLarenFormula, LandoNorris, DanielRicciardo);
const AlfaRomeoTeam = new Team('Alfa Romeo', AlfaRomeoFormula, ValtteriBottas, ZhouGuanyu);
const AstonMartinTeam = new Team('Aston Martin', AstonMartinFormula, LanceStroll, SebastianVettel);
const HaasTeam = new Team('Haas', HaasFormula, KevinMagnussen, MickSchumacher);
const AlphaTauriTeam = new Team('AlphaTauri', AlphaTauriFormula, PierreGasly, YukiTsunoda);
const WilliamsTeam = new Team('Williams', WilliamsFormula, NicholasLatifi, AlexanderAlbon);

//Create qualifying object
const SpaQualifying = new Qualifying(Spa, [RedBullTeam, FerrariTeam, MercedesTeam, AlpineTeam, McLarenTeam, AlfaRomeoTeam, AstonMartinTeam, HaasTeam, AlphaTauriTeam, WilliamsTeam]);

//Create race object
const SpaRace = new Race(SpaQualifying);

console.log(SpaQualifying.getQualifyingPositions());