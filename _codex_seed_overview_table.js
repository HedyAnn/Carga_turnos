const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.html';
let html = fs.readFileSync(path, 'utf8');
const replacement = `          <table class="coverage-table">
            <thead id="coverage-table-head">
              <tr>
                <th class="store-column">Tienda</th>
                <th><span>Semana</span>02-02-2025</th>
                <th><span>Semana</span>09-02-2025</th>
                <th><span>Semana</span>16-02-2025</th>
                <th><span>Semana</span>23-02-2025</th>
                <th><span>Semana</span>02-03-2025</th>
                <th class="status-column">Estado Cobertura</th>
              </tr>
            </thead>
            <tbody id="coverage-table-body">
              <tr>
                <td data-label="Tienda"><a href="#" data-store-detail="Arequipa">Arequipa</a></td>
                <td data-label="02/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="09/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="16/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="23/02/2025"><span class="status-pill partial"><span class="material-symbols-outlined">warning</span>85%</span></td>
                <td data-label="02/03/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="Estado Cobertura"><span class="status-pill partial summary"><span class="material-symbols-outlined">warning</span>Parcial</span></td>
              </tr>
              <tr>
                <td data-label="Tienda"><a href="#" data-store-detail="Baby Plane Las Condes">Baby Plane Las Condes</a></td>
                <td data-label="02/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="09/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="16/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="23/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="02/03/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="Estado Cobertura"><span class="status-pill complete summary"><span class="material-symbols-outlined">check_circle</span>Completa</span></td>
              </tr>
              <tr>
                <td data-label="Tienda"><a href="#" data-store-detail="Colloky Alto Las Condes">Colloky Alto Las Condes</a></td>
                <td data-label="02/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="09/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="16/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="23/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="02/03/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="Estado Cobertura"><span class="status-pill critical summary"><span class="material-symbols-outlined">cancel</span>Crítico</span></td>
              </tr>
              <tr>
                <td data-label="Tienda"><a href="#" data-store-detail="Colloky Antofagasta">Colloky Antofagasta</a></td>
                <td data-label="02/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="09/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="16/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="23/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="02/03/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="Estado Cobertura"><span class="status-pill complete summary"><span class="material-symbols-outlined">check_circle</span>Completa</span></td>
              </tr>
              <tr>
                <td data-label="Tienda"><a href="#" data-store-detail="Colloky Costanera Center">Colloky Costanera Center</a></td>
                <td data-label="02/02/2025"><span class="status-pill partial"><span class="material-symbols-outlined">warning</span>85%</span></td>
                <td data-label="09/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="16/02/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="23/02/2025"><span class="status-pill critical"><span class="material-symbols-outlined">cancel</span>20%</span></td>
                <td data-label="02/03/2025"><span class="status-pill complete"><span class="material-symbols-outlined">check_circle</span>100%</span></td>
                <td data-label="Estado Cobertura"><span class="status-pill partial summary"><span class="material-symbols-outlined">warning</span>Parcial</span></td>
              </tr>
            </tbody>
          </table>`;
html = html.replace(/<table class="coverage-table">[\s\S]*?<\/table>/, replacement);
fs.writeFileSync(path, html, 'utf8');
