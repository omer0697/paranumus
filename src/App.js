import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setExchangeRates } from './stores/reducers';
import Navbar from './components/Navbar';
import CurrencyCalculatorCard from './components/CurrencyCalculatorCard';

const TOKEN_URL = 'https://test.nakitakisimiz.com/wapi/token';
const USER_NAME = 'webapi@demosirketi';
const PASSWORD = 'Magnimore123.';
const EXCHANGE_RATE_URL = 'https://test.nakitakisimiz.com/wapi/cmdtbl/dCompanyExchangeRate';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.app.token);
  const exchangeRates = useSelector((state) => state.app.exchangeRates);

  console.log('token:', token, 'exchangeRates:', exchangeRates);

  useEffect(() => {
    tokenHandler();
  }, []);

  async function tokenHandler() {
    try {
      const { data } = await axios.post(
        TOKEN_URL,
        {
          grant_type: 'password',
          username: USER_NAME,
          password: PASSWORD,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      dispatch(setToken(data.access_token));
      getExchangeRates(data.access_token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  }

  async function getExchangeRates(token) {
    try {
      const { data } = await axios.get(EXCHANGE_RATE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setExchangeRates(data));
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <CurrencyCalculatorCard />
    </div>
  );
};

export default App;

