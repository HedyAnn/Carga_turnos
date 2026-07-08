const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let content = fs.readFileSync(path, 'utf8');
const oldTail = [
'      if (generationCopyDropdown && !generationCopyDropdown.contains(event.target)) {',
'        closeGenerationCopyDropdown();',
'      }',
'    });',
'',
'    document.addEventListener("keydown", (event) => {',
'      if (event.key !== "Escape") return;',
'      closeAllPeriodPickers();',
'      dropdowns.forEach((dropdown) => closeDropdown(dropdown));',
'      closeDetailStoreDropdown();',
'      closeGenerationStoreDropdown();',
'      closeGenerationWeekDropdown();',
'      closeGenerationLibraryDropdown();',
'      closeGenerationCopyDropdown();',
'      closeGenerationCreateModal();',
'    });'
].join('\n');
const newTail = [
'      if (generationCopyDropdown && !generationCopyDropdown.contains(event.target)) {',
'        closeGenerationCopyDropdown();',
'      }',
'',
'      if (generationCategoryModal && !generationCategoryModal.hidden && !event.target.closest(".generation-category-modal-dialog")) {',
'        closeGenerationCategoryModal();',
'      }',
'    });',
'',
'    document.addEventListener("keydown", (event) => {',
'      if (event.key !== "Escape") return;',
'      closeAllPeriodPickers();',
'      dropdowns.forEach((dropdown) => closeDropdown(dropdown));',
'      closeDetailStoreDropdown();',
'      closeGenerationStoreDropdown();',
'      closeGenerationWeekDropdown();',
'      closeGenerationLibraryDropdown();',
'      closeGenerationCopyDropdown();',
'      closeGenerationCreateModal();',
'      closeGenerationCategoryModal();',
'    });'
].join('\n');
content = content.replace(oldTail, newTail);
fs.writeFileSync(path, content, 'utf8');
