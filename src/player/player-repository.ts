import * as localforage from 'localforage';

export class PlayerRepository {

  getAllPlayers(): Promise<any> {
    return localforage.getItem('players');
  }

  getNextPlayerId(players): number {
    return players
        .map(p => p.id)
        .reduce((max, cur) => Math.max(max, cur), -Infinity) + 1;
  }

  addPlayer(name: string): Promise<any> {
    return this.getAllPlayers()
      .then(players => players || [])
      .then(players => {
      players.push({
        id: this.getNextPlayerId(players),
        name: name
      });

      return localforage.setItem('players', players);
    })
  }

}
