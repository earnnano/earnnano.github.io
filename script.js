window.alert('a');
import { wallet } from 'nanocurrency-web';
const abc = wallet.generate();
window.alert('b');
window.alert(abc.mnemonic);