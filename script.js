window.alert('a');
import { wallet } from '/node_modules/nanocurrency-web/dist/index.js';
const abc = wallet.generate();
window.alert('b');
window.alert(abc.mnemonic);