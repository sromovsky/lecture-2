class RaceTrack {
    private trackName: string;
    private trackLength: number;
    private trackCorners: number;
    private trackLaps: number;

    constructor(trackName: string, trackLength: number, trackCorners: number, trackLaps: number) {
        this.trackName = trackName;
        this.trackLength = trackLength; //in kilometers
        this.trackCorners = trackCorners;
        this.trackLaps = trackLaps;
    }

    getTrackName() {
        return this.trackName;
    }
    getTrackLength() {
        return this.trackLength;
    }
    getTrackCorners() {
        return this.trackCorners;
    }
    getTrackLaps() {
        return this.trackLaps;
    }
}

class Formula {
    private formulaName: string;
    private speed: number;
    private breaking: number;

    constructor(formulaName: string, speed: number, breaking: number) {
        this.formulaName = formulaName;
        this.speed = speed;
        this.breaking = breaking;
    }

    getFormulaName() {
        return this.formulaName;
    }
    getSpeed() {
        return this.speed;
    }
    getBreaking() {
        return this.breaking;
    }
}

class Driver {
    private driverName: string;
    private skillLevel: number;
    private team: Team;

    constructor(driverName: string, skillLevel: number, team: Team) {
        this.driverName = driverName;
        this.skillLevel = skillLevel;
        this.team = team;
    }

    getDriverName() {
        return this.driverName;
    }
    getSkillLevel() {
        return this.skillLevel;
    }
    getTeamName() {
        return this.team;
    }
}
class Team {
    private teamName: string;
    private formula: Formula;

    constructor(teamName: string, formula: Formula) {
        this.teamName = teamName;
        this.formula = formula;

    }
    getTeamName() {
        return this.teamName;
    }
    getFormula() {
        return this.formula;
    }
}

class Qualifying {
    private raceTrack: RaceTrack;
    private drivers: Driver[];
    private qualifyingPositions: Driver[];

    constructor(raceTrack: RaceTrack, drivers: Driver[]) {
        this.raceTrack = raceTrack;
        this.drivers = drivers;
        this.qualifyingPositions = [];
        [...this.drivers].forEach((key, index) => {
            this.qualifyingPositions.push(key);
        });
        this.shuffle(this.qualifyingPositions);
    }

    getRaceTrack() {
        return this.raceTrack;
    }
    getDrivers() {
        return this.drivers;
    }
    getQualifyingPositions() {
        return this.qualifyingPositions;
    }
    getQualifyingPosition(index: number) {
        return this.qualifyingPositions[index];
    }

