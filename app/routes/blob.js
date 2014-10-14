import Ember from "ember";
import Blob from "../models/blob";

export default Ember.Route.extend({
  model: function(params) {
    return Blob.fetch(params.path, params.branch).then(function(response) {
      return Blob.create(response);
    });
  },

  setupController: function(controller, model) {
    if (Ember.isNone(model.get('content'))) {
      Blob.fetch(model.get('path'), model.get('branch')).then(function(response) {
        model.set('content', response.content);
      });
    }

    controller.set('model', model);
  },
});
