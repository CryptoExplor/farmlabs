// whitelist.js

// Empty whitelist array (can be filled later if needed)
window.WHITELISTED_ADDRESSES = [].map(addr => addr.toLowerCase());

// Set this flag to true to allow all users (whitelist bypass mode)
window.ALLOW_ALL_USERS = true;

/**
 * Call this function to check if a wallet is allowed.
 * If ALLOW_ALL_USERS is true, all addresses are allowed.
 * Otherwise, only those in the whitelist are allowed.
 * 
 * @param {string} address - Wallet address to check
 * @returns {boolean}
 */
window.isWalletWhitelisted = function(address) {
    if (window.ALLOW_ALL_USERS) return true;
    return window.WHITELISTED_ADDRESSES.includes(address.toLowerCase());
};
