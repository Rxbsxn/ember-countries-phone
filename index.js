'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    const app = this._findHost();
    app.import('vendor/ember-countries-phone.css');
  }
};
