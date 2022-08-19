function currencyFormatter(num) {
  return (
    "$" +
    parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

function amountPerMonth(creditAmount, creditInterval) {
  return currencyFormatter(creditAmount * creditInterval);
}

export { currencyFormatter, amountPerMonth };
