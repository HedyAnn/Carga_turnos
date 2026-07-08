const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let text = fs.readFileSync(path, 'utf8');

const replacements = [
  {
    from: '<tr>\r\n                  <td data-label="Semana">02-02-2025</td>',
    to: '<tr data-detail-generation-row data-detail-store="Arequipa" data-detail-week="02-02-2025">\r\n                  <td data-label="Semana">02-02-2025</td>'
  },
  {
    from: '<tr>\r\n                  <td data-label="Semana">09-02-2025</td>',
    to: '<tr data-detail-generation-row data-detail-store="Arequipa" data-detail-week="09-02-2025">\r\n                  <td data-label="Semana">09-02-2025</td>'
  },
  {
    from: '<tr>\r\n                  <td data-label="Semana">16-02-2025</td>',
    to: '<tr data-detail-generation-row data-detail-store="Arequipa" data-detail-week="16-02-2025">\r\n                  <td data-label="Semana">16-02-2025</td>'
  },
  {
    from: '<tr>\r\n                  <td data-label="Semana">23-02-2025</td>',
    to: '<tr data-detail-generation-row data-detail-store="Arequipa" data-detail-week="23-02-2025">\r\n                  <td data-label="Semana">23-02-2025</td>'
  },
  {
    from: '<tr>\r\n                  <td data-label="Semana">02-03-2025</td>',
    to: '<tr data-detail-generation-row data-detail-store="Arequipa" data-detail-week="02-03-2025">\r\n                  <td data-label="Semana">02-03-2025</td>'
  },
  {
    from: '<button class="detail-square-button edit" type="button" aria-label="Editar"><span class="material-symbols-outlined">edit</span></button>',
    to: '<button class="detail-square-button edit" type="button" aria-label="Editar" data-open-generation-edit><span class="material-symbols-outlined">edit</span></button>'
  }
];

for (const { from, to } of replacements) {
  if (!text.includes(from)) throw new Error(`No se encontró el bloque esperado: ${from.slice(0, 60)}`);
  text = text.replace(from, to);
}

const anchor1 = `    const generationSelectedVendorsByMode = {\r\n      "meta-justa": [],\r\n      asistencia: [],\r\n    };\r\n`;
const insert1 = `    const generationSelectedVendorsByMode = {\r\n      "meta-justa": [],\r\n      asistencia: [],\r\n    };\r\n    const generationEditPresets = {\r\n      "02-02-2025": {\r\n        selectedVendors: ["Javier Soto Pérez", "Viviana Núñez Toledo", "Juan Carrasco Soto"],\r\n        assignmentsByMode: {\r\n          "meta-justa": {\r\n            "Javier Soto Pérez": { 0: "morning", 1: "afternoon", 2: "fullday", 3: "afternoon", 4: "off", 5: "off", 6: "morning" },\r\n            "Viviana Núñez Toledo": { 0: "afternoon", 1: "morning", 2: "afternoon", 3: "fullday", 4: "morning", 5: "off", 6: "off" },\r\n            "Juan Carrasco Soto": { 0: "fullday", 1: "afternoon", 2: "morning", 3: "afternoon", 4: "fullday", 5: "off", 6: "off" }\r\n          },\r\n          asistencia: {}\r\n        }\r\n      }\r\n    };\r\n`;
if (!text.includes(anchor1)) throw new Error('No se encontró el ancla de estado de generación');
text = text.replace(anchor1, insert1);

