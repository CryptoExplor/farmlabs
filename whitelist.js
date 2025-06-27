(async () => {
    const SIGN_MESSAGE = "Sign this message to verify your wallet (session valid for 1 Day).";
    const SESSION_KEY = "verified_wallet_session";
    const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 1 Day

    // Load ethers.js dynamically if not already included
    if (typeof window.ethers === "undefined") {
        await loadEthers();
    }

    // Check session
    const existingSession = getSession();
    if (existingSession && !isSessionExpired(existingSession)) {
        console.log("✅ Session active:", existingSession.address);
        grantAccess(existingSession.address);
        return;
    }

    // Connect and verify wallet
    await connectAndVerifyWallet();

    // ===== Functions ===== //

    async function connectAndVerifyWallet() {
        if (!window.ethereum) {
            alert("Please install MetaMask or another Ethereum wallet.");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        try {
            const address = await signer.getAddress();
            const signature = await signer.signMessage(SIGN_MESSAGE);
            const recoveredAddress = ethers.utils.verifyMessage(SIGN_MESSAGE, signature);

            if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
                console.log("✅ Wallet verified:", address);
                saveSession(address);
                grantAccess(address);
            } else {
                console.error("❌ Signature mismatch.");
                denyAccess();
            }
        } catch (err) {
            console.error("❌ Verification failed:", err);
            denyAccess();
        }
    }

    function getSession() {
        try {
            const session = JSON.parse(localStorage.getItem(SESSION_KEY));
            return session;
        } catch {
            return null;
        }
    }

    function isSessionExpired(session) {
        return Date.now() > session.expiresAt;
    }

    function saveSession(address) {
        const session = {
            address,
            createdAt: Date.now(),
            expiresAt: Date.now() + SESSION_DURATION_MS
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }

    function grantAccess(address) {
        document.body.innerHTML += `<p style="color:green;font-weight:bold;">Access granted to ${address}</p>`;
        // 🔓 Add your app's logic here
    }

    function denyAccess() {
        document.body.innerHTML += `<p style="color:red;font-weight:bold;">Access denied.</p>`;
    }

    function loadEthers() {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.min.js";
            script.onload = () => resolve();
            script.onerror = () => reject("Failed to load ethers.js");
            document.head.appendChild(script);
        });
    }
})();
