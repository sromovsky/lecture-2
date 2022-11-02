class Player {
    private Name: string;
    private Surname: string;
    private Age: number;
    private Nationality: string;
    private Ranking: number;

    constructor(Name: string, Surname: string, Age: number, Nationality: string, Ranking: number) {
        this.Name = Name;
        this.Surname = Surname;
        this.Age = Age;
        this.Nationality = Nationality;
        this.Ranking = Ranking;

    }
    getName(): string {
        return this.Name;
    }


    getSurname(): string {
        return this.Surname;
    }


    getAge(): number {
        return this.Age;
    }

    getRanking(): number {
        return this.Ranking;
    }
}

class Scoreboard {
    private Set: number;
    private Gamescore: number;

    constructor(Set: number, Gamescore: number) {
        this.Set = Set;
        this.Gamescore = Gamescore;

    }
    getSet(): number {
        return this.Set
    }

    getGamescore(): number {
        return this.Gamescore

    }
}