import Ember from "ember";
import GitObject from "./git-object";

var Blob = GitObject.extend({
  icon: 'fa-file-text-o',

  body: function() {
    return this.get('content');
  }.property('content'),
});

Blob.reopenClass({
  fetch: function(path, branch) {
    if (Ember.isNone(branch)) {
      branch = 'master';
    }

    return Ember.$.ajax({
      url: 'http://localhost:4567/api/blob/%@/%@'.fmt(branch, path),
      dataType: 'json',
    });
  }
});

export default Blob;