const anchor2 = `    const setGenerationContext = ({ store, week }) => {\r\n      const safeStore = store || detailStoreName?.textContent || "Arequipa";\r\n      const safeWeek = week || reportingWeeks[0];\r\n\r\n      if (generationStoreLabel) generationStoreLabel.textContent = safeStore;\r\n      if (generationWeekLabel) generationWeekLabel.textContent = safeWeek;\r\n      renderGenerationWeekOptions?.(safeWeek);\r\n      if (generationBreadcrumbStore) generationBreadcrumbStore.textContent = ` + "`Turnos ${safeStore}`" + `;\r\n      renderGenerationStoreOptions?.(generationStoreSearch?.value || "");\r\n    };\r\n`;
const insert2 = `    const setGenerationContext = ({ store, week }) => {\r\n      const safeStore = store || detailStoreName?.textContent || "Arequipa";\r\n      const safeWeek = week || reportingWeeks[0];\r\n\r\n      if (generationStoreLabel) generationStoreLabel.textContent = safeStore;\r\n      if (generationWeekLabel) generationWeekLabel.textContent = safeWeek;\r\n      renderGenerationWeekOptions?.(safeWeek);\r\n      if (generationBreadcrumbStore) generationBreadcrumbStore.textContent = ` + "`Turnos ${safeStore}`" + `;\r\n      renderGenerationStoreOptions?.(generationStoreSearch?.value || "");\r\n    };\r\n\r\n    const cloneGenerationAssignments = (assignments = {}) => Object.fromEntries(\r\n      Object.entries(assignments).map(([vendorName, days]) => [vendorName, { ...days }])\r\n    );\r\n\r\n    const loadGenerationEditPreset = (week) => {\r\n      const preset = generationEditPresets[week];\r\n      if (!preset) return false;\r\n\r\n      generationSelectedVendorsByMode["meta-justa"] = [...(preset.selectedVendors || [])];\r\n      generationSelectedVendorsByMode.asistencia = [...(preset.selectedVendorsAsistencia || [])];\r\n      generationAssignmentsByMode["meta-justa"] = cloneGenerationAssignments(preset.assignmentsByMode?.["meta-justa"] || {});\r\n      generationAssignmentsByMode.asistencia = cloneGenerationAssignments(preset.assignmentsByMode?.asistencia || {});\r\n      syncGenerationVendorSelection(activeGenerationMode);\r\n      renderGenerationBoard(activeGenerationMode);\r\n      return true;\r\n    };\r\n\r\n    const openGenerationScreen = ({ store, week, presetWeek = "" } = {}) => {\r\n      setActiveScreen("generation");\r\n      setGenerationContext({ store, week });\r\n      closeGenerationAssignMenu();\r\n      closeGenerationSaveAlert();\r\n      if (presetWeek) {\r\n        loadGenerationEditPreset(presetWeek);\r\n      } else {\r\n        syncGenerationVendorSelection(activeGenerationMode);\r\n        renderGenerationBoard(activeGenerationMode);\r\n      }\r\n    };\r\n`;
if (!text.includes(anchor2)) throw new Error('No se encontró el ancla de contexto de generación');
text = text.replace(anchor2, insert2);

const anchor3 = `    generationButtons.forEach((button) => {\r\n      button.addEventListener("click", () => {\r\n        setActiveScreen("generation");\r\n        setGenerationContext({\r\n          store: detailStoreName?.textContent || "Arequipa",\r\n          week: reportingWeeks[2],\r\n        });\r\n        closeGenerationAssignMenu();\r\n        closeGenerationSaveAlert();\r\n        syncGenerationVendorSelection(activeGenerationMode);\r\n        renderGenerationBoard();\r\n      });\r\n    });\r\n`;
const insert3 = `    generationButtons.forEach((button) => {\r\n      button.addEventListener("click", () => {\r\n        const row = button.closest("tr");\r\n        openGenerationScreen({\r\n          store: row?.dataset.detailStore || detailStoreName?.textContent || "Arequipa",\r\n          week: row?.dataset.detailWeek || reportingWeeks[2],\r\n        });\r\n      });\r\n    });\r\n\r\n    document.querySelectorAll("[data-open-generation-edit]").forEach((button) => {\r\n      button.addEventListener("click", () => {\r\n        const row = button.closest("tr");\r\n        if (!row) return;\r\n        openGenerationScreen({\r\n          store: row.dataset.detailStore || detailStoreName?.textContent || "Arequipa",\r\n          week: row.dataset.detailWeek || reportingWeeks[0],\r\n          presetWeek: row.dataset.detailWeek || ""\r\n        });\r\n      });\r\n    });\r\n`;
if (!text.includes(anchor3)) throw new Error('No se encontró el listener de apertura de generación');
text = text.replace(anchor3, insert3);

fs.writeFileSync(path, text, 'utf8');
