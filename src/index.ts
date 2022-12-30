class Runner {
    private id: number;
    private name: string;
    private surname: string;
    private startingNumber: number;
    private agTime: number;
    private  age: number;

    constructor(id: number, name: string, surname: string, startingNumber: number, agTime: number, age: number) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.startingNumber = startingNumber;
        this.agTime = agTime;
        this.age = age;
    }
    getid(): number {
        return this.id;
    }
    getname(): string {
        return this.name;
    }
}
class RaceTrack {
    private runner: number;
    private trackNumber: number;
    private time: number;

    constructor(runner: number, trackNumber: number, time: number) {
        this.runner = runner;
        this.trackNumber = trackNumber;
        this.time = time;
    }
}

const runner1 = new Runner(1, "Filip", "Ozvat", 92, 300, 25);
const runner2 = new Runner(2, "Ines", "Gedra ", 17, 280, 30);
const runner3 = new Runner(3, "Nikola", "Marijanovic", 67, 290, 27);

new RaceTrack(1, 1, 300);
new RaceTrack(2, 2, 280);
new RaceTrack(3, 3, 290);

console.log(runner2.getid(), runner2.getname(), " je na druhom mieste");
console.log(runner3.getid(), runner3.getname(), " je na tretom mieste");
console.log(runner1.getid(), runner1.getname(), " je na prvom mieste");