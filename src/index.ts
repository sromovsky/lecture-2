// Triedy pekne spravene,


//Macuha Jakub - bHI2203 - fhi EUBA.
/* v tomto .ts subore riesim priebeh hokejoveho zapasu
ako vzor riesenia som naplnil len 5 hracov aby tam toho nebolo too much
v rieseni som vyuzival funkcie ako napr. array: filter, sort, reduce. 
filter - zmensi mnozstvo objektov v poli podla kriterii do noveho pola objektov
sort - triedi pole objektov podla pozadovaneho pola
reduce - ten som vyuzil na sucet polozky goly
kod je rozsiahlejsi lebo som nerobil vsetko cez co najkratsi sposob ktory som nasiel
ako napr. funckie void.
zakladna trieda "osoba" */ 
class Person {
	private name: string;
	private surname: string;
	protected constructor(name: string, surname: string) {
		this.name = name;
		this.surname = surname;
	}

	getName(): string {
		return this.name;
	}

	getSurame(): string {
		return this.surname;
	}

}
//rozsirena trieda "Hrac" kt. obsahuje id - cislo hraca, brank - brankar, utocnik, obranca
//kapit - kt. nadobuda hodnotu "true" pre kapitana, goly - vyluc pri kt. sa napocitavaju
//udalosti golov alebo vylucenia. dalgol(), bolvyluc(), 
class Hrac extends Person {
	private id: string;
	private brank: string;
	private kapit: boolean; // nemusis nastavovat hodnotu tu, ked ju nastavujes v construktore
	protected goly?: number;
	protected vyluc?: number;



	constructor(name: string, surname: string, id: string, brank: string, goly?: number, vyluc?: number) //,kapit: boolean
	{
		super(name, surname);
		this.id = id;
		this.brank = brank;
		this.kapit = false;
		this.goly = goly;
		this.vyluc = vyluc;

	}

	getgoly(): number | undefined {
		return this.goly;
	}
	getvyluc(): number | undefined {
		return this.vyluc;
	}

	getId(): string {
		//this.goly
		//this.vyluc
		return this.id;
	}
	getbrank(): string {
		this.goly
		return this.brank;
	}
	getkapit(ka: boolean): boolean {
		this.kapit = ka;
		return this.kapit;
	}
	jekapit(): boolean {
		return this.kapit;
	}

	private golyIncrement() {
		// if (this.goly == 0) {
        //     // ak su goly 0 tak mozes zavolat this.goly++ a bude to 1 :)
		// 	this.goly = 1;
		// }
        //
		// else {
        //     // goly mozu byt nevyplnene kedze su nepovinny parameter preto to treba osetrit napr. :
        //     if (this.goly !== undefined) {
        //         this.goly++;
        //     }
		// }

        // staci takto:
        if (this.goly !== undefined) {
            this.goly++;
        }
	}

    // to iste co golyIncrement()
	dalgol() {
		this.golyIncrement();
	}
	private vylucIncrement() {
		if (this.vyluc == 0) {
			this.vyluc = 1;
		}
		else {
            // osetrit undefined
            if (this.vyluc !== undefined) {
                this.vyluc++;
            }
		}
	}

	bolvyluc() {
		this.vylucIncrement();
	}

}
class Rozhodca extends Person {

	constructor(name: string, surname: string) {
		super(name, surname);
	}
}

//adresa = mesto a krajina 

class Address {
	private city: string;
	private country: string;
	constructor(city: string, country: string) {
		this.city = city;
		this.country = country;
	}
	getCity(): string {
		return this.city;
	}
	getCountry(): string {
		return this.country;
	}
}

// trieda Druzstvo bude tvorena pre domacich a hostovskych hracov.
// obsahuje meno, adresu, a pole hracov

class Druzstvo {
	private name: string;
	private address: Address;
	hraci: Hrac[];

	constructor(name: string, address: Address, hraci: Hrac[]) {
		this.name = name;
		this.address = address;

		this.hraci = hraci;
	}

	getName(): string {
		return this.name;
	}

	getAddress(): string {
		return `${this.address.getCity()} ${this.address.getCountry()}`; 
	}

	//vrati triedu Hrac

