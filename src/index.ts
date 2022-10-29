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

    getTrackName(): string {
        return this.trackName;
    }
    getTrackLength(): number {
        return this.trackLength;
    }
    getTrackCorners(): number {
        return this.trackCorners;
    }
    getTrackLaps(): number {
        return this.trackLaps;
    }
    getAverageLapTime(): number {
        return this.calculateAverageLapTime();
    }

    private calculateAverageLapTime() { //calculate average time needed to complete 1 lap of selected circuit
        let avgStraightSpeed: number = 230; //in km 
        let avgCornerSpeed: number = 100; //in km
        let trackLength: number = this.trackLength;
        let trackCorners: number = this.trackCorners;
        let averageLapSpeed = Math.floor(avgStraightSpeed - (avgCornerSpeed / (trackCorners / Math.PI)));
        let averageTime: number = (trackLength / averageLapSpeed) * 60;
        return averageTime;
    }

    getRaceTrackSummary() { //Get basic information about circuit
        console.log("----------------------------------------------------------");
        console.log(`! Selected circuit: ${this.trackName}`);
        console.log(`-> Circuit length: ${this.trackLength}Km`);
        console.log(`-> Circuit laps: ${this.trackLaps}`);
        console.log(`-> Circuit corners: ${this.trackCorners}`);
        console.log(`-> Average lap time: ${prettyPrintTime(this.getAverageLapTime())} \(${this.getAverageLapTime()}\)`);
        console.log("----------------------------------------------------------");
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

    getFormulaName(): string {
        return this.formulaName;
    }
    getSpeed(): number {
        return this.speed;
    }
    getBreaking(): number {
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

    getDriverName(): string {
        return this.driverName;
    }
    getSkillLevel(): number {
        return this.skillLevel;
    }
    getTeamName(): Team {
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
    getTeamName(): string {
        return this.teamName;
    }
    getFormula(): Formula {
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
        let calculatedQualifyingPositions: Driver[] = this.simulateQualification(drivers);
        this.qualifyingPositions = calculatedQualifyingPositions;
        
    }

    getRaceTrack(): RaceTrack {
        return this.raceTrack;
    }
    getDrivers(): Driver[] {
        return this.drivers;
    }
    getQualifyingPositions(): Driver[] {
        return this.qualifyingPositions;
    }
    getQualifyingPosition(index: number): Driver {
        return this.qualifyingPositions[index];
    }
    getQualifyingDetails(): void {
        console.log(`! Simulating qualifying at ${this.raceTrack.getTrackName()}`);
        console.log("----------------------------------------------------------");
        console.log("Qualifying Results:");
        for (let i in this.getQualifyingPositions()) {
            console.log((parseInt(i) + 1) + ") " + this.getQualifyingPosition(parseInt(i)).getDriverName());
        }
        console.log("----------------------------------------------------------");
    }

    private simulateQualification(array: Driver[]): Driver[] {
        let qualiPositions: QualifyingDriver[] = [];
        let averageLapTime: number = Spa.getAverageLapTime();
        for (let i = 0; i < array.length; i++) {
            let driverTimings: number[] = [];
            let skillLevel: number = array[i].getSkillLevel();
            let minVariation: number = -0.33;
            let maxVariation: number = 0.33;
            for (let j = 0; j < 5; j++) {
                let qualifyingTime: number = 0;
                qualifyingTime = (averageLapTime * (skillLevel/100)) + Math.random() * (maxVariation - minVariation) + minVariation;
                driverTimings.push(qualifyingTime);
            }
            driverTimings.sort();
            qualiPositions.push(new QualifyingDriver(array[i], driverTimings[0]));
        }
        qualiPositions.sort((a, b) => b.getQualifyingDriverTime() - a.getQualifyingDriverTime());
        return qualiPositions;
    } 
}


class QualifyingDriver extends Driver {
    private qualifyingTime: number;
    constructor(qualifyingDriver: Driver, qualifyingTime: number) {
        super(qualifyingDriver.getDriverName(), qualifyingDriver.getSkillLevel(), qualifyingDriver.getTeamName());
        this.qualifyingTime = qualifyingTime;
    }

    getQualifyingDriverTime(): number {
        return this.qualifyingTime;
    }
}

class Race {
    private qualifyingResult: Qualifying;

    constructor(qualifyingResult: Qualifying) {
        this.qualifyingResult = qualifyingResult;
    }

    runRace(): void {
        let currentLap: number = 0;
        let totalLaps: number = this.qualifyingResult.getRaceTrack().getTrackLaps();
        let lapLength: number = Math.round(this.qualifyingResult.getRaceTrack().getTrackLength());
        let trackPositions = this.qualifyingResult.getQualifyingPositions();
        console.log(`! Starting race at ${TrackQualifying.getRaceTrack().getTrackName()}`);
        console.log("----------------------------------------------------------");

        while (currentLap < totalLaps) {
            currentLap++;
            console.log(`Start of Lap ${currentLap} out of ${totalLaps}`);
            for (let i in trackPositions) {
                console.log((parseInt(i) + 1) + ") " + trackPositions[i].getDriverName());
            }
            console.log("----------------------------------------------------------");
            console.log(`Lap ${currentLap} details:`)
            for (let j: number = 0; j < lapLength; j++) {
                console.log('Tu raz budu detaily o aktualnom kole')
            }
            console.log("----------------------------------------------------------");
        }
        console.log("====================RACE FINISHED=========================");
        console.log("Results:")
        for (let i in trackPositions) {
            console.log((parseInt(i) + 1) + ") " + trackPositions[i].getDriverName());
        }
        console.log("==========================================================");
        console.log(`Race winner is ${trackPositions[0].getDriverName()}!`)
        console.log("==========================================================");
    }

    private calculateProbabilityOfOvertake(driver1: Driver, driver2: Driver) {

    }
}

function prettyPrintTime(time: number): string { //Print time in "pretty" format: 00:00:000
    let nonDecimalMinutes: number = Math.floor(time);
    let remainingMinutes: number = time - Math.floor(time);
    let remainingTime: number = remainingMinutes * (60 / 1);
    let remainingSeconds: number = Math.floor(remainingTime);
    let remainingHundredths: number = Math.floor((remainingTime - Math.floor(remainingTime)) * 1000);
    let prettyPrintedTime: string = `${nonDecimalMinutes}:${remainingSeconds}:${remainingHundredths}`;
    return prettyPrintedTime;
}

function runSession(track: RaceTrack, trackQualifying: Qualifying, race: Race): void {
    track.getRaceTrackSummary();
    trackQualifying.getQualifyingDetails();
    race.runRace();
}

//Racing track creation - Data Source: https://www.formula1.com/en/information.belgium-circuit-de-spa-francorchamps.3LltuYaAXVRU8iezEsjzGw.html
//const Spa = new RaceTrack('Spa-Francorchamps Circuit', 7.004, 19, 44);
const Spa = new RaceTrack('Spa-Francorchamps Circuit', 7.004, 19, 1);

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
const TrackQualifying = new Qualifying(Spa, DriversArray);

//Create race object
const TrackRace = new Race(TrackQualifying);

runSession(Spa, TrackQualifying, TrackRace);