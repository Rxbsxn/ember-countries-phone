import layout from './template';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['selected-country'],

  countryFlag: computed('option', function() {
    return `https://lipis.github.io/flag-icon-css/flags/4x3/${this.get('option.code').toLowerCase()}.svg`;
  })
});
