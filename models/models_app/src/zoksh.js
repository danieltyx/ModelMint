
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


const rampUrl = 'https://pay.sandbox.zoksh.com/ramps';
// REQUIRED api key available in your merchant dashboard
const apiKey = '647504c2d2be1cb9419b6f4f';

const cryptos = ['ETH','BTC','OKX'];
const networks = ['ethereum', 'bitcoin','okexchain'];
const wallets = {
    ethereum: '0x425d06f5218f19b51fB3415FbAAa00CCCAB61cEf',
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf****************'
}
const name = 'Demo user';
const email = 'demo@demo.com';

const { window } = new JSDOM();
global.window = window;

const urlToOpen = new URL(rampUrl);
const params = new URLSearchParams();
// REQUIRED
params.append('apiKey', apiKey);

// OPTIONAL
params.append('cryptos', encodeURIComponent(cryptos.join(',')));
params.append('networks', encodeURIComponent(networks.join(',')));
params.append('wallets', encodeURIComponent(JSON.stringify(wallets)));
params.append('prefill_name', encodeURIComponent(name));
params.append('prefill_email', encodeURIComponent(email));

const url = `${urlToOpen}?${params.toString()}`;
// REDIRECT user to url
console.log(url);
window.location.href = url;