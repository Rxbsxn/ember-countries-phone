import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  classNames: ['phone-number-input'],

  minLength: "6",
  maxLength: "20",
  phoneInputClass: "form-control",
  phoneInputId: "inputPhone",
  disabled: false,
  placeholder: 'Phone number',
  required: true
});
