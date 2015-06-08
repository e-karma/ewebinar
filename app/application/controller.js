import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: null,

  actions: {
    expand: function() {
        this.set('isExpanded', 'is-open');
    },
    contract: function() {
      this.set('isExpanded', '');
    }
  }
});
