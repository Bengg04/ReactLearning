const { useState, useMemo } = React;

export function CurrencyConverter() {
  
  const currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleFromChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToChange = (e) => {
    setToCurrency(e.target.value);
  };

  const fromInBase = useMemo(() => {
    return amount / currency[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = fromInBase * currency[toCurrency];
  const currencyNames = Object.keys(currency);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
      />
      <select value={fromCurrency} onChange={handleFromChange}>
        {currencyNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <select value={toCurrency} onChange={handleToChange}>
        {currencyNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <p>
        {`${convertedAmount.toFixed(2)} ${toCurrency}`}
      </p>
    </div>
  );
}
