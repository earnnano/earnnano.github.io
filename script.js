import { block } from 'nanocurrency-web'
import { wallet } from 'nanocurrency-web'

const walleta = wallet.generate();
console.log(walleta.privateKey);
function sendNano() {
    const privateKey = '781186FB9EF17DB6E3D1056550D9FAE5D5BBADA6A6BC370E4CBB938B1DC71DA3';
    const data = {
    // Current balance from wallet info
    walletBalanceRaw: '5618869000000000000000000000000',

    // Your wallet address
    fromAddress: 'nano_1e5aqegc1jb7qe964u4adzmcezyo6o146zb8hm6dft8tkp79za3sxwjym5rx',

    // The address to send to
    toAddress: 'nano_1q3hqecaw15cjt7thbtxu3pbzr1eihtzzpzxguoc37bj1wc5ffoh7w74gi6p',

    // From wallet info
    representativeAddress: 'nano_1stofnrxuz3cai7ze75o174bpm7scwj9jn3nxsn8ntzg784jf1gzn1jjdkou',

    // Previous block, from wallet info
    frontier: '92BA74A7D6DC7557F3EDA95ADC6341D51AC777A0A6FF0688A5C492AB2B2CB40D',

    // The amount to send in RAW
    amountRaw: '2000000000000000000000000000000',

    // Generate work on server-side or with a DPOW service
    work: 'fbffed7c73b61367',
}

// Returns a correctly formatted and signed block ready to be sent to the blockchain
const signedBlock = block.send(data, privateKey)
}