class TableTennisMatch{     // udaje o finalovom zapase
     MatchName: string;
     MatchCountry: string;
     MatchStyle: string;
     Player1Name: string;
     Player1Country: string;
     Player2Name: string;
     Player2Country: string;

     constructor(MatchName: string, MatchCountry: string, MatchStyle: string, Player1Name: string, Player1Country: string, Player2Name: string, Player2Country: string) {
        this.MatchName = MatchName;
        this.MatchCountry = MatchCountry;
        this.MatchStyle = MatchStyle;
        this.Player1Name = Player1Name;
        this.Player1Country = Player1Country;
        this.Player2Name = Player2Name;
        this.Player2Country = Player2Country;

    }

    getMatchInfo(){
        console.log(`Začína sa Finálový zápas turnaja: ${this.MatchName}`);
        console.log(`Zápas sa koná v krajine: ${this.MatchCountry}`);
        console.log(`Formát zápasu je: ${this.MatchStyle}`);
        console.log("----------------------------------------------------------");
        console.log(`Meno prvého finalistu je: ${this.Player1Name}`);
        console.log(`Prvý finalista je z krajiny: ${this.Player1Country}`);
        console.log("---");
        console.log(`Meno druhého finalistu je: ${this.Player2Name}`);
        console.log(`Druhý finalista je z krajiny: ${this.Player2Country}`);
        console.log("----------------------------------------------------------");
    }

}
function Match(){ //simulovanie jednotlivých setov, obaja hráči majú 50% šancu na získanie bodu, hráč vyhráva set ak dosiahne 13 bodov, ak vyhrá 2 sety, vyhráva celý zápas
console.log('Hra začala');
console.log("----------------------------------------------------------");
let Set1ScorePlayer1 = 0;
let Set1ScorePlayer2 = 0;
let Set2ScorePlayer1 = 0;
let Set2ScorePlayer2 = 0;
let Set3ScorePlayer1 = 0;
let Set3ScorePlayer2 = 0;
let hit;
let vitazset1;
let vitazset2;
let vitazset3;
while (Set1ScorePlayer1 <= 12 && Set1ScorePlayer2 <= 12) {
    if (hit = Math.random() < 0.5) {
        Set1ScorePlayer1++;
    }
    else  {
        Set1ScorePlayer2++;
    }
}
console.log('Set 1')
console.log('Počet bodov hráča Liang Jingkun: ' + Set1ScorePlayer1)
console.log('Počet bodov hráča Truls Moregard: ' + Set1ScorePlayer2)
console.log("----------------------------------------------------------");
    if (Set1ScorePlayer1 > Set1ScorePlayer2){
        vitazset1 = 'Liang Jingkun'
    }
    else{
        vitazset1 = 'Truls Moregard'
    }

    while (Set2ScorePlayer1 <= 12 && Set2ScorePlayer2 <= 12) {
        if (hit = Math.random() < 0.5) {
            Set2ScorePlayer1++;
        }
        else  {
            Set2ScorePlayer2++;
        }
    }
    console.log('Set 2')
    console.log('Počet bodov hráča Liang Jingkun: ' + Set2ScorePlayer1)
    console.log('Počet bodov hráča Truls Moregard: ' + Set2ScorePlayer2)
    console.log("----------------------------------------------------------");
    if (Set2ScorePlayer1 > Set2ScorePlayer2){
        vitazset2 = 'Liang Jingkun'
    }
    else{
        vitazset2 = 'Truls Moregard'
    }

    while (Set3ScorePlayer1 <= 12 && Set3ScorePlayer2 <= 12) {
        if (hit = Math.random() < 0.5) {
            Set3ScorePlayer1++;
        }
        else  {
            Set3ScorePlayer2++;
        }
    }
    if(vitazset1 == 'Liang Jingkun' && vitazset2 == 'Liang Jingkun'){
        console.log('Víťazom sa stáva ' + vitazset1 + '!');
    }
    else if (vitazset1 == 'Truls Moregard' && vitazset2 == 'Truls Moregard'){
        console.log('Víťazom sa stáva ' + vitazset1 + '!');
    }
    else{
    console.log('Set 3')
    console.log('Počet bodov hráča Liang Jingkun: ' + Set3ScorePlayer1)
    console.log('Počet bodov hráča Truls Moregard: ' + Set3ScorePlayer2)
    console.log("----------------------------------------------------------");
    if (Set3ScorePlayer1 > Set3ScorePlayer2){
        vitazset3 = 'Liang Jingkun'
    }
    else{
        vitazset3 = 'Truls Moregard'
    }
    }
    if (vitazset1 == 'Liang Jingkun' && vitazset3 == 'Liang Jingkun' && vitazset2 != 'Liang Jingkun'){

        console.log('Víťazom sa stáva hráč ' + vitazset3 + '!');

    }
    else if (vitazset2 == 'Liang Jingkun' && vitazset3 == 'Liang Jingkun' && vitazset1 != 'Liang Jingkun'){
               console.log('Víťazom sa stáva hráč ' + vitazset2 + '!');

    }
    else if(vitazset1 == 'Truls Moregard' && vitazset3 == 'Truls Moregard' && vitazset2 != 'Truls Moregard'){

        console.log('Víťazom sa stáva hráč ' + vitazset1 + '!');

    }
    else if(vitazset2 == 'Truls Moregard' && vitazset3 == 'Truls Moregard' && vitazset1 != 'Truls Moregard'){

        console.log('Víťazom sa stáva hráč ' + vitazset2 + '!');

    }
    else{
        return false}

}


function Info(match: TableTennisMatch){ //funkcia na zobrazenie v terminali
    match.getMatchInfo();

    }



// zapas https://worldtabletennis.com/eventInfo?selectedTab=Results&innerselectedTab=Completed&eventId=2627

const FinalMatchInfo = new TableTennisMatch('WTT Cup Finals Xinxiang 2022', 'China' , 'Best of 3', 'Liang Jingkun', 'China', 'Truls Moregard', 'Sweden');



// mená z https://worldtabletennis.com/rankings


Info(FinalMatchInfo);

Match();




