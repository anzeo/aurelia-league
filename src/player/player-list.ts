import {PlayerRepository} from './player-repository';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerAddedOrRemoved} from './player-messages'

@inject(PlayerRepository, EventAggregator)
export class PlayerList {
  players;

  constructor(private repository: PlayerRepository, pubsub: EventAggregator) {
    pubsub.subscribe(PlayerAddedOrRemoved, () => this.created())
  }

  created() {
    this.repository.getAllPlayers().then(players => this.players = players);
  }
}
