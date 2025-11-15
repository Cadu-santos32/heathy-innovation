const XLSX = require("xlsx");
const fs = require("fs");


const workbook = XLSX.readFile("../db/Taco-4a-Edicao.xlsx");

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const raw = XLSX.utils.sheet_to_json(sheet, { header: "A" });

const alimentos = raw.map(linha => ({
  id: linha.A,
  nome: linha.B,
  calorias: linha.D,
  proteina: linha.F,
  carboidrato: linha.I,
  fibra: linha.J,
}));

fs.writeFileSync("alimentos.json", JSON.stringify(alimentos, null, 2));

console.log("Arquivo alimentos.json gerado com sucesso!");
