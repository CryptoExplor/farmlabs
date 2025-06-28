// whitelist.js

// Whitelist array (empty, since we're allowing all users)
window.WHITELISTED_ADDRESSES = [];

// Always return true for all addresses
window.isWalletWhitelisted = function (address) {
    return true; // All addresses are whitelisted
};
