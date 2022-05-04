(async () => {
  const CoinGecko = require('../index.js');
  const Client = new CoinGecko({
    returnParsed: true,
  });
  const ping = await Client.ping();
  console.log(ping);
  const price = await Client.price();
  console.log(price);
})();
