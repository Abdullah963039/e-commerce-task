const numberFormatter = (number) => {
  const formatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return formatter.format(number);
};

export default numberFormatter;
