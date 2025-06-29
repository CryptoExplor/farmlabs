# 🚜 FarmLabs: Interactive Transaction Farming Console

**Farm smarter, not harder — with FarmLabs.**

A lightweight, client-side application to simulate and automate blockchain transaction activity across Ethereum-compatible networks. Ideal for testing, development, and research, it mimics human-like behavior using randomized transactions, delays, and multi-chain interactions.

---

## ⚠️ Security Notice

**For testing and demonstration purposes only.**

* **Never** use private keys containing real assets.
* Only use test networks like Goerli, Sepolia, etc.
* This is a client-side tool. Exercise caution when handling private keys.

---

## 🚀 Features at a Glance

### 🔐 Wallet Management

* Load multiple Ethereum private keys directly in-browser.

### 🌐 Multi-Chain & Randomized Activity

* **Random Amount Transfers:** Configurable ETH ranges per transaction.
* **Gas Randomization:** Dynamic EIP-1559 and legacy gas settings.
* **Random Delays:** Human-like pauses between actions.
* **Wallet & Chain Rotation:** Randomly selects from your configured pool.
* **Idle Simulation:** Simulate inactivity to mimic organic behavior.

### 👥 Recipient Modes

1. **Dynamic Pool:** Scans recent EOAs; falls back to loaded wallets.
2. **Fixed Address:** All transactions go to a specified address.
3. **Custom List:** Upload or paste a list of addresses.
4. **Predefined CSV:** Use bundled or custom-uploaded CSVs.
5. **Self-Interact:** Wallets send to each other.

### ⚖️ Action Probability Matrix

* Set weighted chances for actions like "Send" and "Idle."

### 📊 Dashboard, Logs & Analytics

* Real-time logs and activity metrics.
* Export transaction logs to CSV.
* Visualize balance and action distribution via charts.

### ⚙️ Smart Contract Tools

* Deploy a basic Counter contract.
* Interact with `getCount`, `increment`, and `decrement`.

### 🧠 Gemini AI Assistant

* Understand risks and get explanations for each transaction action.

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CryptoExplor/farmlabs.git
cd farmlabs
```

### 2. Open the App

* Launch `index.html` in any modern browser.

### 3. Connect MetaMask

* Click **Connect Wallet** to enable browser wallet integration.

### 4. Load Wallets

* Go to **Wallets** → Paste testnet private keys (one per line) → Click **Load Wallets & Check Balances**.

### 5. Configure Recipients

* Choose from: Dynamic Pool, Fixed Address, Custom List, CSV Upload, or Self-Interact.

### 6. Set Parameters

* Max Actions per Session
* Wallet Idle Chance (%)
* Max Gas Price Multiplier
* Blocks to Scan for Addresses
* ETH Amount Range per Tx
* Delay Between Actions (seconds)
* RPC Endpoints & Chain IDs
* Action Probability Matrix (should sum to 100%)

> Click **⚡ Test RPC Connections** to validate before starting.

### 7. Start & Monitor

* Click **▶️ Start Farming** to begin.
* Watch logs and charts update in real time.
* Stop anytime with **⏹️ Stop Farming**.

### 8. Export or Reset

* **Download Logs** as CSV.
* Use **🗑️ Clear All Data** to reset the app.

---

## 🧰 Tech Stack

* **Frontend:** HTML + Tailwind CSS
* **Blockchain Interaction:** Ethers.js (v6.7.0)
* **Charts:** Chart.js
* **QR Generation:** QRCode.js
* **AI Integration:** Gemini API via `gemini-2.0-flash`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit and push changes: `git push origin feature-name`
4. Open a Pull Request with details of your updates

Bug reports, feature suggestions, and improvements are always welcome!

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## ❤️ Support & Donations

If this tool helps you, consider supporting its future development:

**ETH Donation Address:**

```
0x1C46ccEA4D62d3eEC4DCE3501aa96d0Ff5FcA954
```

Thank you for supporting open-source innovation!
