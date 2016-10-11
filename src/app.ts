import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      {route: 'championship', moduleId: 'championship/championship', title: 'Championship'},
      {route: '', moduleId: 'player/player-list', name: 'Players'}
    ]);

    this.router = router;
  }
}
