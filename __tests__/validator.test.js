const Validator=require('../utils/validator');

test('Validate if String has white space at beginning (true) ', ()=>{
  expect(Validator.hasWhiteSpace(' salah')).toBe(true);
});

test('Validate if String has white space in middle (true) ', ()=>{
  expect(Validator.hasWhiteSpace('sa aw')).toBe(true);
});

test('Validate if String has white space at end (true) ', ()=>{
  expect(Validator.hasWhiteSpace('salah ')).toBe(true);
});

test('Validate if String has white space (false) ', ()=>{
  expect(Validator.hasWhiteSpace('salah')).toBe(false);
});


test('Validate if String is Valid email (true) ', ()=>{
  expect(Validator.validEmailAddress('salah@aw.com')).toBe(true);
});

test('Validate if String without dot after @ is Valid email (false) ', ()=>{
  expect(Validator.validEmailAddress('salah@awcom')).toBe(false);
});

test('Validate if String without @ is Valid email (false) ', ()=>{
  expect(Validator.validEmailAddress('salah.com')).toBe(false);
});

test('Validate if String contains special character (true) ', ()=>{
  expect(Validator.hasSpecialCharacter('salah@shcom', ' ')).toBe(true);
});

test('Validate if String contains special character (false) ', ()=>{
  expect(Validator.hasSpecialCharacter('salahawcom', ' ')).toBe(false);
});

test('Validate if String contains special character and ignoring @ (true) ', ()=>{
  expect(Validator.hasSpecialCharacter('salah@awcom', ' ')).toBe(true);
});


test('Validate if String is a phone number (true) ', ()=>{
  expect(Validator.validPhoneNumber('12345678')).toBe(true);
});

test('Validate if String containing alphabet is a phone number (false) ', ()=>{
  expect(Validator.validPhoneNumber('761230W8')).toBe(false);
});

test('Validate if String is Full Name (true) ', ()=>{
  expect(Validator.validFullName('Salah Awad awad')).toBe(true);
});

test('Validate if String >250 is Full Name (false) ', ()=>{
  expect(Validator.validFullName('KV0MyfVk9PX7c6gg45OLCwPzCPll3dvdypn3w9VuyFqGHMlcVsb6TwbhNN6dOzNXeDN18LrZe7CB7cBXSWvE3iW96747J6ALJU2wsUFzK6K7djb17S0xp6hWVOW8D6D6vNkHfHG85KFkpSNhzns142nHLjLAxSyKl7mxxqZikWLRmUcovDn2wErSDOweeTc3lcFxhm0bnk7yVYKxODZnZSXI1hsTvwsi5nX8rbxecAPt3sswWf36T9nGrv2yKveE9H8O')).toBe(false);
});

