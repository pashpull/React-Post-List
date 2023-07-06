// переводит первый символ в верхний регистр
const stringPreparing = (string: string): string => {
  const preparedString = string[0].toUpperCase() + string.slice(1);
  return preparedString;
};

export default stringPreparing;
