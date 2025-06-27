// scripts/inject-api-key.js
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '..', 'index.html');
const outputFile = path.join(__dirname, '..', 'public', 'index.html');
const placeholderKey = 'AIzaSyDDvQ_-ipx-o0ZuH0d094NGWBI-ut9s_Ew';
const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
    console.error('[ERROR] GEMINI_API_KEY not set!');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.error('[ERROR] index.html not found at:', inputFile);
    process.exit(1);
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('[ERROR] Reading index.html:', err);
        process.exit(1);
    }

    const result = data.replace(placeholderKey, geminiApiKey);

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });

    fs.writeFile(outputFile, result, 'utf8', (err) => {
        if (err) {
            console.error('[ERROR] Writing index.html:', err);
            process.exit(1);
        }
        console.log('[SUCCESS] API key injected into public/index.html');
    });
});
