const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');
html = html.replace(
  '      generationConfigTableBody.insertAdjacentHTML("beforeend", buildGenerationConfigCategoryRow(categoryName, categoryDescription));',
  '      generationConfigTableBody.insertAdjacentHTML("afterbegin", buildGenerationConfigCategoryRow(categoryName, categoryDescription));'
);
fs.writeFileSync(path, html, 'utf8');
