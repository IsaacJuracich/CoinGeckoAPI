const request = require('request');
const url = 'https://api.coingecko.com/api/v3/';
let options = {};

class CoinGecko {
  constructor(options) {
    this.options = options;
  }

  /** Basic Ping Request */
  async ping() {
    return new Promise(async (resolve, reject) => {
      request.get(url + '/ping', async (error, response, body) => {
        if (error) return resolve(error);
        return resolve(options.returnParsed ? JSON.parse(body) : body);
      });
    });
  }

  /** Get a price for coin and return a specific currency */
  async price(coin, currency) {
    return new Promise(async (resolve, reject) => {
      request.get(
        url + '/simple/price?ids=' + coin + '&vs_currencies=' + currency
      ),
        async (error, response, body) => {
          if (error) return resolve(error);
          return resolve(options.returnParsed ? JSON.parse(body) : body);
        };
    });
  }
}
module.exports = exports = CoinGecko;
