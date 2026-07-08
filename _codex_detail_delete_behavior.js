const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let text = fs.readFileSync(path, 'utf8');

text = text.replaceAll(
  '<button class="detail-square-button edit" type="button" aria-label="Editar"><span class="material-symbols-outlined">edit</span></button>',
  '<button class="detail-square-button edit" type="button" aria-label="Editar" data-open-generation-edit><span class="material-symbols-outlined">edit</span></button>'
);

const openGenerationScreenNeedle = `    const openGenerationScreen = ({ store, week, presetWeek = "" } = {}) => {\r\n      setActiveScreen("generation");\r\n      setGenerationContext({ store, week });\r\n      closeGenerationAssignMenu();\r\n      closeGenerationSaveAlert();\r\n      if (presetWeek) {\r\n        loadGenerationEditPreset(presetWeek);\r\n      } else {\r\n        syncGenerationVendorSelection(activeGenerationMode);\r\n        renderGenerationBoard(activeGenerationMode);\r\n      }\r\n    };\r\n`;
const detailHelpers = `\r\n    const disableDetailActionButton = (button, ariaLabel) => {\r\n      if (!button) return;\r\n      button.className = "detail-square-button disabled";\r\n      button.disabled = true;\r\n      button.setAttribute("aria-label", ariaLabel);\r\n      button.removeAttribute("data-open-generation-edit");\r\n    };\r\n\r\n    const markDetailWeekAsDeleted = (row) => {\r\n      if (!row) return;\r\n      const week = row.dataset.detailWeek || row.children?.[0]?.textContent?.trim() || "";\r\n      const coverageCell = row.children?.[1];\r\n      const viewButton = row.querySelector('.detail-square-button.success, .detail-square-button[aria-label="Ver turno"]');\r\n      const downloadButton = row.querySelector('.detail-square-button.download');\r\n      const editButton = row.querySelector('[data-open-generation-edit], .detail-square-button.edit');\r\n      const deleteButton = row.querySelector('.detail-square-button.danger');\r\n\r\n      if (coverageCell) {\r\n        coverageCell.innerHTML = '<span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>0%</span>';\r\n      }\r\n\r\n      disableDetailActionButton(viewButton, "Ver turno no disponible");\r\n      disableDetailActionButton(downloadButton, "Descarga no disponible");\r\n      disableDetailActionButton(editButton, "Editar no disponible");\r\n      disableDetailActionButton(deleteButton, "Eliminar no disponible");\r\n\r\n      if (week && generationEditPresets[week]) {\r\n        delete generationEditPresets[week];\r\n      }\r\n    };\r\n`;
if (!text.includes('const markDetailWeekAsDeleted = (row) => {')) {
  text = text.replace(openGenerationScreenNeedle, openGenerationScreenNeedle + detailHelpers);
}

const listenerNeedle = `    document.querySelectorAll("[data-open-generation-edit]").forEach((button) => {\r\n      button.addEventListener("click", () => {\r\n        const row = button.closest("[data-detail-generation-row]");\r\n        if (!row) return;\r\n        openGenerationScreen({\r\n          store: row.dataset.detailStore || detailStoreName?.textContent?.trim() || "Arequipa",\r\n          week: row.dataset.detailWeek || reportingWeeks[0],\r\n          presetWeek: row.dataset.detailWeek || ""\r\n        });\r\n      });\r\n    });\r\n`;
const detailDeleteListener = `\r\n    detailTableCard?.addEventListener("click", (event) => {\r\n      const deleteButton = event.target.closest('.detail-square-button.danger');\r\n      if (!deleteButton || deleteButton.disabled) return;\r\n\r\n      const row = deleteButton.closest('[data-detail-generation-row]');\r\n      if (!row) return;\r\n\r\n      const week = row.dataset.detailWeek || row.children?.[0]?.textContent?.trim() || "esta semana";\r\n      const confirmed = window.confirm("¿Estás segura de que quieres eliminar los turnos de la semana " + week + "?");\r\n      if (!confirmed) return;\r\n\r\n      markDetailWeekAsDeleted(row);\r\n    });\r\n`;
if (!text.includes('detailTableCard?.addEventListener("click", (event) => {')) {
  text = text.replace(listenerNeedle, listenerNeedle + detailDeleteListener);
}

fs.writeFileSync(path, text, 'utf8');
