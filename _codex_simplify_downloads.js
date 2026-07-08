const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace(/    const buildCoverageExportContent = \(\) => \{[\s\S]*?    const closeGenerationSaveAlert = \(\) => \{/,
`    const buildCoverageExportContent = () => {
      const header = ["Tienda", ...reportingWeeks, "Estado Cobertura"].join(",");
      const rows = coverageViews.all.rows.map((row) => {
        const weekValues = row.weeks.map((week) => week.text);
        return [row.store, ...weekValues, row.status.text]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(",");
      });

      return [header, ...rows].join("\r\n");
    };

    const triggerExcelDownloadFallback = () => {
      const blob = new Blob([buildCoverageExportContent()], { type: "text/csv;charset=utf-8" });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "estado-cobertura.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    };

    const openExcelUploadDialog = async () => {
      if (window.showOpenFilePicker) {
        try {
          await window.showOpenFilePicker({
            multiple: false,
            excludeAcceptAllOption: false,
            types: excelFilePickerTypes
          });
        } catch (error) {
          if (error?.name !== "AbortError") console.error(error);
        }
        return;
      }

      excelUploadInput?.click();
    };

    const openExcelDownloadDialog = async () => {
      if (window.showSaveFilePicker) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: "estado-cobertura.csv",
            types: [{
              description: "Archivo CSV",
              accept: {
                "text/csv": [".csv"]
              }
            }]
          });
          const writable = await handle.createWritable();
          await writable.write(buildCoverageExportContent());
          await writable.close();
        } catch (error) {
          if (error?.name !== "AbortError") console.error(error);
        }
        return;
      }

      triggerExcelDownloadFallback();
    };

    const closeGenerationSaveAlert = () => {`);

fs.writeFileSync(path, html, 'utf8');
