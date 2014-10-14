import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['breadcrumbs'],

  trail: function() {
    var href = this.get('gitObject.href');

    if (!href) { return []; }

    var trail = href.replace(/\/$/, '').split('/').slice(3);

    trail.pop(); // drop the last object which is 'current'

    var accum = [];

    trail = trail.map(function(step) {
      accum.push(step);

      return {
        name: step,
        branchAndPath: accum.join('/'),
      };
    });

    return trail;
  }.property('gitObject.href'),

  current: function() {
    return this.get('gitObject.name');
  }.property('gitObject.name'),
});
