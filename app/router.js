import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blob', { path: '/blob/*branchAndPath' });
  this.route('tree', { path: '/tree/*branchAndPath' });
});

export default Router;
