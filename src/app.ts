import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Rocket Laegue';
    config.map([
      {route: '', moduleId: 'championship/championship', name: 'championship'},
      {route: 'players', moduleId: 'player/player-list', name: 'players'}
    ]);

    this.router = router;
  }
}
