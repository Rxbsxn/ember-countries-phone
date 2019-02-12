import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  classNames: ['ember-countries-phone__phone-input'],

  minLength: "6",
  maxLength: "20",
  phoneInputClass: "phone-input",
  phoneInputId: "phoneInput",
  disabled: false,
  placeholder: 'Phone number',
  required: true
});
