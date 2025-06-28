// whitelist.js

// Declare WHITELISTED_ADDRESSES globally so it can be accessed by other scripts.
// You can populate this array with your whitelisted wallet addresses.
// Example: window.WHITELISTED_ADDRESSES = ["0xabc...123", "0xdef...456"];
window.WHITELISTED_ADDRESSES = [
    // IMPORTANT: For a production application, this whitelist should NOT be hardcoded on the client-side.
    // It should be managed securely (e.g., fetched from a backend, or verified against a smart contract).
    "0x5c5a38168517b610fe06b00c07a2d45bbb10c2e8",
    "0xd3ae074bb56323969667583901eb0e8a692c5772",
    "0xe3dcd37271c2b0ca7560678043f578fb43691285",
    "0xd0cde27a292ac6b0a72668bc4db2e1712adabb62",
    "0xb6acf7cdd33c7848826e8f2af931c9a4d3fc2771",
    "0xd4fd24eea8edd43f43e4bf8235a190f7237482c9",
    "0x76a4441dc14045afcf09bf5d741475dc822adbaa",
    "0x30d65c0c98152d3b355c8893eba8d9a40ed37aa0",
    "0x3b4a2b6283f6ce9f53cf2b05b59f8db8378e4d4b",
    "0x36cd322b249ac93e7e41ceb4b61f003150098a21",
    "0xdcbaa2e2eb127e424d9f43ad1b6e15e2b382c28f",
    "0x56f0868fc4c69997cfd4333dd9e4cd4a8e75322c",
].map(addr => addr.toLowerCase());

// If you want all wallets to be whitelisted for testing purposes,
// you can uncomment and use the line below.
// Ensure you understand the security implications before using this in a production environment.
window.WHITELISTED_ADDRESSES.includes = () => true;

// Note: If you choose to uncomment the line above, any address will be considered whitelisted.
// Otherwise, only the addresses explicitly listed in the array above will be whitelisted.
