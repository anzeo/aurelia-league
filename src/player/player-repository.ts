import * as localforage from 'localforage';

export class PlayerRepository {

  getAllPlayers(): Promise<any> {
    return localforage.getItem('players');
  }

  getNextPlayerId(players): number {
    return players
        .map(p => p.id)
        .reduce((max, cur) => Math.max(max, cur), 0) + 1;
  }

  addPlayer(name: string): Promise<any> {
    return this.getAllPlayers()
      .then(players => players || [])
      .then(players => players.concat([{
          id: this.getNextPlayerId(players),
          name: name
        }])
      )
      .then(savePlayers)
  }

  removePlayer(playerId: number): Promise<any> {
    return this.getAllPlayers()
      .then(players => players.filter(p => p.id !== playerId))
      .then(savePlayers)
  }
}

function savePlayers(players): Promise<any> {
  return localforage.setItem('players', players);
}


