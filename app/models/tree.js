import Ember from "ember";
import GitObject from "./git-object";
import Blob from "./blob";

var Tree;

// putting GitObjectFactory here instead of its own file because of
// circular dependency issues. Tree has a dependency on GitObjectFactory
// which has a dependency on tree;
var GitObjectFactory = Ember.Object.create({
  makeGitObject: function(gitObjectJSON) {
    var klass;

    switch (gitObjectJSON.type) {
      case 'blob':
        klass = Blob;
        break;
      case 'tree':
        klass = Tree;
        break;
      default:
        klass = GitObject;
    }

    return klass.create(gitObjectJSON);
  },
});

Tree = GitObject.extend({
  filesAsObjects: function() {
    var files = this.get('files');
    if (Ember.isArray(files)) {
      return files.map(function(file) {
        return GitObjectFactory.makeGitObject(file);
      });
    } else {
      return [];
    }
  }.property('files.@each'),
});

Tree.reopenClass({
  fetch: function(path, branch) {
    if (Ember.isNone(branch)) {
      branch = 'master';
    }

    return Ember.$.ajax({
      url: 'http://localhost:4567/api/tree/%@/%@'.fmt(branch, path),
      dataType: 'json',
    });
  },
});

export default Tree;