import {PlayerRepository} from './player-repository';
import {inject} from 'aurelia-framework';

@inject(PlayerRepository)
export class PlayerList {
  players;

  constructor(private repository: PlayerRepository) {
  }

  created() {
    this.players = this.repository.getAllPlayers();
  }
}
