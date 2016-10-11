import {PlayerRepository} from './player-repository';
import {inject} from 'aurelia-framework';

@inject(PlayerRepository)
export class NewPlayerForm {

  newPlayerName: string;

  constructor(private repository: PlayerRepository) {}

  addPlayer() {
    if (this.newPlayerName) {
      this.repository.addPlayer(this.newPlayerName);
      this.newPlayerName = undefined;
    }
  }

}
