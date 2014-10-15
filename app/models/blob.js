import Ember from "ember";
import Api from "./api";
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
      url: Api.urlForPath('/api/blob/%@/%@'.fmt(branch, path)),
      dataType: 'json',
    });
  }
});

export default Blob;
