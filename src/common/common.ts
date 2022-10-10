import { BooleanString } from '@src/constants/enum';

export const pageTransform = ({ value }) => {
  return Number(value) ? Number(value) - 1 : value;
};

export const stringBooleanTransform = ({ value }) => {
  if (value === BooleanString.True) return true;
  if (value === BooleanString.False) return false;
  return value;
};
