class Rider {


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



class StageInfo {


    private length: number;
    private profile: string;
    private start: string ;
    private end: string;

    constructor(length: number, profile: string, start: string, end: string) {
        this.length = length;
        this.profile = profile;
        this.start = start;
        this.end = end;
    }


}

function lap() {

}


const stage1 = new StageInfo(171, 'flat', 'Dunkerque', 'Calais');