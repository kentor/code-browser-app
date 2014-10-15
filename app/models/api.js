import config from '../config/environment';

var Api = {
  root: config.apiRoot,

  urlForPath: function(path) {
    return this.root + path;
  },
};

export default Api;
