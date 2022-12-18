class Address {
    private city: string;
    private street: string;
    private number: number;

    constructor(city: string, street: string, number: number) {
        this.number = number;
        this.city = city;
        this.street = street;
    }
}

class Building {
    private name: string;
    private address: Address;
    private readonly floors: Floor[];

    constructor(name: string, address: Address, floorsCount: number) {
        this.name = name;
        this.address = address;

        this.floors = [];
        for (let i = 0; i <= floorsCount; i++) {
            this.floors.push(new Floor(i));
        }
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

const address1 = new Address('Bratislava', 'Dolnozemská', 1);
const building1 = new Building('Cesta', address1, 5);

console.log(building1.getRoom('3.1'));

building1.getRoom('3.1');