	getHrac(id: string): Hrac | undefined {
		for (let i = 0; i < this.hraci.length; i++) {
			var pomid: string;
			pomid = this.hraci[i].getId();

			if (pomid == id) {
				return this.hraci[i];
			}
		}
	}
}
//trieda Aktivita zaznamenava id kt. je poradovym cislom, kode je akysi "player status code"
//idh je cislo hraca pricom "minuta" je cas, napr. v hokeji zvycajne v intervale 1 az 60.
class Aktivita {
	id: string;  //poradove cislo
	kode: string; // jedna sa o gol alebo vylucenie?
	druz: string; // D pre domaci alebo H pre hosti
	idh: string;  //hracske ID
	minuta: number; // poradove cislo minut hry

	constructor(id: string, kode: string, druz: string, idh: string, minuta: number) {
		this.id = id;
		this.kode = kode;
		this.druz = druz;
		this.idh = idh;
		this.minuta = minuta;
	}
	getKode(): string {
		return this.kode;
	}
	getMinuta(): number {
		return this.minuta;
	}
}
const rozhodca1 = new Rozhodca("Ivan", "Vesely");
const rozhodca2 = new Rozhodca("Jan", "Smutny");
const address1 = new Address('Bratislava', 'SVK');
const address2 = new Address('Praha', 'CZK');
//naplnenie hracov domaceho druzstva 
var hracD: Hrac[];
//var kap: boolean = true;
hracD = [];
hracD[0] = new Hrac("Jan", 'Mrkvicka', '11', 'U', 0, 0);
hracD[1] = new Hrac("Peter", 'Nejedly', '12', 'B', 0, 0);
hracD[2] = new Hrac("Tomas", 'Smrek', '13', 'O', 0, 0);
hracD[3] = new Hrac("Rudolf", 'Agat', '14', 'U', 0, 0);
hracD[4] = new Hrac("Oliver", 'Dub', '15', 'O', 0, 0);
hracD[4].getkapit(true);
//naplnenie hracov hostovskeho druzstva 
var hracH: Hrac[];
hracH = [];
hracH[0] = new Hrac("Rene", 'Petrzlen', '07', 'U', 0, 0);
hracH[1] = new Hrac("Adam", 'Jedlicka', '22', 'B', 0, 0);
hracH[2] = new Hrac("Lord", 'Borovica', '13', 'O', 0, 0);
hracH[3] = new Hrac("Robert", 'Struhany', '24', 'U', 0, 0);
hracH[4] = new Hrac("Emit", 'Knedlicka', '15', 'O', 0, 0);
hracH[3].getkapit(true);
const druzstvo1 = new Druzstvo('Slovan', address1, hracD);
const druzstvo2 = new Druzstvo('Spartak', address2, hracH);
//plnenie hodot - zaznam diania  - aktivita
var Priebeh: Aktivita[];
var PriebG: Aktivita[];
var PriebV: Aktivita[];
var PriebT: Aktivita[];
var sumD: number;
var odd: number;
var doo: number;
var sumH: number;
//console.log(druzstvo1);
Priebeh = [];
//constructor(id: string, kode: string, druz: string, idh: string, minuta: number) {
Priebeh[0] = new Aktivita('1', 'V', 'D', '14', 5);
druzstvo1.getHrac("14").bolvyluc(); //    14   domace=D V=vyluceny
Priebeh[1] = new Aktivita('2', 'G', 'D', '15', 7);
druzstvo1.getHrac("15").dalgol();// G gol 15 cislo dresu hraca
Priebeh[2] = new Aktivita('3', 'V', 'D', '13', 11);
druzstvo1.getHrac("13").bolvyluc();
Priebeh[3] = new Aktivita('4', 'G', 'D', '12', 21);
druzstvo1.getHrac("12").dalgol();// G gol 12 cislo dresu hraca
Priebeh[4] = new Aktivita('5', 'V', 'D', '14', 27);
druzstvo1.getHrac("14").bolvyluc();
Priebeh[5] = new Aktivita('6', 'G', 'D', '15', 30);
druzstvo1.getHrac("15").dalgol();
Priebeh[6] = new Aktivita('7', 'V', 'D', '13', 35);
druzstvo1.getHrac("13").bolvyluc();
Priebeh[7] = new Aktivita('8', 'G', 'D', '12', 59);
druzstvo1.getHrac("12").dalgol();
Priebeh[8] = new Aktivita('9', 'G', 'H', '07', 5);
druzstvo2.getHrac("07").dalgol();
Priebeh[9] = new Aktivita('10', 'G', 'H', '24', 21);
druzstvo2.getHrac("24").dalgol();
Priebeh[10] = new Aktivita('11', 'V', 'H', '13', 35);
druzstvo2.getHrac("13").bolvyluc();
Priebeh[11] = new Aktivita('12', 'G', 'H', '24', 36);
druzstvo2.getHrac("24").dalgol();
Priebeh[12] = new Aktivita('13', 'V', 'H', '07', 40);
druzstvo2.getHrac("07").bolvyluc();
Priebeh[13] = new Aktivita('14', 'G', 'H', '15', 42);
druzstvo2.getHrac("15").dalgol();
Priebeh[14] = new Aktivita('15', 'V', 'H', '13', 45);
druzstvo2.getHrac("13").bolvyluc();
Priebeh[15] = new Aktivita('16', 'G', 'H', '07', 59);
druzstvo2.getHrac("07").dalgol();
//console.log(druzstvo1);
// log - zaciatok vystupov na konzolu
console.log("  Druzstvo Domaci : " + druzstvo1.getName() + " , " + druzstvo1.getAddress());
//zostava domacich
hracD = druzstvo1.hraci.filter(item => item.jekapit() == true);
for (let i = 0; i < hracD.length; i++) {
	console.log("kapitan :" + hracD[i].getName() + " " +
		hracD[i].getSurame() + " s cislom " + hracD[i].getId());
}
hracD = druzstvo1.hraci.filter(item => item.getbrank() == "B");
for (let i = 0; i < hracD.length; i++) {
	console.log("brankar :" + hracD[i].getName() + " " +
		hracD[i].getSurame() + " s cislom " + hracD[i].getId());
}

