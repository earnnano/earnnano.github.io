import { wallet } from '/nanocurrency-web';
const abc = wallet.generate();
window.alert(abc.mnemonic);