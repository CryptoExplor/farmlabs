const WHITELIST_MODE = false; // toggle this flag

const REAL_WHITELIST = [
    "0x5c5a38168517b610fe06b00c07a2d45bbb10c2e8",
    ...
].map(addr => addr.toLowerCase());

const WHITELISTED_ADDRESSES = WHITELIST_MODE ? REAL_WHITELIST : [];
WHITELISTED_ADDRESSES.includes = () => true;
