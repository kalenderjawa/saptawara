/**
 * 📁saptawara
 * @desc Araning Dinten Ing Jawa
 */

const _SENEN = Symbol.for("senen");
const _SELASA = Symbol.for("selasa");
const _REBO = Symbol.for("rebo");
const _KEMIS = Symbol.for("kemis");
const _JEMAH = Symbol.for("jemah");
const _SEBTU = Symbol.for("sebtu");
const _AKAD = Symbol.for("akad");

const SENEN = { dino: "senen", urutan: 1 };
const SELASA = { dino: "selasa", urutan: 2 };
const REBO = { dino: "rebo", urutan: 3 };
const KEMIS = { dino: "kemis", urutan: 4 };
const JEMAH = { dino: "jemah", urutan: 5 };
const SEBTU = { dino: "sebtu", urutan: 6 };
const AKAD = { dino: "akad", urutan: 7 };

const DINTEN= new Map();

DINTEN.set(_SENEN, SENEN);
DINTEN.set(_SELASA, SELASA);
DINTEN.set(_REBO, REBO);
DINTEN.set(_KEMIS, KEMIS);
DINTEN.set(_JEMAH, JEMAH);
DINTEN.set(_SEBTU, SEBTU);
DINTEN.set(_AKAD, AKAD);

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
