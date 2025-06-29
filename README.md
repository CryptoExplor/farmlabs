![image](https://github.com/user-attachments/assets/2fd13661-710b-494e-abcb-2b2aea9e28bb)
# 🚜 FarmLabs: Interactive Transaction Farming Console

**Farm smarter, not harder — with FarmLabs.**

A lightweight, client-side app to simulate and automate blockchain transaction activity across EVM chains. Built for researchers, developers, and testnet farmers — with randomized behavior, contract support, analytics, and multi-wallet orchestration.

---

<p align="center">
  <a href="https://farmlabs.pages.dev"><img src="https://img.shields.io/badge/FarmLabs-pages.dev-00C897?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live Demo"></a>
  <a href="https://farmlabs.vercel.app"><img src="https://img.shields.io/badge/FarmLabs-vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"></a>
  <a href="https://cryptoexplor.github.io/farmlabs"><img src="https://img.shields.io/badge/FarmLabs-github.io-24292e?style=for-the-badge&logo=github&logoColor=white" alt="Live Demo"></a>
</p>

---

## ⚠️ Security Notice

> 🛑 **For testing & development only**
>
> - **Never** use real private keys or wallets with funds.  
> - Use only testnets like Goerli or Sepolia.  
> - App runs **entirely client-side** in your browser.  
> - You are responsible for your own security.

---

## ✨ Features

### 🧠 Intelligent Wallet Simulation
- Load multiple private keys
- Auto-balance check per key
- Wallet rotation & idle simulation
- Randomized delays + gas values

### 🌐 Multi-Chain Farming
- Works with any EVM-compatible chain
- Input custom RPCs & Chain IDs
- Configurable ETH ranges per tx
- Supports EIP-1559 & legacy gas

### 👥 Recipient Modes
- Dynamic pool: scan recent EOAs
- Fixed: set a target address
- Custom list: paste addresses
- CSV upload: your own list
- Self-interact: wallets talk to each other

### ⚖️ Action Matrix Engine
- Set action weights (e.g., Send: 60%, Idle: 30%, Contract: 10%)
- All actions randomized per loop

### 📊 Dashboard & Logs
- Live logs of txs per wallet
- Balance tracking per wallet
- Charts for actions & wallet activity
- Export CSV logs

### ⚙️ Smart Contract Tools
- Deploy a sample `Counter` contract
- Interact with `increment()`, `decrement()`, and `getCount()`

### 🤖 Gemini AI Assistant
- Get transaction risk analysis
- Gemini Flash 2.0 integration

---

## 🚀 Getting Started

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

| Setting                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| Max Actions per Session   | Total txs per wallet before cooldown or stop       |
| Delay Between Actions     | In seconds (min-max)                               |
| ETH Amount Range          | For each transfer                                  |
| Gas Price Multiplier      | Dynamic adjustment over base                       |
| Wallet Idle Chance (%)    | Chance to do nothing on a given loop               |
| Blocks to Scan            | For recent addresses (EOAs only)                   |
| Recipient Mode            | Dynamic, Fixed, CSV, Custom List, or Self-Interact |
| Action Probability Matrix | Must add up to 100%                                |

> Click **⚡ Test RPC Connections** to validate before starting.

### 📊 Live Demo Options

| Host             | Link                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| Cloudflare Pages | [farmlabs.pages.dev](https://farmlabs.pages.dev)                           |
| Vercel           | [farmlabs.vercel.app](https://farmlabs.vercel.app)                         |
| GitHub Pages     | [cryptoexplor.github.io/farmlabs](https://cryptoexplor.github.io/farmlabs) |


### 7. Start & Monitor

* Click **▶️ Start Farming** to begin.
* Watch logs and charts update in real time.
* Stop anytime with **⏹️ Stop Farming**.

### 8. Export or Reset

* **Download Logs** as CSV.
* Use **🗑️ Clear All Data** to reset the app.

---

## 🧰 Tech Stack

| Layer        | Technology               |
| ------------ | ------------------------ |
| UI           | HTML + Tailwind CSS      |
| Web3         | Ethers.js v6.7.0         |
| Charts       | Chart.js                 |
| AI Assistant | Gemini Flash 2 (via API) |
| QR Codes     | QRCode.js                |

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

**EVM Donation Address:**

```
0x1C46ccEA4D62d3eEC4DCE3501aa96d0Ff5FcA954
```

Thank you for supporting open-source innovation!
