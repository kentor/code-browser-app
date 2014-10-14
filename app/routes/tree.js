import Ember from "ember";
import Tree from "../models/tree";

export default Ember.Route.extend({
  model: function(params) {
    var branchAndPath = params.branchAndPath.split('/'),
        branch = branchAndPath[0],
        path = branchAndPath.slice(1).join('/');

    return Tree.fetch(path, branch).then(function(response) {
      return Tree.create(response);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    if (Ember.isNone(model.get('files'))) {
      Tree.fetch(model.get('path'), model.get('branch')).then(function(response) {
        controller.set('model', Tree.create(response));
      });
    }
  },

  serialize: function(model) {
    return { branchAndPath: '%@/%@'.fmt(model.get('branch'), model.get('path')) };
  },
});
