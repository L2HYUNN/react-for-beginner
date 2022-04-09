import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .then(() => setSelectedCoin(coins[0].quotes.USD.price));
  }, []);

  const onChangeInputNumber = (e) => {
    setInputNumber(e.target.value);
  };

  const onChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  return (
    <div>
      <h1>The Conins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <select onChange={onChange} value={selectedCoin}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${Math.floor(coin.quotes.USD.price)}{" "}
              USD
            </option>
          ))}
        </select>
      )}

      <input
        onChange={onChangeInputNumber}
        type="number"
        placeholder="What do you change?"
      ></input>
      <input
        type="number"
        placeholder="Result"
        disabled
        value={inputNumber * selectedCoin}
      ></input>
    </div>
  );
}

export default App;
