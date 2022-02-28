export default class Team {
  constructor() {
    this.members = new Set();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.members.size; i++) {
      yield this.toArray()[i];
    }
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`character ${character?.name}[${character.type}] is already in the team`);
    }
    this.members.add(character);
  }

  addAll(...args) {
    args.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }
}
