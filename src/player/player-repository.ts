export class PlayerRepository {

  playerCache;

  getAllPlayers() {
    if (!this.playerCache) {
      this.playerCache = [
        {
          id: 1,
          name: 'John Foo'
        }
      ];
    }

    return this.playerCache;
  }

  getNextPlayerId(): number {
    return this.getAllPlayers()
      .map(p => p.id)
      .reduce((max, cur) => Math.max(max, cur)) + 1;
  }

  addPlayer(name: string) {
    var nextId = this.getNextPlayerId();

    this.playerCache.push({
      id: nextId,
      name: name
    });
  }

}
