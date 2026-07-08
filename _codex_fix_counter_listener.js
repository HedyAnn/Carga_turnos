const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace(
`    generationCategoryCloseButtons.forEach((button) => {
      button.addEventListener("click", closeGenerationCategoryModal);
    });
    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);
`,
`    generationCategoryCloseButtons.forEach((button) => {
      button.addEventListener("click", closeGenerationCategoryModal);
    });
    generationCategoryDescriptionInput?.addEventListener("input", syncGenerationCategoryCounter);
    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);
    syncGenerationCategoryCounter();
    syncGenerationCategoryModalMode();
`
);

fs.writeFileSync(path, html, 'utf8');
