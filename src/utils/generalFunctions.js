import axios from "axios";

export async function getExchangeRates(token, EXCHANGE_RATE_URL,setState) {
    // to get exchange rates
    const {data} = await axios.get(EXCHANGE_RATE_URL, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    setState(data);
  }

