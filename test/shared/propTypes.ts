import type { Validator } from 'prop-types';

const hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;

export const isTime: Validator<string> = function isTime(props, propName, componentName) {
  const { [propName]: time } = props;

  if (time) {
    if (typeof time !== 'string' || !hourOptionalSecondsRegExp.test(time)) {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof time}\` supplied to \`${componentName}\`, expected time in HH:mm(:ss) format.`,
      );
    }
  }

  // Everything is fine
  return null;
};
