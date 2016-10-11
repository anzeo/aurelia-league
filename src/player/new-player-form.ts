import {PlayerRepository} from './player-repository';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerAddedOrRemoved} from './player-messages'

@inject(PlayerRepository, EventAggregator)
export class NewPlayerForm {

  newPlayerName: string;

  constructor(private repository: PlayerRepository, private pubsub: EventAggregator) {
  }

  addPlayer() {
    if (this.newPlayerName) {
      this.repository.addPlayer(this.newPlayerName).then(() => {
        this.newPlayerName = undefined;
        this.pubsub.publish(new PlayerAddedOrRemoved());
      });
    }
  }

}
