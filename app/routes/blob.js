import Ember from "ember";
import Blob from "../models/blob";
import PreserveScroll from "../mixins/preserve-scroll";

export default Ember.Route.extend(PreserveScroll, {
  model: function(params) {
    var branchAndPath = params.branchAndPath.split('/'),
        branch = branchAndPath[0],
        path = branchAndPath.slice(1).join('/');

    return Blob.fetch(path, branch).then(function(response) {
      return Blob.create(response);
    });
  },
});
