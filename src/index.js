/**
 * 📁saptawara
 * @desc Araning Dinten Ing Jawa
 */

const _AKAD = Symbol.for("akad");
const _SENEN = Symbol.for("senen");
const _SELASA = Symbol.for("selasa");
const _REBO = Symbol.for("rebo");
const _KEMIS = Symbol.for("kemis");
const _JEMAH = Symbol.for("jemah");
const _SEBTU = Symbol.for("sebtu");

const SENEN = { dino: "senen", urutan: 1, bobot: 4};
const SELASA = { dino: "selasa", urutan: 2, bobot: 3 };
const REBO = { dino: "rebo", urutan: 3, bobot: 7 };
const KEMIS = { dino: "kemis", urutan: 4, bobot: 8 };
const JEMAH = { dino: "jemah", urutan: 5, bobot: 6 };
const SEBTU = { dino: "sebtu", urutan: 6, bobot: 9 };
const AKAD = { dino: "akad", urutan: 7, bobot: 5 };

const DINTEN= new Map();

DINTEN.set(_AKAD, AKAD);
DINTEN.set(_SENEN, SENEN);
DINTEN.set(_SELASA, SELASA);
DINTEN.set(_REBO, REBO);
DINTEN.set(_KEMIS, KEMIS);
DINTEN.set(_JEMAH, JEMAH);
DINTEN.set(_SEBTU, SEBTU);

const DINTEN_ARR = [SENEN, SELASA, REBO, KEMIS, JEMAH, SEBTU, AKAD];

export {
  _SENEN,
  _SELASA,
  _REBO,
  _KEMIS,
  _JEMAH,
  _SEBTU,
  _AKAD,
  DINTEN,
  DINTEN_ARR,
};
