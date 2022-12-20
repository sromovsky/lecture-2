class Swimmer {
    private id: number;
    private name: string;
    private surname: string;
    private startingNumber: number;
    private agTime: number; //priemnerny cas v sekundach na 50m
    private  state: string;

    constructor(id: number, name: string, surname: string, startingNumber: number, agTime: number, state: string) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.startingNumber = startingNumber;
        this.agTime = agTime;
        this.state = state;
    }
    getid(): number {
        return this.id;
    }
    getname(): string {
        return this.name;
    }
    getsurname(): string {
        return this.surname;
    }
    getstartingNumber(): number {
        return this.startingNumber;
    }
    getagTime(): number {
        return this.agTime;
    }
    getstate(): string {
        return this.state;
    }
}
class Pool {
    private swimmer: number;
    private trackNumber: number;
    private time: number;

    constructor(swimmer: number, trackNumber: number, time: number) {
        this.swimmer = swimmer;
        this.trackNumber = trackNumber;
        this.time = time;
    }

    getswimmer(): number {
        return this.swimmer;
    }

    gettrackNumber(): number {
        return this.trackNumber;
    }

    gettime(): number {
        return this.time;
    }

}

const swimmer1 = new Swimmer(1, "Jozef", "Mrkvicka", 12, 150, "Slovakia");
const swimmer2 = new Swimmer(2, "Juraj", "Včerajší ", 10, 145, "Austria");
const swimmer3 = new Swimmer(3, "Lukáš", "Dnešný", 19, 160, "Czech");
const swimmer4 = new Swimmer(4, "Matúš", "Pozajtrajší", 8, 130, "Slovakia");

const pool1 = new Pool(1, 1, 178);
const pool2 = new Pool(2, 2, 155);
const pool3 = new Pool(3, 3, 168);
const pool4 = new Pool(4, 4, 143);

console.log(swimmer4.getid(), swimmer4.getname(), " is on first place");
console.log(swimmer2.getid(), swimmer2.getname(), " is on second place");
console.log(swimmer3.getid(), swimmer3.getname(), " is on third place");
console.log(swimmer1.getid(), swimmer1.getname(), " is on fourth place");