    //shuffle() function from:
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //Using drivers skill level determine semi-randomly starting position of drivers
    private shuffle(array: Driver[]) {

        //Order drivers by their skill level
        array.sort((a, b) => b.getSkillLevel() - a.getSkillLevel());

        //Simulate starting positions of drivers
        for (let i = 0; i < 20; i++) {
            let currentIndex = array.length - 1;
            console.log(currentIndex);
            while (currentIndex != 0) {
                currentIndex--;
                //Overtaking driver can get "skill boost" helping them overtake
                var randomChanceToOvertake: number = Math.floor(array[currentIndex].getSkillLevel() + (Math.random() * (20 - 3) + 3));
                if (currentIndex === 0) {
                    break;
                } else if (array[currentIndex - 1].getSkillLevel() < randomChanceToOvertake) {
                    [array[currentIndex], array[currentIndex - 1]] = [array[currentIndex - 1], array[currentIndex]];
                }
            }
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
        let currentLap: number = 0;
        let totalLaps: number = this.qualifyingResult.getRaceTrack().getTrackLaps();
        let lapLength: number = Math.round(this.qualifyingResult.getRaceTrack().getTrackLength());
        let trackPositions = this.qualifyingResult.getQualifyingPositions();

        while (currentLap <= totalLaps) {

        }

    }

    private calculateProbabilityOfOvertake(driver1: Driver, driver2: Driver) {

    }
}

function printIntro() {
    console.log("----------------------------------------------------------")
    console.log(`! Selected circuit: ${SpaQualifying.getRaceTrack().getTrackName()}`)
    console.log(`-> Circuit length: ${SpaQualifying.getRaceTrack().getTrackLength()}Km`)
    console.log(`-> Circuit laps: ${SpaQualifying.getRaceTrack().getTrackLaps()}`)
    console.log(`-> Circuit corners: ${SpaQualifying.getRaceTrack().getTrackCorners()}`)
    console.log("----------------------------------------------------------")
    console.log(`! Simulating qualifying at ${SpaQualifying.getRaceTrack().getTrackName()}`)
    console.log("----------------------------------------------------------")
    console.log("Qualifying Results:");
    for (var i in SpaQualifying.getQualifyingPositions()) {
        console.log((parseInt(i) + 1) + ") " + SpaQualifying.getQualifyingPosition(parseInt(i)).getDriverName());
    }
    console.log("----------------------------------------------------------")
    console.log(`! Starting race at ${SpaQualifying.getRaceTrack().getTrackName()}`)
    console.log("----------------------------------------------------------")
}

//Racing track creation - Data Source: https://www.formula1.com/en/information.belgium-circuit-de-spa-francorchamps.3LltuYaAXVRU8iezEsjzGw.html
const Spa = new RaceTrack('Spa-Francorchamps Circuit', 7.004, 19, 44);

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

//Assign Drivers and Formulas to Teams
const RedBullTeam = new Team('RedBull Racing', RedbullFormula);
const FerrariTeam = new Team('Ferrari', FerrariFormula);
const MercedesTeam = new Team('Mercedes', MercedesFormula);
const AlpineTeam = new Team('Alpine', AlpineFormula);
const McLarenTeam = new Team('McLaren', McLarenFormula);
const AlfaRomeoTeam = new Team('Alfa Romeo', AlfaRomeoFormula);
const AstonMartinTeam = new Team('Aston Martin', AstonMartinFormula);
const HaasTeam = new Team('Haas', HaasFormula);
const AlphaTauriTeam = new Team('AlphaTauri', AlphaTauriFormula);
const WilliamsTeam = new Team('Williams', WilliamsFormula);

//Driver creation, skill data from: https://www.ea.com/games/f1/f1-22/driver-ratings/ratings-database
const SergioPerez = new Driver('Sergio Perez', 87, RedBullTeam);
const MaxVerstappen = new Driver('Max Verstappen', 96, RedBullTeam);
const CarlosSainz = new Driver('Carlos Sainz', 89, FerrariTeam);
const CharlesLecrelc = new Driver('Charles Leclerc', 92, FerrariTeam);
const GeorgeRussell = new Driver('George Russell', 91, MercedesTeam);
const LewisHamilton = new Driver('Lewis Hamilton', 94, MercedesTeam);
const FernandoAlonso = new Driver('Fernando Alonso', 90, AlpineTeam);
const EstebanOcon = new Driver('Esteban Ocon', 82, AlpineTeam);
const LandoNorris = new Driver('Lando Norris', 90, McLarenTeam);
const DanielRicciardo = new Driver('Daniel Ricciardo', 82, McLarenTeam);
const ValtteriBottas = new Driver('Valtteri Bottas', 83, AlfaRomeoTeam);
const ZhouGuanyu = new Driver('Zhou Guanyu', 78, AlfaRomeoTeam);
const LanceStroll = new Driver('Lance Stroll', 80, AstonMartinTeam);
const SebastianVettel = new Driver('Sebastian Vettel', 85, AstonMartinTeam);
const KevinMagnussen = new Driver('Kevin Magnussen', 80, HaasTeam);
const MickSchumacher = new Driver('Mick Schumacher', 80, HaasTeam);
const PierreGasly = new Driver('Pierre Gasly', 83, AlphaTauriTeam);
const YukiTsunoda = new Driver('Yuki Tsunoda', 77, AlphaTauriTeam);
const NicholasLatifi = new Driver('Nicholas Latifi', 67, WilliamsTeam);
const AlexanderAlbon = new Driver('Alexander Albon', 82, WilliamsTeam);

const DriversArray = [SergioPerez, MaxVerstappen, CarlosSainz, CharlesLecrelc, GeorgeRussell, LewisHamilton, FernandoAlonso, EstebanOcon, LandoNorris, DanielRicciardo, ValtteriBottas, ZhouGuanyu, LanceStroll, SebastianVettel, KevinMagnussen, MickSchumacher, PierreGasly, YukiTsunoda, NicholasLatifi, AlexanderAlbon]

//Create qualifying object
const SpaQualifying = new Qualifying(Spa, DriversArray);

//Create race object
const SpaRace = new Race(SpaQualifying);

printIntro();