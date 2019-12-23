import { block } from './nanocurrency-web'
import { wallet } from './nanocurrency-web'
import { converter } from './nanocurrency-web'

const walletmain = wallet.fromMnemonic('buffalo join taste history model thank arena empower present gadget hat print scheme eager you convince vote grain fever network scout limit rain odor');
window.alert('yeet');
window.alert(wallet.privateKey);
function sendNano() {
    const privateKey = walletmain.privateKey;
    const data = {
    // Current balance from wallet info
    walletBalanceRaw: walletmain.walletBalanceRaw,

    // Your wallet address
    fromAddress: 'nano_1qk8anxfrnu38yz6pc4mmwxrccg5ij4qfj7xtif3xjryw1rmeedsdi54qp58',

    // The address to send to
    toAddress: 'nano_1w6fdcoikpirkt6q71wpnkqk4b6torrttgs7m6y1pdk4aqemg7kmgr3f4qkh',

    // From wallet info
    representativeAddress: walletmain.representativeAddress,

    // Previous block, from wallet info
    frontier: walletmain.frontier,

    // The amount to send in RAW
    amountRaw: converter.convert(0.01, 'NANO', 'RAW'),

    // Generate work on server-side or with a DPOW service
    work: 'fbffed7c73b61367', 
}

// Returns a correctly formatted and signed block ready to be sent to the blockchain
const signedBlock = block.send(data, privateKey)
}