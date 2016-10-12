import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';

@inject(EventAggregator, Router)
export class NavBar {

  subscription;
  activeRoute = 'championship';

  constructor(private pubsub: EventAggregator, private router: Router) {}

  navigationSuccess(event) {
    this.activeRoute = event.instruction.config.name;
  }

  attached() {
    this.activeRoute = this.router.routes.find(r => r.navModel.isActive).name;

    this.subscription = this.pubsub.subscribe(
      'router:navigation:success',
      this.navigationSuccess.bind(this));
  }

  detached() {
    this.subscription.dispose();
  }

}
