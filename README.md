# 🚀 FarmLabs: Web3 Automation Suite for Testing & Research

**Farm smarter, not harder — with FarmLabs. Built for developers, ready for the future.**

FarmLabs is a local-first, no-code, client-side automation suite for simulating EVM wallet behavior, testing RPC infrastructure, and researching user interaction patterns — all without writing code. Designed for developers, researchers, and advanced testers.

---

<p align="center">
  <a href="https://farmlabs.pages.dev"><img src="https://img.shields.io/badge/FarmLabs-pages.dev-00C897?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live Demo"></a>
  <a href="https://farmlabs.vercel.app"><img src="https://img.shields.io/badge/FarmLabs-vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"></a>
  <a href="https://cryptoexplor.github.io/farmlabs"><img src="https://img.shields.io/badge/FarmLabs-github.io-24292e?style=for-the-badge&logo=github&logoColor=white" alt="Live Demo"></a>
</p>

---

## ⚠️ Security Notice

> 🛑 **For testing & development purposes only**
>
> - Do **not** use wallets with mainnet funds.  
> - Use only on testnets (e.g., Sepolia, Base Sepolia, etc.).  
> - App runs **entirely in-browser** with no server or backend.  
> - You are fully responsible for wallet and key security.

---

## ✨ Features

### 🧠 Human-Like Wallet Simulation
- Load multiple testnet private keys
- Check balances, rotate wallets
- Persona-based delays and behavior (Night Owl, Gas Saver, etc.)
- Randomized gas, ETH amount, action matrix

### 🌐 Multi-Chain Support
- Connect to any EVM-compatible testnet
- Custom RPC/Chain ID support
- Fallback RPC rotation and dead-RPC detection

### 🎯 Recipient Control
- Dynamic: scan active addresses
- Fixed: target single recipient
- CSV Upload: paste your own list
- Self-Interaction: wallet-to-wallet txs

### ⚙️ Action Engine
- Adjustable action weights (send, idle, balance-check, etc.)
- Adjustable loop delay & behavior profiles
- Adjustable max TX/session per wallet

### 📊 Live Dashboard
- Real-time wallet logs and TX console
- Charts for action types and wallet balance changes
- Export logs (CSV)

### 🔍 Configurator (Coming Soon)
- No-code UI to build, save & apply custom profiles
- Drag-and-drop behavior templates

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/CryptoExplor/farmlabs.git
cd farmlabs
```

### 2. Open the App
- Launch `index.html` in any browser (Chrome, Brave, Firefox)

### 3. Connect or Load Wallets
- Paste private keys (testnet only!) or connect MetaMask

### 4. Configure Recipients & Delay Logic
- Select from multiple recipient modes
- Define stealth profile, delay, and gas behavior

### 5. Start Interaction
- Press ▶️ Start to begin cycles
- Logs and charts update in real time
- Stop anytime and download logs

---

## 🌍 Live Demos

| Host | Link |
|------|------|
| Cloudflare Pages | [farmlabs.pages.dev](https://farmlabs.pages.dev) |
| Vercel | [farmlabs.vercel.app](https://farmlabs.vercel.app) |
| GitHub Pages | [cryptoexplor.github.io/farmlabs](https://cryptoexplor.github.io/farmlabs) |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| UI | HTML + TailwindCSS |
| Web3 | Ethers.js v6.7.0 |
| Charts | Chart.js + Plotly |
| QR | QRCode.js |
| AI | Gemini Flash 2 (planned) |

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature-name`
3. Push changes: `git push origin feature-name`
4. Open a PR describing your contribution

Bug reports and suggestions are very welcome!

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT)

---

## ❤️ Support the Project

If you find FarmLabs useful, consider donating:

```txt
EVM: 0x1C46ccEA4D62d3eEC4DCE3501aa96d0Ff5FcA954
```

Thanks for supporting open-source innovation!
