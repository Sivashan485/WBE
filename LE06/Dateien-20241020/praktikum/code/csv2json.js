const fs = require('fs').promises;
const path = require('path');
const { performance } = require('perf_hooks');

if (process.argv.length !== 4) {
    console.error('Usage: node csv2json.js <input.csv> <output.json>');
    process.exit(1);
}

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

(async () => {
    try {
        const stats = await fs.stat(inputFilePath);
        const fileSize = stats.size;
        const lastModified = stats.mtime;

        console.log(`File Size: ${fileSize} bytes`);
        console.log(`Last Modified: ${lastModified}`);

        const startTime = performance.now();
        const data = await fs.readFile(inputFilePath, 'utf8');
        const readTime = performance.now() - startTime;

        console.log(`Time to read file: ${readTime.toFixed(2)} ms`);

        const lines = data.split('\n');
        const headers = lines[0].split(",");
        const jsonArray = [];

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentLine = lines[i].split(",");
            headers.forEach((header, index) => {
                obj[header] = currentLine[index];
            });
            jsonArray.push(obj);
        }

        const jsonContent = JSON.stringify(jsonArray, null, 2);
        await fs.writeFile(outputFilePath, jsonContent, 'utf8');
        console.log(`JSON file has been saved to ${outputFilePath}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})();