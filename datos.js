//entidad mesero
const meseros = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "María García" },
  { id: 3, nombre: "Pedro López" },
  { id: 4, nombre: "Nelson Zambrano" },
  { id: 5, nombre: "Leonel Pico" },
];

//entidad transaccional propina
const propinas = [
  { id: 1, monto: 20, mesero_id: 1 },
  { id: 2, monto: 15, mesero_id: 1 },
  { id: 3, monto: 10, mesero_id: 2 },
  { id: 4, monto: 5, mesero_id: 3 },
  { id: 5, monto: 12, mesero_id: 2 },
  { id: 6, monto: 8, mesero_id: 4 },
  { id: 7, monto: 15, mesero_id: 5 },
  { id: 8, monto: 2, mesero_id: 4 },
];

module.exports = {
  meseros,
  propinas,
};
