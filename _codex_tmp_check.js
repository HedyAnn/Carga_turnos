
    const reportingWeeks = ["02-02-2025", "09-02-2025", "16-02-2025", "23-02-2025", "02-03-2025"];
    const weekColumns = reportingWeeks.map((date) => date.replaceAll("-", "/"));
    const coverageTableHead = document.getElementById("coverage-table-head");
    const coverageTableBody = document.getElementById("coverage-table-body");
    const tabButtons = document.querySelectorAll(".tab-button");
    const overviewScreen = document.querySelector('[data-view-screen="overview"]');
    const detailScreen = document.querySelector('[data-view-screen="detail"]');
    const generationScreen = document.querySelector('[data-view-screen="generation"]');
    const generationConfigScreen = document.querySelector('[data-view-screen="generation-config"]');
    const detailBreadcrumbTitle = document.querySelector("[data-detail-breadcrumb-title]");
    const detailPageTitle = document.querySelector("[data-detail-page-title]");
    const detailStoreName = document.querySelector("[data-detail-store-name]");
    const detailTableTitle = document.querySelector("[data-detail-table-title]");
    const detailTableCard = document.querySelector("[data-detail-table-card]");
    const detailStoreDropdown = document.querySelector("[data-detail-store-dropdown]");
    const detailStoreTrigger = detailStoreDropdown?.querySelector(".detail-store-trigger");
    const detailStorePanel = detailStoreDropdown?.querySelector(".detail-store-panel");
    const detailStoreSearch = detailStoreDropdown?.querySelector("[data-detail-store-search]");
    const detailStoreOptions = detailStoreDropdown?.querySelector("[data-detail-store-options]");
    const generationWeekDropdown = document.querySelector("[data-generation-week-dropdown]");
    const generationWeekTrigger = generationWeekDropdown?.querySelector("#generation-week");
    const generationWeekPanel = generationWeekDropdown?.querySelector(".generation-week-panel");
    const generationWeekOptions = generationWeekDropdown?.querySelector(".generation-week-options");
    const generationWeekLabel = document.querySelector("[data-generation-week-label]");
    const generationStoreDropdown = document.querySelector("[data-generation-store-dropdown]");
    const generationStoreTrigger = generationStoreDropdown?.querySelector(".detail-store-trigger");
    const generationStorePanel = generationStoreDropdown?.querySelector(".generation-store-panel");
    const generationStoreSearch = generationStoreDropdown?.querySelector("[data-generation-store-search]");
    const generationStoreOptions = generationStoreDropdown?.querySelector("[data-generation-store-options]");
    const generationStoreLabel = document.querySelector("[data-generation-store-label]");
    const generationVendorsList = document.querySelector("[data-generation-vendors-list]");
    const generationSelectAll = generationVendorsList?.querySelector("[data-generation-select-all]");
    const generationVendorCheckboxes = generationVendorsList ? [...generationVendorsList.querySelectorAll("[data-generation-vendor]")] : [];
    const generationBoardBody = document.querySelector("[data-generation-board-body]");
    const generationEmptyState = document.querySelector("[data-generation-empty-state]");
    const generationModeSwitch = document.querySelector("[data-generation-mode-switch]");
    const generationModePills = generationModeSwitch ? [...generationModeSwitch.querySelectorAll("[data-generation-mode]")] : [];
    const generationWeekOptionButtons = generationWeekDropdown ? [...generationWeekDropdown.querySelectorAll("[data-generation-week-option]")] : [];
    const generationShiftOptions = [
      { id: "morning", title: "Ma\u00f1ana", schedule: "08:00 - 14:00", tone: "morning" },
      { id: "afternoon", title: "Tarde", schedule: "14:00 - 20:00", tone: "afternoon" },
      { id: "fullday", title: "Full day", schedule: "08:00 - 20:00", tone: "fullday" },
      { id: "off", title: "Libre", schedule: "Sin turno", tone: "off" }
    ];
    const generationCustomShiftTones = {
      teal: { board: "teal" },
      yellow: { board: "yellow" },
      blue: { board: "blue" },
      red: { board: "red" },
      indigo: { board: "indigo" },
      orange: { board: "orange" },
      green: { board: "green" },
      purple: { board: "purple" }
    };
    let activeGenerationBoardCell = null;
    let generationEditingShiftId = null;
    let generationCreateState = { isOff: false, includesLunch: true, color: "teal" };
    let activeGenerationMode = "meta-justa";
    const generationAssignmentsByMode = {
      "meta-justa": {},
      asistencia: {},
    };
    const generationSelectedVendorsByMode = {
      "meta-justa": [],
      asistencia: [],
    };
    const generationBreadcrumbStore = document.querySelector("[data-generation-breadcrumb-store]");
    const generationButtons = document.querySelectorAll("[data-open-generation]");
    const generationSaveButton = document.querySelector(".generation-save-button");
    const generationConfigButton = document.querySelector(".generation-config-button");
    const generationSaveAlert = document.querySelector("[data-generation-save-alert]");
    const generationSaveAlertCloseButton = document.querySelector("[data-generation-save-alert-close]");
    const generationShiftPills = document.querySelector("[data-generation-shift-pills]");
    const generationCreateModal = document.querySelector("[data-generation-create-modal]");
    const generationCreateCloseButtons = document.querySelectorAll("[data-generation-create-close]");
    const generationCreateTitle = document.querySelector("[data-generation-create-title]");
    const generationCreateNameInput = document.querySelector("[data-generation-create-name]");
    const generationCreateOffToggle = document.querySelector("[data-generation-create-off]");
    const generationCreateLunchToggle = document.querySelector("[data-generation-create-lunch]");
    const generationCreateTimeGrid = document.querySelector("[data-generation-create-time-grid]");
    const generationCreateLunchFields = document.querySelector("[data-generation-create-lunch-fields]");
    const generationCreateStartInput = document.querySelector("[data-generation-create-start]");
    const generationCreateEndInput = document.querySelector("[data-generation-create-end]");
    const generationCreateLunchStartInput = document.querySelector("[data-generation-create-lunch-start]");
    const generationCreateLunchEndInput = document.querySelector("[data-generation-create-lunch-end]");
    const generationCreateColorList = document.querySelector("[data-generation-create-colors]");
    const generationCreateColorButtons = generationCreateColorList ? [...generationCreateColorList.querySelectorAll("[data-generation-create-color]")] : [];
    const generationCreateDeleteButton = document.querySelector("[data-generation-create-delete]");
    const generationCreateSubmitButton = document.querySelector("[data-generation-create-submit]");
    const generationLibraryDropdown = document.querySelector("[data-generation-library-dropdown]");
    const generationLibraryTrigger = generationLibraryDropdown?.querySelector(".generation-shift-trigger");
    const generationLibraryPanel = generationLibraryDropdown?.querySelector(".generation-library-panel");
    const generationLibrarySearch = generationLibraryDropdown?.querySelector("[data-generation-library-search]");
    const generationLibraryOptions = generationLibraryDropdown?.querySelector("[data-generation-library-options]");
    const generationLibraryLabel = generationLibraryDropdown?.querySelector("[data-generation-library-label]");
    const generationCopyDropdown = document.querySelector("[data-generation-copy-dropdown]");
    const generationCopyTrigger = generationCopyDropdown?.querySelector(".generation-copy-trigger");
    const generationCopyPanel = generationCopyDropdown?.querySelector(".generation-copy-panel");
    const generationCopyOptions = generationCopyDropdown?.querySelector("[data-generation-copy-options]");
    const generationCopyLabel = generationCopyDropdown?.querySelector("[data-generation-copy-label]");
    const generationConfigTable = document.querySelector(".generation-config-table");

    const escapeHtml = (value) => String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");

    const createCoverageCell = (tone, text) => ({ tone, text });
    const generationLibraryItems = [
      "Turnos Santiago de Chile",
      "Turnos Colombia",
      "Mall Plaza Chile",
      "Tiendas de Calzado",
      "Juguetería"
    ];

    const generationToneToColorMap = {
      morning: "teal",
      afternoon: "blue",
      fullday: "purple",
      off: "orange",
      teal: "teal",
      yellow: "yellow",
      blue: "blue",
      red: "red",
      indigo: "indigo",
      orange: "orange",
      green: "green",
      purple: "purple"
    };

    const coverageViews = {
      all: {
        rows: [
          {
            store: "Arequipa",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("partial", "85%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          },
          {
            store: "Baby Plane Las Condes",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky Alto Las Condes",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          },
          {
            store: "Colloky Antofagasta",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky Costanera Center",
            weeks: [
              createCoverageCell("partial", "85%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          }
        ]
      },
      complete: {
        rows: [
          {
            store: "Baby Plane Las Condes",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky Antofagasta",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky Costanera Center",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky La Florida Center",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          },
          {
            store: "Colloky Mall Plaza",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("complete", "100%")),
            status: createCoverageCell("complete", "Completa")
          }
        ]
      },
      partial: {
        rows: [
          {
            store: "Arequipa",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          },
          {
            store: "Colloky Costanera Center",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          },
          {
            store: "Colloky Plaza Oeste",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          },
          {
            store: "Colloky Plaza Vespucio",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%"),
              createCoverageCell("complete", "100%")
            ],
            status: createCoverageCell("partial", "Parcial")
          },
          {
            store: "Colloky Costanera Center",
            weeks: [
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("complete", "100%"),
              createCoverageCell("critical", "20%")
            ],
            status: createCoverageCell("partial", "Parcial")
          }
        ]
      },
      critical: {
        rows: [
          {
            store: "Colloky Alto Las Condes",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          },
          {
            store: "Colloky Estacion Central",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          },
          {
            store: "Colloky Marina Arauco",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          },
          {
            store: "Colloky Panoramico",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          },
          {
            store: "Colloky Alto Las Condes",
            weeks: Array.from({ length: reportingWeeks.length }, () => createCoverageCell("critical", "20%")),
            status: createCoverageCell("critical", "Cr\u00edtico")
          }
        ]
      }
    };

    const toneToIcon = {
      complete: "check_circle",
      partial: "warning",
      critical: "cancel"
    };

    const detailStoreList = [
      "Arequipa",
      "Baby Plane Las Condes",
      "Colloky Alto Las Condes",
      "Colloky Antofagasta",
      "Colloky Santiago",
      ...new Set(Object.values(coverageViews).flatMap((view) => view.rows.map((row) => row.store)))
    ].filter((store, index, stores) => stores.indexOf(store) === index);

    const renderCoveragePill = (cell, summary = false) => `
      <span class="status-pill ${escapeHtml(cell.tone)}${summary ? " summary" : ""}">
        <span class="material-symbols-outlined">${escapeHtml(toneToIcon[cell.tone] || "")}</span>${escapeHtml(cell.text)}
      </span>
    `;

    const renderCoverageTable = (viewKey) => {
      const view = coverageViews[viewKey];
      if (!view || !coverageTableHead || !coverageTableBody) return;

      const headCells = weekColumns
        .map((date) => `<th><span>Semana</span>${escapeHtml(date.replaceAll("/", "-"))}</th>`)
        .join("");

      coverageTableHead.innerHTML = `
        <tr>
          <th class="store-column">Tienda</th>
          ${headCells}
          <th class="status-column">Estado Cobertura</th>
        </tr>
      `;

      coverageTableBody.innerHTML = view.rows
        .map((row) => {
          const weekCells = row.weeks
            .map((cell, index) => `<td data-label="${escapeHtml(weekColumns[index])}">${renderCoveragePill(cell)}</td>`)
            .join("");

          return `
            <tr>
              <td data-label="Tienda"><a href="#" data-store-detail="${escapeHtml(row.store)}">${escapeHtml(row.store)}</a></td>
              ${weekCells}
              <td data-label="Estado Cobertura">${renderCoveragePill(row.status, true)}</td>
            </tr>
          `;
        })
        .join("");
    };

    const setActiveScreen = (screen) => {
      overviewScreen.hidden = screen !== "overview";
      detailScreen.hidden = screen !== "detail";
      generationScreen.hidden = screen !== "generation";
      if (generationConfigScreen) generationConfigScreen.hidden = screen !== "generation-config";
    };

    const setGenerationContext = ({ store, week }) => {
      const safeStore = store || detailStoreName?.textContent || "Arequipa";
      const safeWeek = week || reportingWeeks[0];

      if (generationStoreLabel) generationStoreLabel.textContent = safeStore;
      if (generationWeekLabel) generationWeekLabel.textContent = safeWeek;
      renderGenerationWeekOptions?.(safeWeek);
      if (generationBreadcrumbStore) generationBreadcrumbStore.textContent = `Turnos ${safeStore}`;
      renderGenerationStoreOptions?.(generationStoreSearch?.value || "");
    };

    const closeDetailStoreDropdown = () => {
      detailStoreDropdown?.classList.remove("open");
      detailStoreTrigger?.setAttribute("aria-expanded", "false");
      if (detailStorePanel) detailStorePanel.hidden = true;
    };

    const openDetailStoreDropdown = () => {
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeGenerationStoreDropdown();
      closeGenerationCopyDropdown();
      detailStoreDropdown?.classList.add("open");
      detailStoreTrigger?.setAttribute("aria-expanded", "true");
      if (detailStorePanel) detailStorePanel.hidden = false;
      if (detailStoreSearch) detailStoreSearch.value = "";
      renderDetailStoreOptions();
      detailStoreSearch?.focus();
    };

    const renderDetailStoreOptions = (filterTerm = "") => {
      if (!detailStoreOptions) return;

      const normalizedFilter = filterTerm.trim().toLowerCase();
      const currentStore = detailStoreName?.textContent?.trim() || "Arequipa";
      const filteredStores = detailStoreList.filter((store) => store.toLowerCase().includes(normalizedFilter));

      detailStoreOptions.innerHTML = filteredStores
        .map((store) => `
          <button
            class="detail-store-option${store === currentStore ? " active" : ""}"
            type="button"
            role="option"
            aria-selected="${store === currentStore}"
            data-detail-store-option="${store}"
          >
            ${store}
          </button>
        `)
        .join("");
    };

    const setDetailStore = (storeName) => {
      const safeStoreName = storeName?.trim() || "Arequipa";
      const pageTitle = `Turnos ${safeStoreName}`;
      const tableTitle = `Turnos de ${safeStoreName}`;

      if (detailBreadcrumbTitle) detailBreadcrumbTitle.textContent = pageTitle;
      if (detailPageTitle) detailPageTitle.textContent = pageTitle;
      if (detailStoreName) detailStoreName.textContent = safeStoreName;
      if (detailTableTitle) detailTableTitle.textContent = tableTitle;
      if (detailTableCard) detailTableCard.setAttribute("aria-label", tableTitle);
      renderDetailStoreOptions(detailStoreSearch?.value || "");
    };

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        renderCoverageTable(button.dataset.view || "all");
      });
    });

    renderCoverageTable("all");
    setDetailStore("Arequipa");
    setActiveScreen("overview");

    coverageTableBody?.addEventListener("click", (event) => {
      const link = event.target.closest("[data-store-detail]");
      if (!link) return;
      event.preventDefault();
      setDetailStore(link.dataset.storeDetail);
      setActiveScreen("detail");
    });

    document.querySelectorAll("[data-back-overview]").forEach((button) => {
      button.addEventListener("click", () => setActiveScreen("overview"));
    });

    document.querySelectorAll("[data-back-detail]").forEach((button) => {
      button.addEventListener("click", () => setActiveScreen("detail"));
    });

    document.querySelectorAll("[data-back-generation]").forEach((button) => {
      button.addEventListener("click", () => setActiveScreen("generation"));
    });

    generationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.closest("tr");
        const weekCell = row?.querySelector('[data-label="Semana"]');
        const week = weekCell?.textContent?.trim() || row?.children?.[0]?.textContent?.trim() || reportingWeeks[0];
        const store = detailStoreName?.textContent?.trim() || "Arequipa";
        setGenerationContext({ store, week });
        setActiveScreen("generation");
      });
    });

    generationConfigButton?.addEventListener("click", () => {
      closeGenerationAssignMenu();
      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      setActiveScreen("generation-config");
    });

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const maxAvailableYear = 2025;
    const minAvailableYear = 2020;
    const periodPickers = [...document.querySelectorAll("[data-period-picker]")];

    const closeAllPeriodPickers = () => {
      periodPickers.forEach((picker) => {
        picker.classList.remove("month-open", "year-open");
        picker.querySelector(".month-trigger")?.setAttribute("aria-expanded", "false");
        picker.querySelector(".month-panel") && (picker.querySelector(".month-panel").hidden = true);
        picker.querySelector(".year-trigger")?.setAttribute("aria-expanded", "false");
        picker.querySelector(".year-panel") && (picker.querySelector(".year-panel").hidden = true);
      });
    };

    periodPickers.forEach((picker) => {
      const monthTrigger = picker.querySelector(".month-trigger");
      const monthPanel = picker.querySelector(".month-panel");
      const monthLabel = picker.querySelector("[data-month-label]");
      const monthOptions = [...picker.querySelectorAll(".month-option")];
      const yearTrigger = picker.querySelector(".year-trigger");
      const yearPanel = picker.querySelector(".year-panel");
      const yearLabel = picker.querySelector("[data-year-label]");
      const yearList = picker.querySelector(".year-list");
      const shiftButtons = [...picker.querySelectorAll("[data-period-shift]")];
      let currentMonthIndex = monthOptions.findIndex((option) => option.classList.contains("active"));
      let currentYear = Number(yearLabel?.textContent || String(maxAvailableYear));

      const closeMonthPicker = () => {
        picker.classList.remove("month-open");
        monthTrigger?.setAttribute("aria-expanded", "false");
        if (monthPanel) monthPanel.hidden = true;
      };

      const closeYearPicker = () => {
        picker.classList.remove("year-open");
        yearTrigger?.setAttribute("aria-expanded", "false");
        if (yearPanel) yearPanel.hidden = true;
      };

      const renderYearOptions = () => {
        if (!yearList) return;

        const years = Array.from(
          { length: maxAvailableYear - minAvailableYear + 1 },
          (_, index) => maxAvailableYear - index
        );

        yearList.innerHTML = years
          .map((year) => `
            <button class="year-option${year === currentYear ? " active" : ""}" type="button" data-year-value="${year}" aria-selected="${year === currentYear}">
              ${year}
            </button>
          `)
          .join("");

        yearList.querySelectorAll(".year-option").forEach((button) => {
          button.addEventListener("click", () => {
            syncYearPicker(Number(button.dataset.yearValue));
            closeYearPicker();
          });
        });
      };

      const syncYearPicker = (year) => {
        currentYear = Math.min(maxAvailableYear, Math.max(minAvailableYear, year));
        if (yearLabel) {
          yearLabel.textContent = String(currentYear);
        }
        renderYearOptions();
      };

      const syncMonthPicker = (monthIndex) => {
        currentMonthIndex = monthIndex;
        if (monthLabel) {
          monthLabel.textContent = monthNames[monthIndex];
        }

        monthOptions.forEach((option, index) => {
          const isActive = index === monthIndex;
          option.classList.toggle("active", isActive);
          option.setAttribute("aria-selected", String(isActive));
        });
      };

      const openMonthPicker = () => {
        closeAllPeriodPickers();
        picker.classList.add("month-open");
        monthTrigger?.setAttribute("aria-expanded", "true");
        if (monthPanel) monthPanel.hidden = false;
      };

      const openYearPicker = () => {
        closeAllPeriodPickers();
        picker.classList.add("year-open");
        yearTrigger?.setAttribute("aria-expanded", "true");
        if (yearPanel) yearPanel.hidden = false;
      };

      monthTrigger?.addEventListener("click", () => {
        if (picker.classList.contains("month-open")) {
          closeMonthPicker();
        } else {
          openMonthPicker();
        }
      });

      yearTrigger?.addEventListener("click", () => {
        if (picker.classList.contains("year-open")) {
          closeYearPicker();
        } else {
          openYearPicker();
        }
      });

      monthOptions.forEach((option) => {
        option.addEventListener("click", () => {
          syncMonthPicker(Number(option.dataset.monthIndex));
          closeMonthPicker();
        });
      });

      shiftButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = Number(button.dataset.periodShift);
          let nextMonthIndex = currentMonthIndex + direction;
          let nextYear = currentYear;

          if (nextMonthIndex < 0) {
            nextMonthIndex = 11;
            nextYear -= 1;
          }

          if (nextMonthIndex > 11) {
            nextMonthIndex = 0;
            nextYear += 1;
          }

          syncYearPicker(nextYear);
          syncMonthPicker(nextMonthIndex);
        });
      });

      if (currentMonthIndex < 0) {
        currentMonthIndex = 1;
      }

      renderYearOptions();
      syncYearPicker(currentYear);
      syncMonthPicker(currentMonthIndex);
    });

    const dropdowns = document.querySelectorAll("[data-dropdown]");

    const closeDropdown = (dropdown) => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      const panel = dropdown.querySelector(".dropdown-panel");
      dropdown.classList.remove("open");
      trigger?.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
    };

    const openDropdown = (dropdown) => {
      dropdowns.forEach((item) => {
        if (item !== dropdown) closeDropdown(item);
      });
      closeAllPeriodPickers();

      const trigger = dropdown.querySelector(".dropdown-trigger");
      const panel = dropdown.querySelector(".dropdown-panel");
      dropdown.classList.add("open");
      trigger?.setAttribute("aria-expanded", "true");
      if (panel) panel.hidden = false;
    };

    const syncDropdownLabel = (dropdown) => {
      const label = dropdown.querySelector("[data-dropdown-label]");
      const items = [...dropdown.querySelectorAll(".dropdown-option input:not([data-select-all])")];
      const checked = items.filter((input) => input.checked).map((input) => input.value);
      const placeholder = dropdown.querySelector(".dropdown-trigger-text")?.dataset.placeholder || "";

      if (!label) return;

      if (checked.length === 0) {
        label.textContent = placeholder;
        return;
      }

      if (checked.length === items.length) {
        label.textContent = "Seleccionar todo";
        return;
      }

      label.textContent = checked.length === 1 ? checked[0] : `${checked.length} seleccionados`;
    };

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      const panel = dropdown.querySelector(".dropdown-panel");
      const search = dropdown.querySelector("[data-dropdown-search]");
      const selectAll = dropdown.querySelector("[data-select-all]");
      const options = [...dropdown.querySelectorAll(".dropdown-option")];
      const itemInputs = [...dropdown.querySelectorAll(".dropdown-option input:not([data-select-all])")];
      const label = dropdown.querySelector(".dropdown-trigger-text");

      if (label) {
        label.dataset.placeholder = label.textContent.trim();
      }

      trigger?.addEventListener("click", () => {
        if (dropdown.classList.contains("open")) {
          closeDropdown(dropdown);
        } else {
          openDropdown(dropdown);
          search?.focus();
        }
      });

      search?.addEventListener("input", () => {
        const term = search.value.trim().toLowerCase();

        options.forEach((option) => {
          if (option.classList.contains("dropdown-option-all")) {
            option.hidden = false;
            return;
          }

          const text = option.dataset.optionText?.toLowerCase() || "";
          option.hidden = !text.includes(term);
        });
      });

      selectAll?.addEventListener("change", () => {
        itemInputs.forEach((input) => {
          if (input.closest(".dropdown-option")?.hidden) return;
          input.checked = selectAll.checked;
        });
        syncDropdownLabel(dropdown);
      });

      itemInputs.forEach((input) => {
        input.addEventListener("change", () => {
          if (selectAll) {
            selectAll.checked = itemInputs.every((item) => item.checked);
          }
          syncDropdownLabel(dropdown);
        });
      });

      syncDropdownLabel(dropdown);
    });

    const closeGenerationWeekDropdown = () => {
      generationWeekDropdown?.classList.remove("open");
      generationWeekTrigger?.setAttribute("aria-expanded", "false");
      if (generationWeekPanel) generationWeekPanel.hidden = true;
    };

    const renderGenerationWeekOptions = (activeWeek) => {
      if (!generationWeekOptions) return;
      const currentWeek = activeWeek || generationWeekLabel?.textContent?.trim() || reportingWeeks[0];
      generationWeekOptionButtons.forEach((button) => {
        const isActive = button.dataset.generationWeekOption === currentWeek;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });
    };

    const openGenerationWeekDropdown = () => {
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeDetailStoreDropdown();
      closeGenerationWeekDropdown();
      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      closeGenerationStoreDropdown();
      generationWeekDropdown?.classList.add("open");
      generationWeekTrigger?.setAttribute("aria-expanded", "true");
      if (generationWeekPanel) generationWeekPanel.hidden = false;
      renderGenerationWeekOptions();
    };

    const closeGenerationStoreDropdown = () => {
      generationStoreDropdown?.classList.remove("open");
      generationStoreTrigger?.setAttribute("aria-expanded", "false");
      if (generationStorePanel) generationStorePanel.hidden = true;
    };

    const openGenerationStoreDropdown = () => {
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeDetailStoreDropdown();
      closeGenerationCopyDropdown();
      closeGenerationStoreDropdown();
      generationStoreDropdown?.classList.add("open");
      generationStoreTrigger?.setAttribute("aria-expanded", "true");
      if (generationStorePanel) generationStorePanel.hidden = false;
      if (generationStoreSearch) generationStoreSearch.value = "";
      renderGenerationStoreOptions();
      generationStoreSearch?.focus();
    };

    const renderGenerationStoreOptions = (filterTerm = "") => {
      if (!generationStoreOptions) return;

      const normalizedFilter = filterTerm.trim().toLowerCase();
      const currentStore = generationStoreLabel?.textContent?.trim() || detailStoreName?.textContent?.trim() || "Arequipa";
      const filteredStores = detailStoreList.filter((store) => store.toLowerCase().includes(normalizedFilter));

      generationStoreOptions.innerHTML = filteredStores
        .map((store) => `
          <button
            class="detail-store-option${store === currentStore ? " active" : ""}"
            type="button"
            role="option"
            aria-selected="${store === currentStore}"
            data-generation-store-option="${store}"
          >
            ${store}
          </button>
        `)
        .join("");
    };

    const setGenerationStore = (storeName) => {
      const safeStoreName = storeName?.trim() || "Arequipa";
      if (generationStoreLabel) generationStoreLabel.textContent = safeStoreName;
      if (generationBreadcrumbStore) generationBreadcrumbStore.textContent = `Turnos ${safeStoreName}`;
      renderGenerationStoreOptions(generationStoreSearch?.value || "");
    };

    const closeGenerationLibraryDropdown = () => {
      generationLibraryDropdown?.classList.remove("open");
      generationLibraryTrigger?.setAttribute("aria-expanded", "false");
      if (generationLibraryPanel) generationLibraryPanel.hidden = true;
    };

    const renderGenerationLibraryOptions = (filterTerm = "") => {
      if (!generationLibraryOptions) return;

      const normalizedFilter = filterTerm.trim().toLowerCase();
      const currentLibrary = generationLibraryLabel?.textContent?.trim() || generationLibraryItems[0];
      const filteredItems = generationLibraryItems.filter((item) => item.toLowerCase().includes(normalizedFilter));

      generationLibraryOptions.innerHTML = filteredItems
        .map((item) => `
          <button
            class="generation-library-option${item === currentLibrary ? " active" : ""}"
            type="button"
            role="option"
            aria-selected="${item === currentLibrary}"
            data-generation-library-option="${escapeHtml(item)}"
          >
            ${escapeHtml(item)}
          </button>
        `)
        .join("");
    };

    const openGenerationLibraryDropdown = () => {
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeDetailStoreDropdown();
      closeGenerationStoreDropdown();
      closeGenerationWeekDropdown();
      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      generationLibraryDropdown?.classList.add("open");
      generationLibraryTrigger?.setAttribute("aria-expanded", "true");
      if (generationLibraryPanel) generationLibraryPanel.hidden = false;
      if (generationLibrarySearch) generationLibrarySearch.value = "";
      renderGenerationLibraryOptions();
      generationLibrarySearch?.focus();
    };

    const setGenerationLibrary = (libraryName) => {
      const nextLibrary = libraryName?.trim() || generationLibraryItems[0];
      if (generationLibraryLabel) generationLibraryLabel.textContent = nextLibrary;
      renderGenerationLibraryOptions(generationLibrarySearch?.value || "");
    };

    const closeGenerationCopyDropdown = () => {
      generationCopyDropdown?.classList.remove("open");
      generationCopyTrigger?.setAttribute("aria-expanded", "false");
      if (generationCopyPanel) generationCopyPanel.hidden = true;
    };

    const renderGenerationCopyOptions = () => {
      if (!generationCopyOptions) return;

      const currentWeek = generationCopyLabel?.textContent?.trim() || "Seleccionar turno";
      generationCopyOptions.innerHTML = reportingWeeks
        .map((week) => `
          <button
            class="generation-copy-option${week === currentWeek ? " active" : ""}"
            type="button"
            role="option"
            aria-selected="${week === currentWeek}"
            data-generation-copy-option="${week}"
          >
            ${week}
          </button>
        `)
        .join("");
    };

    const openGenerationCopyDropdown = () => {
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeDetailStoreDropdown();
      closeGenerationStoreDropdown();
      closeGenerationWeekDropdown();
      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      generationCopyDropdown?.classList.add("open");
      generationCopyTrigger?.setAttribute("aria-expanded", "true");
      if (generationCopyPanel) generationCopyPanel.hidden = false;
      renderGenerationCopyOptions();
    };

    const setGenerationCopyWeek = (week) => {
      const nextWeek = week?.trim() || "Seleccionar turno";
      if (generationCopyLabel) generationCopyLabel.textContent = nextWeek;
      renderGenerationCopyOptions();
    };

    const getGenerationCheckedVendors = () => generationVendorCheckboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.closest(".generation-vendor-row")?.querySelector("span")?.textContent?.trim())
      .filter(Boolean);

    const getGenerationSelectedVendors = (mode = activeGenerationMode) => generationSelectedVendorsByMode[mode] || [];

    const getOppositeGenerationMode = (mode = activeGenerationMode) => mode === "meta-justa" ? "asistencia" : "meta-justa";

    const getGenerationBlockedVendors = (mode = activeGenerationMode) => new Set(getGenerationSelectedVendors(getOppositeGenerationMode(mode)));

    const syncGenerationVendorSelection = (mode = activeGenerationMode) => {
      const selectedVendors = new Set(getGenerationSelectedVendors(mode));
      const blockedVendors = getGenerationBlockedVendors(mode);

      generationVendorCheckboxes.forEach((checkbox) => {
        const row = checkbox.closest(".generation-vendor-row");
        const vendorName = row?.querySelector("span")?.textContent?.trim();
        const isBlocked = Boolean(vendorName && blockedVendors.has(vendorName));
        const isSelected = Boolean(vendorName && selectedVendors.has(vendorName));

        checkbox.disabled = isBlocked;
        checkbox.checked = !isBlocked && isSelected;
        row?.classList.toggle("is-disabled", isBlocked);
        row?.setAttribute("aria-disabled", String(isBlocked));
        if (isBlocked) {
          row?.setAttribute("title", "Este vendedor ya tiene turnos asignados en la otra pestaña.");
        } else {
          row?.removeAttribute("title");
        }
      });

      if (generationSelectAll) {
        const enabledCheckboxes = generationVendorCheckboxes.filter((item) => !item.disabled);
        generationSelectAll.checked = enabledCheckboxes.length > 0 && enabledCheckboxes.every((item) => item.checked);
        generationSelectAll.disabled = enabledCheckboxes.length === 0;
      }
    };

    const persistGenerationVendorSelection = (mode = activeGenerationMode) => {
      generationSelectedVendorsByMode[mode] = getGenerationCheckedVendors();
    };

    const getGenerationAssignmentsForMode = (mode = activeGenerationMode) => generationAssignmentsByMode[mode] || {};

    const getActiveGenerationAssignments = () => getGenerationAssignmentsForMode(activeGenerationMode);

    const setGenerationMode = (mode) => {
      if (!mode) return;

      persistGenerationVendorSelection(activeGenerationMode);
      activeGenerationMode = mode;

      if (generationModePills.length) {
        generationModePills.forEach((button) => {
          const isActive = button.dataset.generationMode === mode;
          button.classList.toggle("active", isActive);
          button.setAttribute("aria-pressed", String(isActive));
        });
      }

      syncGenerationVendorSelection(mode);
      closeGenerationAssignMenu();
      if (generationBoardBody) generationBoardBody.innerHTML = "";
      renderGenerationBoard(mode);
    };

    const getGenerationAssignment = (vendorName, dayIndex, mode = activeGenerationMode) => {
      if (!vendorName || dayIndex === undefined || dayIndex === null) return null;
      return getGenerationAssignmentsForMode(mode)[vendorName]?.[dayIndex] || null;
    };

    const getGenerationBoardCellClassName = (shiftId) => {
      if (!shiftId) return "generation-board-cell";
      if (shiftId === "custom") return "generation-board-cell assigned custom";

      const selectedShift = generationShiftOptions.find((option) => option.id === shiftId);
      return selectedShift ? `generation-board-cell assigned ${selectedShift.tone}` : "generation-board-cell";
    };

    const renderGenerationBoardCellContent = (shiftId) => {
      if (!shiftId) return "Asignar Turno";
      if (shiftId === "custom") return `<span class="generation-board-cell-remove material-symbols-outlined" data-generation-remove-assignment aria-label="Quitar turno">close</span><strong>Personalizado</strong><small>Configurar turno</small>`;

      const selectedShift = generationShiftOptions.find((option) => option.id === shiftId);
      if (!selectedShift) return "Asignar Turno";

      return `<span class="generation-board-cell-remove material-symbols-outlined" data-generation-remove-assignment aria-label="Quitar turno">close</span><strong>${selectedShift.title}</strong><small>${selectedShift.schedule}</small>`;
    };

    const renderGenerationBoard = (mode = activeGenerationMode) => {
      if (!generationBoardBody || !generationEmptyState) return;

      const selectedVendors = getGenerationSelectedVendors(mode);
      const hasSelectedVendors = selectedVendors.length > 0;

      generationBoardBody.hidden = !hasSelectedVendors;
      generationEmptyState.hidden = hasSelectedVendors;
      generationBoardBody.style.display = hasSelectedVendors ? "grid" : "none";
      generationEmptyState.style.display = hasSelectedVendors ? "none" : "grid";

      if (!hasSelectedVendors) {
        generationBoardBody.innerHTML = "";
        return;
      }

      generationBoardBody.innerHTML = selectedVendors.map((vendorName) => `
        <div class="generation-board-row">
          <div class="generation-board-vendor">${vendorName}</div>
          ${Array.from({ length: 7 }, (_, dayIndex) => {
            const shiftId = getGenerationAssignment(vendorName, dayIndex, mode);
            return `<button class="${getGenerationBoardCellClassName(shiftId)}" type="button" data-generation-assign-trigger data-generation-mode="${mode}" data-vendor-name="${vendorName}" data-day-index="${dayIndex}">${renderGenerationBoardCellContent(shiftId)}</button>`;
          }).join("")}
        </div>
      `).join("");
    };

    const generationAssignMenu = document.createElement("div");
    generationAssignMenu.className = "generation-assign-menu";
    generationAssignMenu.hidden = true;
    generationAssignMenu.innerHTML = `
      <button class="generation-assign-customize" type="button" data-generation-assign-customize>
        <span class="material-symbols-outlined">edit_square</span>
        Personalizar
      </button>
      <div class="generation-assign-options" data-generation-assign-options></div>
    `;
    document.body.appendChild(generationAssignMenu);

    const generationAssignOptionsContainer = generationAssignMenu.querySelector("[data-generation-assign-options]");
    const generationClearPanelButton = document.querySelector("[data-generation-clear-panel]");

    const renderGenerationAssignMenu = () => {
      if (!generationAssignOptionsContainer) return;
      generationAssignOptionsContainer.innerHTML = generationShiftOptions.map((option) => `
        <button class="generation-assign-option ${option.tone}" type="button" data-generation-assign-option="${option.id}">
          <strong>${option.title}</strong>
          <small>${option.schedule}</small>
        </button>
      `).join("");
    };


    const syncGenerationCreateColorSelection = () => {
      generationCreateColorButtons.forEach((button) => {
        const isActive = button.dataset.generationCreateColor === generationCreateState.color;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    };

    const syncGenerationCreateSwitch = (button, isActive) => {
      if (!button) return;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-checked", String(isActive));
    };

    const syncGenerationCreateForm = () => {
      syncGenerationCreateSwitch(generationCreateOffToggle, generationCreateState.isOff);
      syncGenerationCreateSwitch(generationCreateLunchToggle, generationCreateState.includesLunch);
      const disableWorkTimes = generationCreateState.isOff;
      const disableLunchTimes = generationCreateState.isOff || !generationCreateState.includesLunch;
      [generationCreateStartInput, generationCreateEndInput].forEach((input) => { if (input) input.disabled = disableWorkTimes; });
      [generationCreateLunchStartInput, generationCreateLunchEndInput].forEach((input) => { if (input) input.disabled = disableLunchTimes; });
      generationCreateTimeGrid?.classList.toggle("is-off", generationCreateState.isOff);
      generationCreateLunchFields?.classList.toggle("is-disabled", disableLunchTimes);
      syncGenerationCreateColorSelection();
    };

    const syncGenerationCreateModalMode = () => {
      if (!generationCreateModal) return;
      const isEditing = Boolean(generationEditingShiftId) || generationModalContext.isEditing;
      generationCreateModal.classList.toggle("is-editing", isEditing);
      if (generationCreateTitle) {
        generationCreateTitle.textContent = isEditing ? "Editar turno" : "Crear turno nuevo";
      }
      if (generationCreateSubmitButton) {
        generationCreateSubmitButton.textContent = isEditing ? "Guardar" : "Crear Turno";
      }
    };

    const getGenerationShiftTimeValues = (shiftOption) => {
      const match = String(shiftOption?.schedule || "").match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
      return {
        start: shiftOption?.startTime || match?.[1] || "08:00",
        end: shiftOption?.endTime || match?.[2] || "14:00",
        lunchStart: shiftOption?.lunchStart || "12:00",
        lunchEnd: shiftOption?.lunchEnd || "13:00"
      };
    };

    const getGenerationShiftColor = (shiftOption) => generationToneToColorMap[shiftOption?.color] || generationToneToColorMap[shiftOption?.tone] || "teal";

    const populateGenerationCreateForm = (shiftOption) => {
      const timeValues = getGenerationShiftTimeValues(shiftOption);
      generationCreateState = {
        isOff: Boolean(shiftOption?.isOff) || shiftOption?.schedule === "Sin turno" || shiftOption?.tone === "off",
        includesLunch: shiftOption?.includesLunch ?? true,
        color: getGenerationShiftColor(shiftOption)
      };
      if (generationCreateNameInput) generationCreateNameInput.value = shiftOption?.title || "";
      if (generationCreateStartInput) generationCreateStartInput.value = timeValues.start;
      if (generationCreateEndInput) generationCreateEndInput.value = timeValues.end;
      if (generationCreateLunchStartInput) generationCreateLunchStartInput.value = timeValues.lunchStart;
      if (generationCreateLunchEndInput) generationCreateLunchEndInput.value = timeValues.lunchEnd;
      syncGenerationCreateColorSelection();
      syncGenerationCreateForm();
    };

    const getConfigShiftCardData = (card) => {
      const title = card?.querySelector("strong")?.textContent?.trim() || "";
      const schedule = card?.querySelector("small")?.textContent?.trim() || (title === "Disponible" ? "Sin turno" : "");
      const toneClass = [...(card?.classList || [])].find((className) => ["morning","afternoon","fullday","off","teal","yellow","blue","red","indigo","orange","green","purple"].includes(className)) || "teal";
      return {
        title,
        schedule,
        tone: toneClass,
        color: getGenerationShiftColor({ tone: toneClass }),
        isOff: schedule === "Sin turno" || toneClass === "off"
      };
    };

    const applyConfigShiftCard = (card, shiftPayload) => {
      if (!card) return;
      card.className = `generation-shift-pill ${shiftPayload.tone}`;
      card.removeAttribute("data-config-available");
      card.innerHTML = `<strong>${escapeHtml(shiftPayload.title)}</strong><small>${escapeHtml(shiftPayload.schedule)}</small>`;
    };

    const resetConfigShiftCardToAvailable = (card) => {
      if (!card) return;
      card.className = "generation-shift-pill create static";
      card.setAttribute("data-config-available", "true");
      card.innerHTML = "<strong>Disponible</strong>";
    };

    const openConfigCreateModal = (card) => {
      if (!generationCreateModal) return;
      closeGenerationAssignMenu();
      resetGenerationCreateForm();
      generationModalContext = { surface: "config", card, isEditing: false };
      syncGenerationCreateModalMode();
      generationCreateModal.hidden = false;
      requestAnimationFrame(() => { generationCreateModal.classList.add("is-visible"); });
      generationCreateNameInput?.focus();
    };

    const openConfigEditModal = (card) => {
      if (!generationCreateModal || !card) return;
      closeGenerationAssignMenu();
      generationEditingShiftId = null;
      generationModalContext = { surface: "config", card, isEditing: true };
      populateGenerationCreateForm(getConfigShiftCardData(card));
      syncGenerationCreateModalMode();
      generationCreateModal.hidden = false;
      requestAnimationFrame(() => { generationCreateModal.classList.add("is-visible"); });
      generationCreateNameInput?.focus();
    };

    const resetGenerationCreateForm = () => {
      generationEditingShiftId = null;
      generationCreateState = { isOff: false, includesLunch: true, color: "teal" };
      if (generationCreateNameInput) generationCreateNameInput.value = "";
      if (generationCreateStartInput) generationCreateStartInput.value = "08:00";
      if (generationCreateEndInput) generationCreateEndInput.value = "14:00";
      if (generationCreateLunchStartInput) generationCreateLunchStartInput.value = "12:00";
      if (generationCreateLunchEndInput) generationCreateLunchEndInput.value = "13:00";
      syncGenerationCreateForm();
      syncGenerationCreateModalMode();
    };

    const closeGenerationCreateModal = () => {
      if (!generationCreateModal) return;
      generationCreateModal.hidden = true;
      generationCreateModal.classList.remove("is-visible");
    };

    const openGenerationCreateModal = () => {
      if (!generationCreateModal) return;
      closeGenerationAssignMenu();
      resetGenerationCreateForm();
      generationCreateModal.hidden = false;
      requestAnimationFrame(() => { generationCreateModal.classList.add("is-visible"); });
      generationCreateNameInput?.focus();
    };

    const openGenerationEditModal = (shiftId) => {
      if (!generationCreateModal) return;
      const selectedShift = generationShiftOptions.find((option) => option.id === shiftId);
      if (!selectedShift) return;
      closeGenerationAssignMenu();
      generationEditingShiftId = shiftId;
      populateGenerationCreateForm(selectedShift);
      syncGenerationCreateModalMode();
      generationCreateModal.hidden = false;
      requestAnimationFrame(() => { generationCreateModal.classList.add("is-visible"); });
      generationCreateNameInput?.focus();
    };

    const GENERATION_SHIFT_LIMIT = 6;

    const renderGenerationShiftPills = () => {
      if (!generationShiftPills) return;

      const visibleShiftOptions = generationShiftOptions.slice(0, GENERATION_SHIFT_LIMIT);
      const remainingSlots = Math.max(0, GENERATION_SHIFT_LIMIT - visibleShiftOptions.length);

      generationShiftPills.innerHTML = visibleShiftOptions.map((option) => `
        <article class="generation-shift-pill ${option.tone}" data-generation-shift-id="${escapeHtml(option.id)}">
          <strong>${escapeHtml(option.title)}</strong>
          <small>${escapeHtml(option.schedule)}</small>
        </article>
      `).join("") + Array.from({ length: remainingSlots }, () => `
        <article class="generation-shift-pill create" data-open-create-shift>
          <strong>+ Crear turno</strong>
        </article>
      `).join("");
    };

    const saveGenerationShift = () => {
      const shiftName = generationCreateNameInput?.value.trim();
      if (!shiftName) {
        generationCreateNameInput?.focus();
        return;
      }
      const toneConfig = generationCustomShiftTones[generationCreateState.color] || generationCustomShiftTones.teal;
      const startTime = generationCreateStartInput?.value || "08:00";
      const endTime = generationCreateEndInput?.value || "14:00";
      const lunchStart = generationCreateLunchStartInput?.value || "12:00";
      const lunchEnd = generationCreateLunchEndInput?.value || "13:00";
      const schedule = generationCreateState.isOff ? "Sin turno" : `${startTime} - ${endTime}`;
      const shiftPayload = {
        title: shiftName,
        schedule,
        tone: toneConfig.board,
        color: generationCreateState.color,
        isOff: generationCreateState.isOff,
        includesLunch: generationCreateState.includesLunch,
        startTime,
        endTime,
        lunchStart,
        lunchEnd
      };

      if (generationEditingShiftId) {
        const existingShift = generationShiftOptions.find((option) => option.id === generationEditingShiftId);
        if (!existingShift) return;
        Object.assign(existingShift, shiftPayload);
      } else {
        if (generationShiftOptions.length >= GENERATION_SHIFT_LIMIT) {
          closeGenerationCreateModal();
          return;
        }
        generationShiftOptions.push({
          id: `custom-${Date.now()}`,
          ...shiftPayload
        });
      }

      renderGenerationShiftPills();
      renderGenerationAssignMenu();
      renderGenerationBoard();
      closeGenerationCreateModal();
    };

    const deleteGenerationShift = () => {
      if (!generationEditingShiftId) return;
      const shiftIndex = generationShiftOptions.findIndex((option) => option.id === generationEditingShiftId);
      if (shiftIndex < 0) return;

      generationShiftOptions.splice(shiftIndex, 1);
      Object.values(generationAssignmentsByMode).forEach((assignments) => {
        Object.keys(assignments).forEach((key) => {
          if (assignments[key] === generationEditingShiftId) {
            delete assignments[key];
          }
        });
      });

      renderGenerationShiftPills();
      renderGenerationAssignMenu();
      renderGenerationBoard();
      closeGenerationCreateModal();
    };

    const closeGenerationAssignMenu = () => {
      generationAssignMenu.hidden = true;
      generationAssignMenu.classList.remove("open");
      generationAssignMenu.style.left = "";
      generationAssignMenu.style.top = "";
      generationAssignMenu.style.visibility = "";
      activeGenerationBoardCell = null;
    };

    const closeGenerationSaveAlert = () => {
      if (!generationSaveAlert) return;
      generationSaveAlert.hidden = true;
      generationSaveAlert.classList.remove("is-visible");
    };

    const openGenerationSaveAlert = () => {
      if (!generationSaveAlert) return;
      generationSaveAlert.hidden = false;
      requestAnimationFrame(() => {
        generationSaveAlert.classList.add("is-visible");
      });
    };

    const clearGenerationPanel = () => {
      generationAssignmentsByMode[activeGenerationMode] = {};
      generationSelectedVendorsByMode[activeGenerationMode] = [];
      syncGenerationVendorSelection(activeGenerationMode);
      closeGenerationAssignMenu();
      renderGenerationBoard();
    };

    const applyGenerationShiftToCell = (cell, shiftId) => {
      if (!cell) return;

      const vendorName = cell.dataset.vendorName;
      const dayIndex = cell.dataset.dayIndex;
      const mode = cell.dataset.generationMode || activeGenerationMode;
      const assignmentsForMode = getGenerationAssignmentsForMode(mode);

      if (vendorName && dayIndex !== undefined) {
        if (!shiftId) {
          if (assignmentsForMode[vendorName]) {
            delete assignmentsForMode[vendorName][dayIndex];
            if (Object.keys(assignmentsForMode[vendorName]).length === 0) {
              delete assignmentsForMode[vendorName];
            }
          }
        } else {
          assignmentsForMode[vendorName] ??= {};
          assignmentsForMode[vendorName][dayIndex] = shiftId;
        }
      }

      if (mode !== activeGenerationMode) return;

      cell.className = getGenerationBoardCellClassName(shiftId);
      cell.innerHTML = renderGenerationBoardCellContent(shiftId);
    };

    const openGenerationAssignMenu = (button) => {
      if (!button) return;
      if (activeGenerationBoardCell === button && !generationAssignMenu.hidden) {
        closeGenerationAssignMenu();
        return;
      }

      activeGenerationBoardCell = button;
      renderGenerationAssignMenu();
      generationAssignMenu.hidden = false;
      generationAssignMenu.classList.add("open");
      generationAssignMenu.style.visibility = "hidden";
      generationAssignMenu.style.left = "16px";
      generationAssignMenu.style.top = "16px";

      requestAnimationFrame(() => {
        const rect = button.getBoundingClientRect();
        const menuRect = generationAssignMenu.getBoundingClientRect();
        const margin = 16;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom - margin;
        const spaceAbove = rect.top - margin;
        const left = Math.min(Math.max(rect.left, margin), viewportWidth - menuRect.width - margin);
        let top = rect.bottom + 8;

        if (spaceBelow < menuRect.height && spaceAbove > spaceBelow) {
          top = rect.top - menuRect.height - 8;
        }

        top = Math.min(Math.max(top, margin), viewportHeight - menuRect.height - margin);

        generationAssignMenu.style.left = `${left}px`;
        generationAssignMenu.style.top = `${top}px`;
        generationAssignMenu.style.visibility = "visible";
      });
    };

    renderDetailStoreOptions();
    renderGenerationLibraryOptions();
    renderGenerationCopyOptions();
    renderGenerationWeekOptions();

    detailStoreTrigger?.addEventListener("click", () => {
      if (detailStoreDropdown?.classList.contains("open")) {
        closeDetailStoreDropdown();
      } else {
        openDetailStoreDropdown();
      }
    });


    generationLibraryTrigger?.addEventListener("click", () => {
      if (generationLibraryDropdown?.classList.contains("open")) {
        closeGenerationLibraryDropdown();
      } else {
        openGenerationLibraryDropdown();
      }
    });

    generationCopyTrigger?.addEventListener("click", () => {
      if (generationCopyDropdown?.classList.contains("open")) {
        closeGenerationCopyDropdown();
      } else {
        openGenerationCopyDropdown();
      }
    });

    generationWeekTrigger?.addEventListener("click", () => {
      if (generationWeekDropdown?.classList.contains("open")) {
        closeGenerationWeekDropdown();
      } else {
        openGenerationWeekDropdown();
      }
    });

    generationWeekOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-generation-week-option]");
      if (!option) return;
      if (generationWeekLabel) generationWeekLabel.textContent = option.dataset.generationWeekOption;
      renderGenerationWeekOptions(option.dataset.generationWeekOption);
      closeGenerationWeekDropdown();
      closeGenerationLibraryDropdown();
    });

    generationStoreTrigger?.addEventListener("click", () => {
      if (generationStoreDropdown?.classList.contains("open")) {
        closeGenerationStoreDropdown();
      } else {
        openGenerationStoreDropdown();
      }
    });

    detailStoreSearch?.addEventListener("input", () => {
      renderDetailStoreOptions(detailStoreSearch.value);
    });

    generationLibrarySearch?.addEventListener("input", () => {
      renderGenerationLibraryOptions(generationLibrarySearch.value);
    });

    generationStoreSearch?.addEventListener("input", () => {
      renderGenerationStoreOptions(generationStoreSearch.value);
    });

    detailStoreOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-detail-store-option]");
      if (!option) return;
      setDetailStore(option.dataset.detailStoreOption);
      closeDetailStoreDropdown();
    });

    generationLibraryOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-generation-library-option]");
      if (!option) return;
      setGenerationLibrary(option.dataset.generationLibraryOption);
      closeGenerationLibraryDropdown();
    });


    generationCopyOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-generation-copy-option]");
      if (!option) return;
      setGenerationCopyWeek(option.dataset.generationCopyOption);
      closeGenerationCopyDropdown();
    });
    generationStoreOptions?.addEventListener("click", (event) => {
      const option = event.target.closest("[data-generation-store-option]");
      if (!option) return;
      setGenerationStore(option.dataset.generationStoreOption);
      closeGenerationStoreDropdown();
    });
    generationSelectAll?.addEventListener("change", () => {
      generationVendorCheckboxes.forEach((checkbox) => {
        if (!checkbox.disabled) {
          checkbox.checked = generationSelectAll.checked;
        }
      });
      persistGenerationVendorSelection();
      syncGenerationVendorSelection();
      renderGenerationBoard();
    });

    generationVendorCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        persistGenerationVendorSelection();
        syncGenerationVendorSelection();
        renderGenerationBoard();
      });
    });

    generationBoardBody?.addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-generation-remove-assignment]");
      if (removeButton) {
        const trigger = removeButton.closest("[data-generation-assign-trigger]");
        if (trigger) {
          applyGenerationShiftToCell(trigger, "");
        }
        closeGenerationAssignMenu();
        return;
      }

      const trigger = event.target.closest("[data-generation-assign-trigger]");
      if (!trigger) return;
      openGenerationAssignMenu(trigger);
    });

    generationAssignMenu.addEventListener("click", (event) => {
      const customizeButton = event.target.closest("[data-generation-assign-customize]");
      if (customizeButton) {
        applyGenerationShiftToCell(activeGenerationBoardCell, "custom");
        closeGenerationAssignMenu();
        return;
      }

      const optionButton = event.target.closest("[data-generation-assign-option]");
      if (!optionButton) return;
      applyGenerationShiftToCell(activeGenerationBoardCell, optionButton.dataset.generationAssignOption);
      closeGenerationAssignMenu();
    });

    generationBoardBody?.addEventListener("scroll", () => {
      if (!generationAssignMenu.hidden) closeGenerationAssignMenu();
    });

    generationClearPanelButton?.addEventListener("click", () => {
      clearGenerationPanel();
    });

    generationSaveButton?.addEventListener("click", () => {
      closeGenerationAssignMenu();
      openGenerationSaveAlert();
    });

    generationSaveAlertCloseButton?.addEventListener("click", () => {
      closeGenerationSaveAlert();
    });


    generationShiftPills?.addEventListener("click", (event) => {
      const createTrigger = event.target.closest("[data-open-create-shift]");
      if (createTrigger) {
        openGenerationCreateModal();
        return;
      }

      const shiftPill = event.target.closest("[data-generation-shift-id]");
      if (!shiftPill) return;
      openGenerationEditModal(shiftPill.dataset.generationShiftId);
    });

    generationCreateCloseButtons.forEach((button) => {
      button.addEventListener("click", closeGenerationCreateModal);
    });

    generationCreateOffToggle?.addEventListener("click", () => {
      generationCreateState.isOff = !generationCreateState.isOff;
      syncGenerationCreateForm();
    });

    generationCreateLunchToggle?.addEventListener("click", () => {
      generationCreateState.includesLunch = !generationCreateState.includesLunch;
      syncGenerationCreateForm();
    });

    generationCreateColorList?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-generation-create-color]");
      if (!button) return;
      generationCreateState.color = button.dataset.generationCreateColor || "teal";
      syncGenerationCreateColorSelection();
    });

    generationCreateDeleteButton?.addEventListener("click", deleteGenerationShift);
    generationCreateSubmitButton?.addEventListener("click", saveGenerationShift);

    generationConfigTable?.addEventListener("click", (event) => {
      const deleteButton = event.target.closest(".detail-square-button.danger");
      if (deleteButton) {
        deleteButton.closest("tr")?.remove();
        return;
      }

      const shiftCard = event.target.closest(".generation-config-chips .generation-shift-pill");
      if (!shiftCard) return;

      if (shiftCard.classList.contains("static") || shiftCard.dataset.configAvailable === "true") {
        openConfigCreateModal(shiftCard);
        return;
      }

      openConfigEditModal(shiftCard);
    });

    generationModeSwitch?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-generation-mode]");
      if (!button) return;
      if (button.dataset.generationMode === activeGenerationMode) return;
      setGenerationMode(button.dataset.generationMode);
    });

    renderGenerationShiftPills();
    setGenerationMode("meta-justa");


    document.addEventListener("click", (event) => {
      if (!generationAssignMenu.hidden) {
        const clickedAssignTrigger = event.target.closest("[data-generation-assign-trigger]");
        if (!generationAssignMenu.contains(event.target) && !clickedAssignTrigger) {
          closeGenerationAssignMenu();
        }
      }
      if (!periodPickers.some((picker) => picker.contains(event.target))) {
        closeAllPeriodPickers();
      }

      dropdowns.forEach((dropdown) => {
        if (dropdown.contains(event.target)) return;
        closeDropdown(dropdown);
      });

      if (detailStoreDropdown && !detailStoreDropdown.contains(event.target)) {
        closeDetailStoreDropdown();
      }

      if (generationStoreDropdown && !generationStoreDropdown.contains(event.target)) {
        closeGenerationStoreDropdown();
      }

      if (generationWeekDropdown && !generationWeekDropdown.contains(event.target)) {
        closeGenerationWeekDropdown();
      }

      if (generationLibraryDropdown && !generationLibraryDropdown.contains(event.target)) {
        closeGenerationLibraryDropdown();
      }

      if (generationCopyDropdown && !generationCopyDropdown.contains(event.target)) {
        closeGenerationCopyDropdown();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeAllPeriodPickers();
      dropdowns.forEach((dropdown) => closeDropdown(dropdown));
      closeDetailStoreDropdown();
      closeGenerationStoreDropdown();
      closeGenerationWeekDropdown();
      closeGenerationLibraryDropdown();
      closeGenerationCopyDropdown();
      closeGenerationCreateModal();
    });
  
