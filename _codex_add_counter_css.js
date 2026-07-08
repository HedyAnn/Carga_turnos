const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.css';
let css = fs.readFileSync(path, 'utf8');
if (!css.includes('.generation-category-counter')) {
  css = css.replace(
`.generation-category-field textarea {
  min-height: 78px;
  padding: 12px 14px;
  resize: vertical;
}
.generation-category-field input:focus,`,
`.generation-category-field textarea {
  min-height: 78px;
  padding: 12px 14px;
  resize: vertical;
}
.generation-category-counter {
  justify-self: end;
  margin-top: -2px;
  color: #7b8794;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
}
.generation-category-field input:focus,`
  );
}
fs.writeFileSync(path, css, 'utf8');
