// whitelist.js

// IMPORTANT: For a production application, this whitelist should NOT be hardcoded on the client-side.
// It should be managed securely (e.g., fetched from a backend, or verified against a smart contract).
const WHITELISTED_ADDRESSES = [
    "0x70997970c51812dc3a010c7d01fd500000000000", // Placeholder 1
    "0x3c44cdddb6a900fa2b585dd299e03d12d42ce350", // Placeholder 2
    "0x59b670e9bc67342479ee42fe776df0e5d933e4b7", // Placeholder 3
    "0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db", // Placeholder 4
    // Add your whitelisted addresses here (all lowercase for consistent comparison)
].map(addr => addr.toLowerCase());
