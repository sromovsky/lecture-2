
// package.json
// "chess.ts": "^0.16.2"
// preco si nepokracoval dalej v tomto? nejak to pouzit pracovat s tym?
// https://www.npmjs.com/package/chess.ts


// Nazov tried piseme velkym, to len info do buducna :) (nestrhavam body)
class Rider { // rider -> Rider

    // Nazov parametrov OK
    private riderName: string;
    private riderSurname: string;
    private riderTeam: string;
    private riderCountry: string;
    private riderPlace: number;

    // constructor OK
    constructor(riderName: string, riderSurname: string, riderTeam: string, riderCountry: string, riderPlace: number) {
        this.riderName = riderName;
        this.riderSurname = riderSurname;
        this.riderTeam = riderTeam;
        this.riderCountry = riderCountry;
        this.riderPlace = riderPlace;
    }

    // ak nemame ziadne dalsie metody na triede tak vieme nejaku instanciu/objekt vyrobit ale nevieme dalej s tym nic robit
}

class StageInfo { // stageInfo -> StageInfo

    // parametre nenastavujeme takto. Trieda je len navrh toho co vieme vytvorit a definicia toho co tam vieme naplnit.

    // private length: number = 171;
    // private profile: string = flat;
    // private start: string = Dunkerque;
    // private end: string = Calais;

    // Takto:
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

    // to iste co pre triedu Rider
    // ak nemame ziadne dalsie metody na triede tak vieme nejaku instanciu/objekt vyrobit ale nevieme dalej s tym nic robit
}

function lap() {
    // ...?
}

// takto si viem vyrobit nejaky stage konkretny podla toho ako som zadefinoval triedu:
const stage1 = new StageInfo(171, 'flat', 'Dunkerque', 'Calais');
// stage1. ??? s nim uz neviem nic robit lebo nema ziadne metody definovane. ani sa neviem opytat na ziaden parameter.