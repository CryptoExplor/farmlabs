**Interactive Transaction Farming Console**

A client-side web application to simulate and automate blockchain transaction activity on Ethereum-compatible networks. This tool is ideal for testing, development, and research—mimicking human-like behavior through randomized transactions, delays, and multi-chain interactions.

---

## ⚠️ Security Notice

**For demonstration and testing only.**

* **Never** use private keys holding real assets—limit usage to test networks (e.g., Goerli, Sepolia).
* Client-side applications carry inherent risks—handle keys responsibly and at your own risk.

---

## Key Features

* **Wallet Management:** Load multiple Ethereum private keys directly in-browser.
* **Randomized Transactions:**

  * Send random ETH amounts within configurable ranges.
  * Compute gas fees dynamically (EIP-1559 or legacy) with adjustable multipliers.
  * Introduce random delays between transactions.
* **Multi-Chain Support:**

  * Rotate through user-defined RPC endpoints and chain IDs.
  * Diversify activity across networks.
* **Idle Simulation:** Assign a probability for wallets to skip actions, emulating realistic behavior.
* **Recipient Modes:**

  1. **Dynamic Pool:** Auto-scan recent EOAs on-chain, with fallback to loaded wallets.
  2. **Fixed Address:** Send all transactions to a single specified address.
  3. **Custom List:** Upload or paste your own list of addresses.
  4. **Predefined CSV:** Use provided CSVs or upload your own.
  5. **Self-Interaction:** Wallets transact with each other in the pool.
* **Action Probability Matrix:** Fine-tune the likelihood of “Send” vs. “Idle.”
* **Live Dashboard & Logging:**

  * Real-time console output of statuses, errors, and metrics.
  * Downloadable CSV logs for post-analysis.
  * Charts for balance and action distribution.
* **Basic Contract Tools:** Deploy and interact with a simple Counter contract (`getCount`, `increment`, `decrement`).
* **AI Assistant Integration:** Gemini-powered explanations of transaction rationale and risk.

---

## Installation & Usage

1. **Clone the Repo**

   ```bash
   git clone https://github.com/CryptoExplor/farmlabs.git
   cd farmlabs
   ```
2. **Open the App**

   * Open `index.html` in any modern web browser. No server or build steps required.
3. **MetaMask Integration**

   * Click **Connect Wallet** to link a browser wallet. Useful for chain detection and convenience.
4. **Load Wallets**

   * Go to **Wallets** → paste testnet private keys (one per line) → **Load Wallets & Check Balances**.
5. **Configure Recipients**

   * In **Recipient Settings**, choose one of the five modes (Dynamic, Fixed, Custom, CSV, Self-Interact).
6. **Adjust Parameters**

   * **Configuration** panel:

     * Max actions per session, idle chance (%), gas multiplier, scan depth, ETH amount range, delay range.
     * Define RPC endpoints & CSV URLs (e.g., `https://mainnet.infura.io/v3/YOUR_ID,1`).
     * Set action probabilities (must sum to 100%).
   * Click **⚡ Test RPC Connections** to validate endpoints.
7. **Start Farming**

   * Click **▶️ Start Farming** on the dashboard.
   * Monitor live charts and logs.
   * Click **⏹️ Stop Farming** to halt.
8. **Export & Reset**

   * Download CSV logs via **Download Logs**.
   * Use **🗑️ Clear All Data** to reset the app.

---

## Technologies

* **Frontend:** HTML, Tailwind CSS
* **Blockchain:** Ethers.js (v6.7.0)
* **Charts:** Chart.js
* **QR Codes:** QRCode.js
* **AI Integration:** Gemini API (`gemini-2.0-flash`)

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes and push: `git push origin feature-name`.
4. Open a Pull Request—describe your changes and run automated tests if available.

---

## License

This project is MIT licensed. See [LICENSE](LICENSE) for details.

---

## Support & Donations

If you find this tool valuable, consider supporting its development:

> **ETH Donation Address:** `0x1C46ccEA4D62d3eEC4DCE3501aa96d0Ff5FcA954`

Thank you for your support!
