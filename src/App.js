import { useState, useEffect } from 'react';
import axios from 'axios';
import { getExchangeRates } from './utils/generalFunctions';

const TOKEN_URL = "https://test.nakitakisimiz.com/wapi/token";
const USER_NAME = "webapi@demosirketi"
const PASSWORD = "Magnimore123."
const EXCHANGE_RATE_URL = "https://test.nakitakisimiz.com/wapi/cmdtbl/dCompanyExchangeRate";

function App() {
const [token, setToken] = useState(null);
const [exchangeRates, setExchangeRates] = useState(null);

useEffect(() => {
  tokenHandler();
}, []);

async function tokenHandler() {
  // to get token
    const {data} = await axios.post(TOKEN_URL, {
      "grant_type": "password",
      "username": USER_NAME,
      "password": PASSWORD
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    setToken(data.access_token);
    // to get exchange rates
    getExchangeRates(data.access_token, EXCHANGE_RATE_URL, setExchangeRates);
}

  return (
    <div className="App">
      <h1>Token: {token}</h1>
    </div>
  );
}

export default App;
