import { isNil } from "lodash";

export const hasValue = value => {
  return !isNil(value);
};
