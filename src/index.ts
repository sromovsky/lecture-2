class Person {
    private name: string;
    protected age: number;

        constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAge(): number | undefined {
        return this.age;
    }

    getName(): string {
        return this.name;
    }

    private ageIncrement() {
        if (this.age) {
            this.age++;
        }
    }

    birthday() {
        this.ageIncrement();
    }
}
class Student extends Person {
    private id: string;

    constructor(name: string, id: string, age: number) {
        super(name, age);
        this.id = id;
    }

    getId(): string {
        this.age;
        return this.id;
    }
}
class Teacher extends Person {

    constructor(name: string, age: number) {
        super(name, age);
    }
}

class Address {
    private city: string;
    private street: string;
    private number: number;

    constructor(city: string, street: string, number: number) {
        this.number = number;
        this.city = city;
        this.street = street;
    }

    getCity(): string {
        return this.city;
    }

    getStreet(): string {
        return this.street;
    }

    getNumber(): number {
        return this.number;
    }
}

class Building {
    private name: string;
    private address: Address;
    private floors: Floor[];

    constructor(name: string, address: Address, floorsCount: number) {
        this.name = name;
        this.address = address;

        this.floors = [];
        for (let i = 0; i <= floorsCount; i++) {
            this.floors.push(new Floor(i));
        }
    }

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return `${this.address.getStreet()} ${this.address.getNumber()}, ${this.address.getCity()}`;
    }

    getFloor(id: number): Floor | undefined {
        return this.floors[id];
    }

    getRoom(roomId: string): Room | undefined {
        const floorId = Number(roomId.slice(0, roomId.indexOf('.')));
        const floor = this.getFloor(floorId);
        return floor?.getRoom(roomId);
    }
}

class Room {
    id: string;


    constructor(id: string) {
        this.id = id;
    }
}

class Floor {
    id: number;
    rooms: Room[];

    constructor(id: number) {
        this.id = id;

        this.rooms = []
        for (let i = 0; i <= 10; i++) {
            this.rooms.push(new Room(`${this.id}.${i}`));
        }
    }

    getRoom(id: string): Room | undefined {
        return this.rooms.find(r => r.id === id);
    }
}

const address1 = new Address('Bratislava', 'Bajkalská', 28);
const building1 = new Building('FBC', address1, 16);

console.log(building1.getRoom('3.1'));

building1.getRoom('3.1');