hracD = druzstvo1.hraci.filter(item => item.getbrank() == "O");
for (let i = 0; i < hracD.length; i++) {
	console.log("obranca :" + hracD[i].getName() + " " +
		hracD[i].getSurame() + " s cislom " + hracD[i].getId());
}

hracD = druzstvo1.hraci.filter(item => item.getbrank() == "U");
for (let i = 0; i < hracD.length; i++) {
	console.log("utocnik :" + hracD[i].getName() + " " +
		hracD[i].getSurame() + " s cislom " + hracD[i].getId());
}
// zostava hostiacich hracov
console.log("  Druzstvo Hosti : " + druzstvo2.getName() + " " + druzstvo2.getAddress());
hracH = druzstvo2.hraci.filter(item => item.jekapit() == true);
for (let i = 0; i < hracH.length; i++) {
	console.log("kapitan :" + hracH[i].getName() + " " +
		hracH[i].getSurame() + " s cislom " + hracH[i].getId());
}
hracH = druzstvo2.hraci.filter(item => item.getbrank() == "B");
for (let i = 0; i < hracH.length; i++) {
	console.log("brankar :" + hracH[i].getName() + " " +
		hracH[i].getSurame() + " s cislom " + hracH[i].getId());
}
hracH = druzstvo2.hraci.filter(item => item.getbrank() == "O");
for (let i = 0; i < hracH.length; i++) {
	console.log("obranca :" + hracH[i].getName() + " " +
		hracH[i].getSurame() + " s cislom " + hracH[i].getId());
}

