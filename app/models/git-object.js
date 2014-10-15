import Ember from "ember";

var GitObject = Ember.Object.extend({
  branch: function() {
    return this.get('href').split('/')[3];
  }.property('href'),

  path: function() {
    return this.get('href').split('/').slice(4).join('/');
  }.property('href'),

  branchAndPath: function() {
    return '%@/%@'.fmt(this.get('branch'), this.get('path'));
  }.property('branch', 'path'),
});

export default GitObject;
