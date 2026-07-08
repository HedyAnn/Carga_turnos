const fs = require('fs');
const htmlPath = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
const cssPath = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.css';

let html = fs.readFileSync(htmlPath, 'utf8');
let css = fs.readFileSync(cssPath, 'utf8');

html = html.replace(
  '<textarea rows="4" placeholder="Ej. Turnos predefinidos para tiendas ubicadas en Santiago de Chile." data-generation-category-description></textarea>\r\n        </label>\r\n\r\n        <p class="generation-category-helper">Agrega detalles que ayuden a identificar cuándo usar esta categoría.</p>',
  '<textarea rows="4" maxlength="100" placeholder="Ej. Turnos predefinidos para tiendas ubicadas en Santiago de Chile." data-generation-category-description></textarea>\r\n          <span class="generation-category-counter" data-generation-category-counter>0/100</span>\r\n        </label>\r\n\r\n        <p class="generation-category-helper">Agrega detalles que ayuden a identificar cuándo usar esta categoría.</p>'
);

html = html.replace(
  '    const generationCategoryDescriptionInput = document.querySelector("[data-generation-category-description]");\r\n    const generationCategorySubmitButton = document.querySelector("[data-generation-category-submit]");',
  '    const generationCategoryDescriptionInput = document.querySelector("[data-generation-category-description]");\r\n    const generationCategoryCounter = document.querySelector("[data-generation-category-counter]");\r\n    const generationCategorySubmitButton = document.querySelector("[data-generation-category-submit]");'
);

html = html.replace(
  '    const resetGenerationCategoryForm = () => {\r\n      if (generationCategoryNameInput) generationCategoryNameInput.value = "";\r\n      if (generationCategoryDescriptionInput) generationCategoryDescriptionInput.value = "";\r\n    };',
  '    const syncGenerationCategoryCounter = () => {\r\n      if (!generationCategoryDescriptionInput || !generationCategoryCounter) return;\r\n      const maxLength = Number(generationCategoryDescriptionInput.getAttribute("maxlength") || 100);\r\n      const currentLength = generationCategoryDescriptionInput.value.length;\r\n      generationCategoryCounter.textContent = `${currentLength}/${maxLength}`;\r\n    };\r\n\r\n    const resetGenerationCategoryForm = () => {\r\n      if (generationCategoryNameInput) generationCategoryNameInput.value = "";\r\n      if (generationCategoryDescriptionInput) generationCategoryDescriptionInput.value = "";\r\n      syncGenerationCategoryCounter();\r\n    };'
);

html = html.replace(
  '    generationCategoryCloseButtons.forEach((button) => {\r\n      button.addEventListener("click", closeGenerationCategoryModal);\r\n    });\r\n    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);',
  '    generationCategoryCloseButtons.forEach((button) => {\r\n      button.addEventListener("click", closeGenerationCategoryModal);\r\n    });\r\n    generationCategoryDescriptionInput?.addEventListener("input", syncGenerationCategoryCounter);\r\n    generationCategorySubmitButton?.addEventListener("click", createGenerationCategory);\r\n    syncGenerationCategoryCounter();'
);

css = css.replace(
  '.generation-category-field textarea {\r\n  min-height: 78px;\r\n  padding: 12px 14px;\r\n  resize: vertical;\r\n}\r\n.generation-category-field input:focus,',
  '.generation-category-field textarea {\r\n  min-height: 78px;\r\n  padding: 12px 14px;\r\n  resize: vertical;\r\n}\r\n.generation-category-counter {\r\n  justify-self: end;\r\n  margin-top: -2px;\r\n  color: #7b8794;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 1;\r\n}\r\n.generation-category-field input:focus,'
);

fs.writeFileSync(htmlPath, html, 'utf8');
fs.writeFileSync(cssPath, css, 'utf8');
