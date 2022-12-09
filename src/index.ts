class Place {
    private arena: string;
    private country: string;
    private norounds: number;

    constructor(arena: string, country: string, norounds: number) {
        this.arena = arena;
        this.country = country;
        this.norounds = norounds;
    }

    getArena(): string {
        return this.arena;
    }

    getCountry(): string {
        return this.country;
    }

    getNorounds(): number {
        return this.norounds;
    }

    getPlaceinfo(): void {
        console.log("=============================================================");
        console.log(`Vítame Vás na zápase ktorý prebieha v krajine ${this.country}`);
        console.log(`nachádzame sa v v aréne ${this.arena}`);
        console.log(`počet prebiehajúcich kôl : ${this.norounds} kolá`);
        console.log("=============================================================");
    }
}

class Fighter {
    private name: string;
    private age: number;
    private nationality: string;
    private weight: number;


    constructor(name: string, age: number, nationality: string, weight: number) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.weight = weight;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getNationality(): string {
        return this.nationality;
    }

    getWeight(): number {
        return this.weight;
    }
}

class Category
{
    private categoryname: string;
    private upweight: number;
    private strenght: number;

    constructor(categoryname: string, upweight: number, strenght: number) {
        this.categoryname = categoryname;
        this.upweight = upweight;
        this.strenght = strenght;
    }


    getCategoryname(): string {
        return this.categoryname;
    }

    getUpweight(): number {
        return this.upweight;
    }

    getStrenght(): number {
        return this.strenght;
    }
}


//arena
const Ring = new Place(`Ariake Arena`,  `Japan`, 3);
//fighers
const Brandon_Moreno   =  new Fighter("Brandon Moreno",   32, "Mexico",         57);
const Kai_Kara_France  =  new Fighter("Kai Kara France",  27, "New Zealand",    54);
const Peter_Yan        =  new Fighter("Peter Yan",        24, "Russia",         61);
const TJ_Dillashaw     =  new Fighter("TJ Dillashaw",     22, "America",        61);
const Max_Holloway     =  new Fighter("Max Holloway",     35, "America",        65);
const Brian_Ortega     =  new Fighter("Brian Ortega",     31, "America",        66);
const Dustin_Poirier   =  new Fighter("Dustin Poirier",   38, "America",        70);
const Justin_Gaethje   =  new Fighter("Justin_Gaethje",   37, "America",        70);
const Colby_Covington  =  new Fighter("Colby Covington",  28, "America",        77);
const Leon_Edwards     =  new Fighter("Leon Edwards",     25, "New Britain",    77);
const Robert_Whittaker =  new Fighter("Robert Whittaker", 20, "New Zealand",    84);
const Jared_Cannonier  =  new Fighter("Jared Cannonier",  31, "America",        84);
const Jan_Blachowicz   =  new Fighter("Jan Blachowicz",   34, "Poland",         93);
const Jiri_Prochazka   =  new Fighter("Jiri Prochazka",   29, "Czech Republic", 93);
const Ciryl_Gane       =  new Fighter("Ciryl Gane",       35, "France",         112);
const Stipe_Miocic     =  new Fighter("Stipe Miocic",     36, "America",        109);
const Zhang_Weili      =  new Fighter("Zhang Weili",      25, "China",          52);

//category
const Lightweight = new Category("Lightweight", 60.3, 1);
const Middleweight = new Category("Middleweight", 76.9 , 2);
const Light_Heavyweight = new Category("Light_Heavyweight", 93.0, 3);
const Heavyweight = new Category("Heavyweight", 120.2, 4);

function start(place: Place): void
{
    place.getPlaceinfo();
}

start(Ring)
//