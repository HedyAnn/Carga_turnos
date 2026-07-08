const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let text = fs.readFileSync(path, 'utf8');
const bad = `    const buildCoverageExportContent = () => {\r\n    const buildCoverageExportContent = () => {\r\n`;
const good = `    const buildCoverageExportContent = () => {\r\n`;
if (!text.includes(bad)) throw new Error('No se encontró el bloque duplicado esperado');
text = text.replace(bad, good);
fs.writeFileSync(path, text, 'utf8');
