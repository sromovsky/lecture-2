class rider {
    private riderName: string;
    private riderSurname: string;
    private riderTeam: string;
    private riderCountry: string;
    private riderPlace: number;

    constructor(riderName: string, riderSurname: string, riderTeam: string, riderCountry: string, riderPlace: number) {
        this.riderName = riderName;
        this.riderSurname = riderSurname;
        this.riderTeam = riderTeam;
        this.riderCountry = riderCountry;
        this.riderPlace = riderPlace;
    }
}

class stageInfo {
    private length: number = 171;
    private profile: string = flat;
    private start: string = Dunkerque;
    private end: string = Calais;

    constructor(length: number, profile: string, start: string, end: string) {
        this.length = length;
        this.profile = profile;
        this.start = start;
        this.end = end;
    }
}

function lap(){

}
