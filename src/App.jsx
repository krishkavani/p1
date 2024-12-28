import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox'; // Adjust based on how you export
import usecu from './hook/usecu';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = usecu(from);
  const options = Object.keys(currencyInfo); // Corrected typo

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl bg-orange-500 p-4">Kem cho surt</h1>

      {/* From Currency Input */}
      <InputBox
        label="From Amount"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        currencyOptions={options}
        selectCurrency={from}
      />

      {/* To Currency Input */}
      <InputBox
        label="To Amount"
        amount={convertedAmount}
        amountDisable={true}
        onCurrencyChange={setTo}
        currencyOptions={options}
        selectCurrency={to}
      />

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={swap}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Swap
        </button>
        <button
          onClick={convert}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
