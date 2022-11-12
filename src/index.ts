/*
Informácie o futbalovom zápase
Priebeh zápasu
Výsledok zápasu*/

// Nazov tried piseme velkym zaciatocnym pismenom:
class Futbalovyzapas {
    private krajina: string;
    private liga: string;
    private team1: string;
    private team2: string;
    private stadion: string;




    constructor(krajina: string, liga: string, team1: string, team2: string, stadion : string) {
        this.krajina = krajina;
        this.liga = liga;
        this.team1 = team1;
        this.team2 = team2;
        this.stadion = stadion;
    }

    getkrajina(): string {
        return this.krajina;
    }


    getliga(): string {
        return this.liga;
    }


    getstadion(): string {
        return this.stadion;
    }

    getteam1(): string {
        return this.team1;
    }

    getteam2(): string {
        return this.team2;
    }


}

//function zapas(){ // nepouzil som

//}


// skoda ze si team nedal ako samostatnu triedu kde by bola metoda ci dal hol alebo nie a dole ako simulaciu by si v cykle zavolal na striedacku a ten bodovy stav by vznikol trocha zaujimavejsi.
const futbalovyzapas1 = new Futbalovyzapas('slovensko', 'Fortuna ligy','Slovan Bratislava','Spartak Trnava', 'Tehelnom poli' );

//console.log(" Druzstvo Domaci : " + futbalovyzapas1.getkrajina());
console.log('Začína sa zápas '+ futbalovyzapas1.getliga());
console.log('Zápas sa hrá na ' + futbalovyzapas1.getstadion());
console.log('                                                ');
console.log('Na ihrisko prichádzajú hráči ' + futbalovyzapas1.getteam1() );
console.log('                                                ');
console.log('Na ihrisko prichádzajú hráči ' + futbalovyzapas1.getteam2());
console.log('                                              ');



//random funkcia https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://bobbyhadz.com/blog/typescript-parameter-implicitly-has-an-any-type

function skoreteam(x: any) {
    return Math.floor(Math.random() * x);
}


const random1 = skoreteam(4);
const random2 = skoreteam(4);
const final = skoreteam(2) + random1;


// paci sa mi ze si aspon bodovy stav nasimuloval nahodne :)
console.log('Skóre po prvom polčase')
console.log('Slovan ' + random1 + ':' + random2 + ' Trnava');
console.log('                           ');
console.log('Zápas pokračuje');
console.log('Striedanie hráča č. 7 Spartak Trnava');
console.log('Striedanie hráča č. 30 Slovan Bratislava');
console.log('                           ');
console.log('                           ');
console.log('Výsledok Zápasu: ' + 'Slovan ' + final + ':' + random2 + ' Trnava');

