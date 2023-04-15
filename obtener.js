const { meseros, propinas } = require('./data');

//Promise
function obtenerMeseros() {
  return new Promise((resolve, reject) => {
    resolve(meseros);
  });
}

function obtenerPropinas() {
  return new Promise((resolve, reject) => {
    resolve(propinas);
  });
}

module.exports = {
  obtenerMeseros,
  obtenerPropinas,
};
