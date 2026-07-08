const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
`      if (generationCopyDropdown && !generationCopyDropdown.contains(event.target)) {
        closeGenerationCopyDropdown();
      }
    });`,
`      if (generationCopyDropdown && !generationCopyDropdown.contains(event.target)) {
        closeGenerationCopyDropdown();
      }

      if (generationCategoryModal && !generationCategoryModal.hidden && !event.target.closest(".generation-category-modal-dialog")) {
        closeGenerationCategoryModal();
      }
    });`
);

content = content.replace(
`      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      closeGenerationCreateModal();
    });`,
`      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      closeGenerationCreateModal();
      closeGenerationCategoryModal();
    });`
);

fs.writeFileSync(path, content, 'utf8');
