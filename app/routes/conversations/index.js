import { get } from '@ember/object';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  redirect() {
    let { conversations } = this.modelFor('conversations');
    if (get(conversations, 'length') > 0) {
      this.transitionTo('conversations.conversation', get(conversations, 'firstObject'));
    }
  }
});
