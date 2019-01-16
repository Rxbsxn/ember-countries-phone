import Component from '@ember/component';
import layout from './template';
import { not } from '@ember/object/computed';

const isNumberChar = /^\d$/;

export default Component.extend({
  layout,

  country: null,
  phoneNumber: null,

  disablePhoneInput: not('country'),

  actions: {
    phoneInputValidation(event) {
      const pressedKey = event.key;

      if (!isNumberChar.test(pressedKey)) {
        event.preventDefault();
        return false;
      }
    },

    addDialCodeToPhoneNumber() {
      this.set('phoneInformation', {
        dialCode: this.country.dialCode,
        phoneNumber: this.phoneNumber
      });
      const { dialCode, phoneNumber } = this.phoneInformation;
      alert(`DIALCODE: ${dialCode}, PHONENUMBER: ${phoneNumber}`)
      if (this.action) {
        this.action(this.phoneInformation);
      }
    }
  }
});
