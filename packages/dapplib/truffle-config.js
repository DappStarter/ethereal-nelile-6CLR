require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember smile hockey enter bone gentle'; 
let testAccounts = [
"0x01798d84c1e5bbc63cf05e899eccba5f53e3ec040f213239f5d203ec4623b8e7",
"0xfc7cc7533f1c6ba7fc357d5f840b7175e949c948e1162e2a883f2327455c4729",
"0x93c96cb8ca922ef1e561fe7602db48ea7765ff35a1b6aeb9edc4960cd095a0a7",
"0x3bcd0c5755437b47491d62083a32e9ef2afc807f03f683006cb1260368bfe761",
"0xa7ba87f1374ada065b48e65d894d7af060c577dfa65c644e98abd62cead2b5e4",
"0x328669eccebb8d52276b520fb8651ddf7e0fda3dc65c208c6f7e8de89518cf5b",
"0xe2e5446545af53bde76aaaad80febd52069ac9638afc5acc47adeed845a15e8d",
"0x34e729d0ca8fe3ef28371f28591c839a323a432c32b9780feffb279fb8181853",
"0x18d2d4646c985402903f06ac81b4a06f6c67c99b1a24554944ddca75fa756a87",
"0x6177d203e0031d13daf5f41ba788c3a570182dcab374299f34f7e5d756967b63"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


