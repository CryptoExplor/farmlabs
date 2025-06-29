# farmlabs
Interactive Script Console: Transaction Farming
This project provides a client-side web application designed to simulate and automate blockchain transaction activities for various purposes, primarily focused on "transaction farming" on Ethereum-compatible networks. It allows users to configure and execute a series of random transactions, delays, and chain interactions using loaded private keys.

⚠️ IMPORTANT SECURITY WARNING:
This application is for demonstration and testing purposes only. It involves handling private keys. NEVER use mainnet private keys holding real assets with this tool. Always use test keys on test networks (like Goerli, Sepolia, etc.) to prevent any loss of funds.

Features
Wallet Management: Load multiple Ethereum private keys directly into the browser to manage a pool of sending wallets.

Randomized Transactions:

Random Amount Transfers: Send random amounts of native currency (ETH) within a configurable minimum and maximum range.

Random Gas Payments: Transactions utilize dynamically calculated and randomized maxFeePerGas and maxPriorityFeePerGas (or gasPrice for legacy chains) based on current network conditions and a user-defined "Max Gas Price Multiplier".

Randomized Delays: Introduce random pauses between actions to simulate more human-like activity.

Random Wallet Selection: The script intelligently selects a random wallet from your loaded pool for each session.

Random Chain Transactions: Each wallet session will randomly select one of your configured RPC endpoints and chain IDs, allowing for diversified activity across multiple networks.

Idle Wallet Sessions: Configure a chance for a wallet to be "idle" during its session, skipping all actions to further simulate organic behavior.

Flexible Recipient Modes:

Dynamically Scanned Pool: Automatically discovers and uses Externally Owned Accounts (EOAs - regular wallets, not contracts) from recent blockchain history as recipients. Includes a fallback to loaded wallets if the pool is empty for a given chain.

Fixed Address: Send all transactions to a single, specified recipient address.

Custom List: Upload a custom list of recipient addresses (one per line).

Predefined List: Use addresses from provided external CSV files or upload your own.

Self-Interact: Configure wallets to send transactions to each other within your loaded pool.

Action Probability Matrix: Define the probability distribution for different actions (currently "Send" and "Idle Action").

Live Logging: Real-time console output displaying transaction statuses, errors, and activity details.

Log Export: Download a complete transaction log in CSV format for analysis.

Dashboard & Charts: Visualize wallet balances and action distribution in real-time.

Basic Contract Tools: Deploy a simple Counter smart contract and interact with its getCount, increment, and decrement functions directly from the UI.

Gemini AI Integration: Use an integrated AI assistant to explain transaction purposes and risks.

How to Use
Clone the Repository:

git clone https://github.com/your-username/transaction-farming-console.git
cd transaction-farming-console

(Replace your-username/transaction-farming-console.git with the actual repository URL once uploaded to GitHub).

Open in Browser:
Open the code-4.html file in your web browser. This is a client-side application, so no server setup is required.

Connect Wallet (Optional, for MetaMask integration):
Click the "Connect Wallet" button to link your MetaMask or compatible browser wallet. While the script operates with loaded private keys, connecting your wallet can help with initial chain ID detection and general browser wallet interaction.

Load Wallets:
Navigate to the "Wallets" section. Paste your testnet private keys (one per line) into the provided textarea. Click "Load Wallets & Check Balances" to populate the application with your source wallets.

Configure Recipient Settings:
In the "Recipient Settings" section, choose your preferred method for selecting transaction recipients:

Use Dynamically Scanned Pool (Recommended for randomness): The script will automatically find valid EOA addresses from recent blockchain activity.

Use Fixed Address: Enter a single destination address.

Use Custom List: Paste addresses into the textarea.

Use Predefined List: Download one of the provided CSV links or upload your own.

Use Loaded Wallets to Interact with Each Other: Your loaded wallets will send transactions to other wallets in the same pool.

Configure Parameters:
Go to the "Configuration" section and adjust settings like:

Max Actions Per Wallet Session: Number of actions each wallet performs per chain session.

Wallet Idle Chance (%): Probability of a wallet being idle.

Max Gas Price Multiplier: Upper limit for randomized gas prices relative to current network gas.

Blocks to Scan for Addresses: For dynamic pool mode.

Transaction Amount Range (ETH): Min and max ETH to send per transaction.

Delay Between Actions (seconds): Min and max pause between transactions.

RPC Endpoints & Chain IDs: Provide a comma-separated list of RPC URL and Chain ID (e.g., https://mainnet.infura.io/v3/YOUR_PROJECT_ID,1). The script will randomly pick from these. Ensure YOUR_PROJECT_ID is replaced with your actual Infura/Alchemy project ID if using those services.

Action Probability Matrix: Set percentages for "Send" and "Idle Action" (must sum to 100%).

Test RPC Connections:
Click "⚡ Test RPC Connections" in the Configuration section to verify your RPC endpoints are working correctly.

Start Farming:
Once configured, click "▶️ Start Farming" on the Dashboard. The script will begin executing transactions according to your settings.

Monitor & Stop:
Monitor live status, charts, and the log in the "Dashboard" and "Live Log" sections. Click "⏹️ Stop Farming" at any time to halt the process.

Clear Data:
Use "🗑️ Clear All Data" to reset all loaded keys, configurations, and logs.

Important Security Notice
DO NOT use this application with mainnet private keys or wallets containing real assets. This is a client-side application. While efforts have been made to secure it, client-side code is inherently vulnerable, and pasting private keys directly into a web interface always carries significant risk. This tool is provided for educational and testing purposes on test networks only. The developer is not responsible for any loss of funds incurred due to misuse of this tool.

Technologies Used
HTML & Tailwind CSS: For the responsive and modern user interface.

Ethers.js (v6.7.0): JavaScript library for interacting with the Ethereum blockchain.

Chart.js: For visualizing wallet balances and action distribution.

QRCode.js: For generating QR codes for the donation address.

Gemini API (via gemini-2.0-flash): Used for generating explanations via the "Explain Send Tx" button.

Contributing
Contributions are welcome! If you find bugs, have feature suggestions, or want to improve the codebase, please open an issue or submit a pull request.

Donation
If you find this tool useful and would like to support its continued development, consider donating to the address below:

ETH Donation Address: 0x1C46ccEA4D62d3eEC4DCE3501aa96d0Ff5FcA954

License
This project is licensed under the MIT License. See the LICENSE file for details.
