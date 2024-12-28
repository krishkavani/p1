import { useEffect, useState } from "react";

function usecu(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currency data.");
        }

        const result = await response.json();
        setData(result[currency]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  // Return both data and error to the caller
  return { data, error };
}

export default usecu;
