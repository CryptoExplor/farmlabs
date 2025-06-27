// scripts/inject-api-key.js
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '..', 'index.html');
const outputFile = path.join(__dirname, '..', 'dist', 'index.html');
const placeholderKey = 'AIzaSyDDvQ_-ipx-o0ZuH0d094NGWBI-ut9s_Ew';
const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
    console.error('[ERROR] GEMINI_API_KEY environment variable is not set!');
    process.exit(1);
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('[ERROR] Failed to read index.html:', err);
        process.exit(1);
    }

    if (!data.includes(placeholderKey)) {
        console.warn('[WARNING] Placeholder key not found in index.html. Nothing to replace.');
    }

    const updatedHtml = data.replace(placeholderKey, geminiApiKey);

    try {
        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    } catch (mkdirErr) {
        console.error('[ERROR] Failed to create dist directory:', mkdirErr);
        process.exit(1);
    }

    fs.writeFile(outputFile, updatedHtml, 'utf8', (err) => {
        if (err) {
            console.error('[ERROR] Failed to write updated index.html:', err);
            process.exit(1);
        }
        console.log('[SUCCESS] index.html built with API key injected.');
    });
});
