const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Frontend', 'src');

const colorMap = {
    '#f8fafc': 'var(--bg-primary)',
    '#ffffff': 'var(--bg-secondary)',
    '#fff': 'var(--bg-secondary)',
    '#eef2f6': 'var(--border-color)',
    '#e2e8f0': 'var(--border-color-dark)',
    '#0f172a': 'var(--text-primary)',
    '#64748b': 'var(--text-secondary)',
    '#334155': 'var(--text-primary)',
    '#94a3b8': 'var(--text-tertiary)',
    '#139682': 'var(--accent-color)',
    '#0d7a6a': 'var(--accent-hover)'
};

function processFile(filePath) {
    if (filePath.endsWith('.scss')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // We only want to replace standalone colors, wait, simpler: replace globally if not already var
        // But the mapping includes '#fff' which is a substring of '#ffffff'. So order by length!
        const sortedKeys = Object.keys(colorMap).sort((a, b) => b.length - a.length);

        for (const hex of sortedKeys) {
            // regex to match the hex color not followed by other hex chars
            const regex = new RegExp(hex + '(?![a-fA-F0-9])', 'gi');
            if (regex.test(content)) {
                content = content.replace(regex, colorMap[hex]);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated', filePath);
        }
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

traverseDir(srcDir);
