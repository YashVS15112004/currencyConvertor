import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const result = await res.json();
        setData(result[currency]);
        console.log(result[currency]); // Log after setting
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
      }
    };

    if (currency) fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
