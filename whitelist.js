// whitelist.js

// Optional: keep the array for structure or fallback
const WHITELISTED_ADDRESSES = [];

// Override includes to always return true
WHITELISTED_ADDRESSES.includes = () => true;
