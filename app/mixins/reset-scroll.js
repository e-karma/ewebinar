import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
  Ember.$("html").velocity("scroll", { offset:0, duration:500 });
}
});
