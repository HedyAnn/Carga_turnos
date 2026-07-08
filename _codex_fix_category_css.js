const fs = require('fs');
const path = 'D:/FOLLOWUP/Carga_turnos/CARGA_DE_TURNOS.css';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
`.generation-category-field input,
.generation-category-field textarea {
  width: 100%;
  border: 1px solid #cfd8e3;
  border-radius: 12px;
  background: #ffffff;
  color: #475569;
  font-size: 14px;
  outline: 0;
}`,
`.generation-category-field input,
.generation-category-field textarea {
  width: 100%;
  border: 1px solid #cfd8e3;
  border-radius: 12px;
  background: #ffffff;
  color: #475569;
  font-size: 14px;
  font-family: Inter, Arial, sans-serif;
  outline: 0;
}`
);

content = content.replace(
`.generation-category-cancel,
.generation-category-submit {
  min-width: 140px;
}`,
`.generation-category-cancel,
.generation-category-submit {
  min-width: 140px;
  height: 40px;
  padding: 0 24px;
  border-radius: 8px;
  font-family: Inter, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.generation-category-cancel {
  border: 1px solid #0f6f97;
  background: #ffffff;
  color: #0f6f97;
}

.generation-category-submit {
  border: 1px solid #0f6f97;
  background: #0f6f97;
  color: #ffffff;
}

.generation-category-cancel:hover {
  background: #f4fbff;
}

.generation-category-submit:hover {
  background: #0c6488;
}`
);

fs.writeFileSync(path, content, 'utf8');
