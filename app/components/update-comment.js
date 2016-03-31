import Ember from 'ember';

export default Ember.Component.extend({
  updateComment: false,
  actions: {
    updateCommentForm() {
      this.set('updateComment', true);
    },
    update(comment) {
      var params = {
        text: this.get('text'),
        // entry: this.get('entry')
      };
      console.log(params);
      this.set('updateComment', false);
      this.sendAction('update', comment, params);
    }
  }
});
