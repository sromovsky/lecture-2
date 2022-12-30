class Runner {
    private id: number;
    private name: string;
    private surname: string;
    private  state: string;

    constructor(id: number, name: string, surname: string, state: string) {

        this.id = id;
        this.name = name;
        this.surname = surname;
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
    getstate(): string {
        return this.state;
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

const runner1 = new Runner(1, "Filip", "Ozvat","Serbia");
const runner2 = new Runner(2, "Ines", "Gedra ", "Austria");
const runner3 = new Runner(3, "Nikola", "Marijanović", "Croatia");




console.log(runner2.getid(), runner2.getname(), " is on second place");
console.log(runner3.getid(), runner3.getname(), " is on third place");
console.log(runner1.getid(), runner1.getname(), " is on first place");