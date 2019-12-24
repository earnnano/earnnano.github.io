import { wallet } from '/node_modules/nanocurrency-web/dist/index.js';
const abc = wallet.generate();
window.alert(abc.mnemonic);