const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'index.html');
const outputFile = path.join(__dirname, 'dist', 'index.html');
const geminiApiKey = process.env.GEMINI_API_KEY; // This will come from Vercel's environment variables

if (!geminiApiKey) {
    console.error('GEMINI_API_KEY environment variable is not set!');
    process.exit(1);
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const result = data.replace('AIzaSyDDvQ_-ipx-o0ZuH0d094NGWBI-ut9s_Ew', geminiApiKey);

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFile(outputFile, result, 'utf8', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
            return;
        }
        console.log('index.html successfully built with API key injected!');
    });
});
