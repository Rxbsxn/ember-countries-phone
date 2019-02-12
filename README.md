<p>
  <img src="https://github.com/Rxbsxn/ember-countries-phone/blob/master/ember-countries-phone.png" alt="Logo of Ember countries phone" width="20%">
</p>

## Ember Countries Phone
Use Ember countries phone to handle problems with getting countries dial codes and phone number validation.

## Installation
------------------------------------------------------------------------------

```
ember install ember-countries-phone
```

## Usage
------------------------------------------------------------------------------
### Basic invokation
For basic using you only have to pass `country` and `phoneNumber` as holders for user input.

```hbs
{{#ember-countries-phone country=country phoneNumber=phoneNumber as |ecp|}}
  {{ecp.countrySelect}}
  {{ecp.phoneInput}}
{{/ember-countries-phone}}
```

Then after submitting form by user, you can handle additional validation of phone number or just concat dial-code with phone number.

```js

  actions: {
    submit() {
      this.set('user.phoneNumber', this._preparePhoneNumber());
      // [..]
    }
    // [..]
  },

  _preparePhoneNumber() {
    // prepare phone number for user, concat or sth
  }
```

## Customization
------------------------------------------------------------------------------

You can easily customize each of component by adding certain properties

### countrySelect

Example

```hbs
{{epc.countrySelect classNames="custom-style" searchField="code"}}
```

```js
classNames // Use your own classes in component
searchField // Specify key which will be used to search through the list ("name" is default)
placeholder // Set placeholder text
selectedComponent // Specify your own component which will display selected option from the list
```

### phoneInput

Example

```hbs
{{epc.phoneInput phoneInputClass="custom-input" maxLength="10" }}
```

```js
classNames // Use your own classes in component
phoneInputClass // Set custom class for the input ("phoneInputClass" is default)
placeholder // Set placeholder text
minLength // Minimal length of phone number
maxLength // Maximal length of phone number
required // Check if phone number is required
```



### License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
