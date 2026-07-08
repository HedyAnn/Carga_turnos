const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace(/    const resetGenerationCategoryForm = \(\) => \{[\s\S]*?    const openGenerationCreateModal = \(\) => \{/, `    const syncGenerationCategoryCounter = () => {
      if (!generationCategoryDescriptionInput || !generationCategoryCounter) return;
      const maxLength = Number(generationCategoryDescriptionInput.getAttribute("maxlength") || 100);
      const currentLength = generationCategoryDescriptionInput.value.length;
      generationCategoryCounter.textContent = \`${'${currentLength}'}\/${'${maxLength}'}\`;
    };

    const syncGenerationCategoryModalMode = () => {
      const isEditing = Boolean(generationCategoryEditingRow);
      if (generationCategoryTitle) generationCategoryTitle.textContent = isEditing ? "Editar Categoría de Turno" : "Nueva Categoría de Turno";
      if (generationCategorySubtitle) generationCategorySubtitle.textContent = isEditing
        ? "Actualiza el nombre y la descripción de esta categoría para mantenerla organizada."
        : "Crea una nueva categoría para organizar turnos que usarás con frecuencia.";
      if (generationCategorySubmitButton) generationCategorySubmitButton.textContent = isEditing ? "Guardar Cambios" : "Crear Categoría";
    };

    const resetGenerationCategoryForm = () => {
      generationCategoryEditingRow = null;
      if (generationCategoryNameInput) generationCategoryNameInput.value = "";
      if (generationCategoryDescriptionInput) generationCategoryDescriptionInput.value = "";
      syncGenerationCategoryCounter();
      syncGenerationCategoryModalMode();
    };

    const openGenerationCategoryModal = () => {
      if (!generationCategoryModal) return;
      closeGenerationAssignMenu();
      resetGenerationCategoryForm();
      generationCategoryModal.hidden = false;
      requestAnimationFrame(() => { generationCategoryModal.classList.add("is-visible"); });
      generationCategoryNameInput?.focus();
    };

    const openGenerationCategoryEditModal = (row) => {
      if (!generationCategoryModal || !row) return;
      closeGenerationAssignMenu();
      generationCategoryEditingRow = row;
      const title = row.querySelector(".generation-config-category strong")?.textContent?.trim() || "";
      const description = row.querySelector(".generation-config-category p")?.textContent?.trim() || "";
      if (generationCategoryNameInput) generationCategoryNameInput.value = title;
      if (generationCategoryDescriptionInput) generationCategoryDescriptionInput.value = description === "Sin descripción" ? "" : description;
      syncGenerationCategoryCounter();
      syncGenerationCategoryModalMode();
      generationCategoryModal.hidden = false;
      requestAnimationFrame(() => { generationCategoryModal.classList.add("is-visible"); });
      generationCategoryNameInput?.focus();
    };

    const closeGenerationCategoryModal = () => {
      if (!generationCategoryModal) return;
      generationCategoryModal.hidden = true;
      generationCategoryModal.classList.remove("is-visible");
    };

    const openGenerationCreateModal = () => {`);

html = html.replace(/    const createGenerationCategory = \(\) => \{[\s\S]*?    const closeGenerationAssignMenu = \(\) => \{/, `    const createGenerationCategory = () => {
      const categoryName = generationCategoryNameInput?.value.trim();
      const categoryDescription = generationCategoryDescriptionInput?.value.trim() || "";
      if (!categoryName) {
        generationCategoryNameInput?.focus();
        return;
      }
      if (!generationConfigTableBody) return;

      if (generationCategoryEditingRow) {
        const titleNode = generationCategoryEditingRow.querySelector(".generation-config-category strong");
        const descriptionNode = generationCategoryEditingRow.querySelector(".generation-config-category p");
        if (titleNode) titleNode.textContent = categoryName;
        if (descriptionNode) descriptionNode.textContent = categoryDescription || "Sin descripción";
        closeGenerationCategoryModal();
        resetGenerationCategoryForm();
        return;
      }

      generationConfigTableBody.insertAdjacentHTML("afterbegin", buildGenerationConfigCategoryRow(categoryName, categoryDescription));
      closeGenerationCategoryModal();
      resetGenerationCategoryForm();
    };

    const closeGenerationAssignMenu = () => {`);

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

html = html.replace(
`    generationConfigTable?.addEventListener("click", (event) => {
      const deleteButton = event.target.closest(".detail-square-button.danger");
      if (deleteButton) {
        deleteButton.closest("tr")?.remove();
        return;
      }

      const shiftCard = event.target.closest(".generation-config-chips .generation-shift-pill");
`,
`    generationConfigTable?.addEventListener("click", (event) => {
      const deleteButton = event.target.closest(".detail-square-button.danger");
      if (deleteButton) {
        deleteButton.closest("tr")?.remove();
        return;
      }

      const editCategoryButton = event.target.closest(".detail-square-button.edit");
      if (editCategoryButton) {
        openGenerationCategoryEditModal(editCategoryButton.closest("tr"));
        return;
      }

      const shiftCard = event.target.closest(".generation-config-chips .generation-shift-pill");
`
);

fs.writeFileSync(path, html, 'utf8');
