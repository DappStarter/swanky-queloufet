require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name reward stereo pulse hunt private off truck'; 
let testAccounts = [
"0xea6aac0f00bc004c685e445e43954cb3db8b80df898b987320aaeacd5d61ed56",
"0x4cb252a0d6bdc4d79cb6b19fb7265c3231a29e9c68e6897f5db900c957503c44",
"0xbece41048b8a7e5263b1b315ae50183a8eecf72ea237d390ddd24b5209abc8e1",
"0x4d57e3e0c1eec809ed0134317d162562889d23930e00498bed53a7df21b3bd52",
"0xa727941c796c4ea76a5af34203213250b295542aa13c3bf5cba2c462d980ec47",
"0xc496c834581351af5fe2160e58c961b3d00af375989f558189753290c8fd6fd1",
"0x557dde98edb0150a618cd74a6027f1808afe65e12c2621d5c4406d193b7d8435",
"0xda5769f95184561979e1781680ec1d9851dde1b5f216d59f08a368faf4b036b0",
"0x772663f61b6fabf2d5b75aa77961853194be8b8f6c9186d14d6b36fba867bb3a",
"0x9b43c5506c48bf92b1a4e35bbcf6d0b3edca590bb1441edcd9062b968f9dd14f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

