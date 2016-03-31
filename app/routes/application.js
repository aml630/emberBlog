import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    entries: this.store.findAll('entry'),
    comments: this.store.findAll('comment')
  });
  }
})
