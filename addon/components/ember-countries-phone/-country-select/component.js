import Component from '@ember/component';
import layout from './template';
import countries from '../../../utils/countries';

export default Component.extend({
  layout,

  classNames: ['ember-countries-phone__country-select'],

  searchField: 'name',
  countries: countries(),
  placeholder: 'Country',
  selectedComponent: 'ember-countries-phone/-country-select/-selected'
});
