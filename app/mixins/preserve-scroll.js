import Ember from "ember";

var scrollPositionTracker = Ember.Object.create({
  positionsByPath: {},

  updatePosition: function() {
    this.positionsByPath[window.location.pathname] = Ember.$(window).scrollTop();
  },

  restorePosition: function() {
    if (this.positionsByPath[window.location.pathname]) {
      Ember.$(window).scrollTop(this.positionsByPath[window.location.pathname]);
    } else {
      Ember.$(window).scrollTop(0);
    }
  },
});

Ember.$(window).on('scroll.preserve-scroll', function() {
  scrollPositionTracker.updatePosition();
});

export default Ember.Mixin.create({
  afterModel: function() {
    this._super.apply(this, arguments);
    scrollPositionTracker.restorePosition();
  }
});