hracH = druzstvo2.hraci.filter(item => item.getbrank() == "U");
for (let i = 0; i < hracH.length; i++){
	console.log("utocnik :" + hracH[i].getName() + " " +
		hracH[i].getSurame() + " s cislom " + hracH[i].getId());
}
// rozhodcovia
console.log(" rozhodcovia :")
console.log(rozhodca1.getName(), rozhodca1.getSurame());
console.log(rozhodca2.getName(), rozhodca2.getSurame());
var sorted = Priebeh.sort((a, b) => (a.minuta < b.minuta) ? -1 : 1);
//console.log('zoradeny Priebeh');
//console.log(Priebeh);
PriebG = [];
PriebG = Priebeh.filter(item => item.kode == 'G');
PriebV = [];
PriebV = Priebeh.filter(item => item.kode == 'V');
// 1.tretina
console.log("1. tretina G  o  l  y");
PriebT = [];
PriebT = PriebG.filter(item => item.minuta >= 1).filter(item => item.minuta <= 20);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else
	{
	console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
		+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
console.log('1. tretina Vyluceni ');
PriebT = PriebV.filter(item => item.minuta >= 1).filter(item => item.minuta <= 20);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else {
		console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
// sumy
sumD = 0;
sumH = 0;
odd = 1;
doo = 20;
sumD = PriebG.filter(item => item.druz == 'D')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	 .reduce((sumD ) => sumD + 1, 0);
sumH = PriebG.filter(item => item.druz == 'H')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumH ) => sumH + 1, 0);
console.log("1. tretina  " + druzstvo1.getName() + " : " + sumD + " - " + druzstvo2.getName() + " : " + sumH);
// 2.tretina
console.log("2. tretina G  o  l  y");
PriebT = PriebG.filter(item => item.minuta >= 21).filter(item => item.minuta <= 40);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else {
		console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
console.log('2. tretina Vyluceni ');
PriebT = PriebV.filter(item => item.minuta >= 21).filter(item => item.minuta <= 40);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else {
		console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
sumD = 0;
sumH = 0;
odd = 21;
doo = 40;
sumD = PriebG.filter(item => item.druz == 'D')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumD ) => sumD + 1, 0);

sumH = PriebG.filter(item => item.druz == 'H')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumH ) => sumH + 1, 0);
console.log("2. tretina  " + druzstvo1.getName() + " : " + sumD + " - " + druzstvo2.getName() + " : " + sumH);
// 3.tretina
console.log("3. tretina G  o  l  y");
PriebT = PriebG.filter(item => item.minuta >= 41).filter(item => item.minuta <= 60);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else {
		console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
console.log('3. tretina Vyluceni ');
PriebT = PriebV.filter(item => item.minuta >= 41).filter(item => item.minuta <= 60);
for (let i = 0; i < PriebT.length; i++) {
	if (PriebT[i].druz == "D") {
		console.log(druzstvo1.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo1.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo1.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
	else {
		console.log(druzstvo2.getName() + ': hrac : ' + PriebT[i].idh + ' ' + druzstvo2.getHrac(PriebT[i].idh).getName()
			+ " " + druzstvo2.getHrac(PriebT[i].idh).getSurame() + ' v ' + PriebT[i].minuta + ' minute');
	}
}
sumD = 0;
sumH = 0;
odd = 41;
doo = 60;
sumD = PriebG.filter(item => item.druz == 'D')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumD) => sumD + 1, 0);

sumH = PriebG.filter(item => item.druz == 'H')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumH) => sumH + 1, 0);
console.log("3. tretina  " + druzstvo1.getName() + " : " + sumD + " - " + druzstvo2.getName() + " : " + sumH);
// vysledok celkovy
sumD = 0;
sumH = 0;
odd = 1;
doo = 80;
sumD = PriebG.filter(item => item.druz == 'D')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumD) => sumD + 1, 0);
sumH = PriebG.filter(item => item.druz == 'H')
	.filter(item => item.minuta >= odd).filter(item => item.minuta <= doo)
	.reduce((sumH ) => sumH + 1, 0);
console.log("vysledok " + druzstvo1.getName() + " : " + sumD + " - " + druzstvo2.getName() + " : " + sumH);
// rekapitulacia celkom
console.log("rekapitulacia " + druzstvo1.getName() +" goly");
const drudg = druzstvo1.hraci.filter(item => item.getgoly() > 0);
for (let i = 0; i < drudg.length; i++)
{
	console.log(drudg[i].getName() + " " + drudg[i].getSurame() + " : " + drudg[i].getgoly());	
}
console.log("rekapitulacia "+ druzstvo2.getName() +" goly");
const druhg = druzstvo2.hraci.filter(item => item.getgoly() > 0);
for (let i = 0; i < druhg.length; i++)
{
	console.log(druhg[i].getName() + " " + druhg[i].getSurame() + " : " + druhg[i].getgoly());
}

// vela opakujuceho sa kodu, take nieco vzdy obalime do funkcie ktora dostane vstup a spravi s nim to co potrebujes. Ukazeme si na prednaske ako.
// simulaciu som skor chcel ako nahodny zapas nie ze to bude cele napisane v kode kto co spravil :)
