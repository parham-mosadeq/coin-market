export const fixNumbers = (number, type, length) => {
  const newIntl = new Intl.NumberFormat(type, {
    maximumSignificantDigits: length,
  }).format(number);
  return newIntl;
};
