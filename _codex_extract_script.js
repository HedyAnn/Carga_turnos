const fs = require('fs');
const html = fs.readFileSync('D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html', 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/i);
if (!match) throw new Error('No se encontró el bloque script');
fs.writeFileSync('D:/FOLLOWUP/Carga_turnos/_codex_tmp_check.js', match[1], 'utf8');
