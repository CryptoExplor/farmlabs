// whitelist.js

// Example: Add whitelisted wallet addresses here
window.WHITELISTED_ADDRESSES = [
    // "0xabc...123",
    // "0xdef...456",
].map(addr => addr.toLowerCase());

// Flag for testing - allows all addresses to be whitelisted
window.ALLOW_ALL_WALLETS = true;

/**
 * Check if wallet is whitelisted
 * @param {string} walletAddress
 * @returns {boolean}
 */
window.isWalletWhitelisted = function(walletAddress) {
    if (window.ALLOW_ALL_WALLETS) return true;
    return window.WHITELISTED_ADDRESSES.includes(walletAddress.toLowerCase());
};
