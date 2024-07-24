const validator = require("validator");
const passvalidator = require("password-validator");
const PasswordValidator = require("password-validator");
const res = validator.isEmail("mahipawar@gmail.com");
console.log(res);

let schema = new PasswordValidator();

schema;
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(16) // Maximum length 16
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 1 digit
  .has()
  .not()
  .spaces(); // Should not have spaces

  const checkvalidp=schema.validate("Mahi8888");
  console.log(checkvalidp);