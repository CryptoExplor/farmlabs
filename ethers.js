// Load ethers.js dynamically if not included in HTML
(function loadEthers() {
    if (typeof window.ethers === "undefined") {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.min.js";
        script.onload = () => console.log("ethers.js loaded");
        document.head.appendChild(script);
    }
})();
