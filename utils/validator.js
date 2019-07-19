
/**
 * Checks if string has at least one white space character
 * @param {string} str The string to validate.
 * @return {boolean} True if valid, False if invalid.
 */
function hasWhiteSpace(str) {
  return str.indexOf(' ') !== -1;
}

/**
   * Checks if inserted admin-username valid, ie. username consists of
   * @param {string} str The string to validate.
   * @return {boolean} True if valid, False if invalid.
   */
function validateUsername(str) {
  // eslint-disable-next-line no-useless-escape
  return (/^[a-zA-Z0-9-_\-\@\_]{6,9}$/.test(str) && !hasWhiteSpace(str));
}

/**
   * Checks if inserted string has a special character
   * @param {string} str The string to validate.
   * @param {string} ignore ignores specific characters.
   * @return {boolean} True if valid, False if invalid.
   */
function hasSpecialCharacter(str, ignore) {
  const specialChars ='!@#$%^&*()~+=`\'"/?\\|<>,.;:{}[]-_';
  const arrSpecialChar=specialChars.split('');
  for (let i=0; i<ignore.length; i++) {
    if (arrSpecialChar.indexOf(ignore[i])!=-1) {
      arrSpecialChar.splice(arrSpecialChar.indexOf(ignore[i]), 1);
    }
  }
  const specialRegex =new RegExp('[\\'+ arrSpecialChar.join('\\')+']');
  return specialRegex.test(str);
}

/**
   * Checks if inserted email is valid.
   * @param {string} email The string to validate.
   * @return {boolean} True if valid, False if invalid.
   */
function validEmailAddress(email) {
  // eslint-disable-next-line
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(email.toLowerCase());
}

/**
   * Checks if inserted password is valid.
   * @param {string} password The string to validate.
   * @return {boolean} True if valid, False if invalid.
   */
function validPassword(password) {
  return (/^(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$/.test(password) && password.trim().length > 6);
}

/**
   * Checks if inserted phone number is valid.
   * @param {string} phonenumber The string to validate.
   * @return {boolean} True if valid, False if invalid.
   */
function validPhoneNumber(phonenumber) {
  return (phonenumber && /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/.test(phonenumber) && phonenumber.length>6);
}

/**
   * Checks if inserted full name is valid.
   * @param {string} fullname The string to validate.
   * @return {boolean} True if valid, False if invalid.
   */
function validFullName(fullname) {
  return (/^[a-zA-Z_ ]+$/.test(fullname) && fullname.trim().length < 250);
}


module.exports = {
  hasWhiteSpace: hasWhiteSpace,
  validateUsername: validateUsername,
  validFullName: validFullName,
  validPhoneNumber: validPhoneNumber,
  hasSpecialCharacter: hasSpecialCharacter,
  validPassword: validPassword,
  validEmailAddress: validEmailAddress,
};

