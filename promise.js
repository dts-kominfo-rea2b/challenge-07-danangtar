const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((r) => {
    promiseTheaterIXX().then((dataIXX) => {
      var countIXX = countEmo(dataIXX, emosi);
      promiseTheaterVGC().then((dataVGC) => {
        var countVGC = countEmo(dataVGC, emosi);
        r(countIXX + countVGC);
      })
    });
  });
};

const countEmo = (data, emosi) => {
  var count = 0;
  data.forEach(film => {
    if(film.hasil == emosi)
      count++;
  });
  return count;
}

module.exports = {
  promiseOutput,
};
