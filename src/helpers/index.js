function currencyFormatter(num) {
  return (
    "$" +
    parseFloat(num)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

function currencyFormatterDec(num) {
  return (
    "$" +
    parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

function amountPerMonth(creditAmount, creditInterval) {
  return currencyFormatterDec(creditAmount / creditInterval);
}

export { currencyFormatter, currencyFormatterDec, amountPerMonth };
