import Ember from "ember";

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('tree', Ember.Object.create({ branch: 'master' }));
  }
});
