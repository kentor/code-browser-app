import Ember from "ember";
import Tree from "../models/tree";
import PreserveScroll from "../mixins/preserve-scroll";

export default Ember.Route.extend(PreserveScroll, {
  model: function(params) {
    var branchAndPath = params.branchAndPath.split('/'),
        branch = branchAndPath[0],
        path = branchAndPath.slice(1).join('/');

    return Tree.fetch(path, branch);
  },
});
