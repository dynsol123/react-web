import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

type ValidatorModel = {
  min?: number;
  max?: number;
  email?: boolean;
  phone?: boolean;
  required?: boolean;
};

export const valdiate = (
  value = "",
  name: string,
  { email, max, min, required, phone }: ValidatorModel
) => {
  if (required) {
    if (isEmpty(value)) {
      return `${name} is required!`;
    }
  }
  if (phone) {
    if (!isMobilePhone(value)) {
      return `${name} is not valid`;
    }
  }
  if (email) {
    if (!isEmail(value)) {
      return `${name} is not valid`;
    }
  }
  if (max) {
    if (value.length > max) {
      return `Max length  is ${max} characters`;
    }
  }
  if (min) {
    if (value.length < min) {
      return `Invalid ${name}, needs to be more than ${min} characters`;
    }
  }
  return undefined;
};
