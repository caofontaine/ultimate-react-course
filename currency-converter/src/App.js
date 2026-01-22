import { useState, useEffect } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = "https://api.frankfurter.app/latest";

  const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    const controller = new AbortController();

    if (amount === 0) {
      setConvertedAmount("");
      return;
    }

    const fetchConversion = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${API_URL}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal },
        );
        const data = await res.json();

        setConvertedAmount(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching conversion data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (fromCurrency === toCurrency) return setConvertedAmount(amount);
    fetchConversion();

    return function () {
      controller.abort();
    };
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <input
        type="text"
        onChange={handleAmountChange}
        value={amount}
        disabled={isLoading}
      />
      <select
        onChange={handleFromCurrency}
        value={fromCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={handleToCurrency}
        value={toCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedAmount} {toCurrency}
      </p>
    </div>
  );
}
