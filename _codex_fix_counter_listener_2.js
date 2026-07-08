const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');

if (!html.includes('generationCategoryDescriptionInput?.addEventListener("input", syncGenerationCategoryCounter);')) {
  html = html.replace(
    '    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);',
    '    generationCategoryDescriptionInput?.addEventListener("input", syncGenerationCategoryCounter);\n    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);\n    syncGenerationCategoryCounter();\n    syncGenerationCategoryModalMode();'
  );
}

fs.writeFileSync(path, html, 'utf8');
