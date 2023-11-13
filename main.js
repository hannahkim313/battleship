/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-Regular.ttf */ "./src/fonts/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SourceSans3-Regular.ttf */ "./src/fonts/SourceSans3-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/******************************************************************************/
/* Inspired by: https://www.joshwcomeau.com/css/custom-css-reset/
/******************************************************************************/

@font-face {
  font-family: 'Source Sans 3';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');
}

@font-face {
  font-family: 'Source Sans 3';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('ttf');
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('ttf');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: 'Inter', 'Source Sans Pro', 'Roboto', sans-serif;

  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}
`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,4BAA4B;EAC5B,0DAAoD;AACtD;;AAEA;EACE,4BAA4B;EAC5B,0DAA0D;AAC5D;;AAEA;EACE,qBAAqB;EACrB,0DAAqD;AACvD;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,6DAA6D;;EAE7D,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB","sourcesContent":["/******************************************************************************/\n/* Inspired by: https://www.joshwcomeau.com/css/custom-css-reset/\n/******************************************************************************/\n\n@font-face {\n  font-family: 'Source Sans 3';\n  src: url('../fonts/Inter-Regular.ttf') format('ttf');\n}\n\n@font-face {\n  font-family: 'Source Sans 3';\n  src: url('../fonts/SourceSans3-Regular.ttf') format('ttf');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../fonts/Roboto-Regular.ttf') format('ttf');\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Inter', 'Source Sans Pro', 'Roboto', sans-serif;\n\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/******************************************************************************/
/* Selectors for general elements start here.
/******************************************************************************/

:root {
  --color-text-1: #384351;
  --color-text-1-inverted: #ffffff;
  --color-brand-1: #3868a6;
  --color-brand-1a: #7295c2;
  --color-brand-1b: #dfe7f1;
  --color-brand-1c: #cdd5df;
  --color-brand-1d: #4c5a6d;
  --color-brand-1e: #61728a;
  --color-brand-2: #5abfbf;
  --color-brand-2a: #c2d8d8;
  --color-brand-3: #f2c335;
  --color-brand-4: #f2aa52;
  --color-brand-5: #d95252;
  --color-brand-5a: #daafaf50;
  --color-brand-5b: #d4a7a7;
  --color-neutral-1: #dfdfdf;
  --color-neutral-2: #d2d2d2;
  --color-neutral-3: #c6c6c6;
  --color-neutral-4: #b2b2b2;
}

body {
  color: var(--color-text-1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  overflow-y: auto;
}

a {
  text-decoration: none;
}

button {
  background: none;
  border: none;
}

button:hover {
  cursor: pointer;
}

/******************************************************************************/
/* Selectors for the header start here.
/******************************************************************************/

header {
  text-align: center;
  color: var(--color-text-1-inverted);
  background-color: var(--color-brand-1a);
  padding: 1rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.logo {
  width: 3rem;
}

/******************************************************************************/
/* Selectors for the main section start here.
/******************************************************************************/

main {
  padding: 3rem 0;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  justify-content: space-evenly;
}

/******************************************************************************/
/* Selectors for modals start here.
/******************************************************************************/

dialog {
  width: 350px;
  height: 150px;
  border: none;
  border-radius: 0.3rem;
  box-shadow:
    3px 3px 5px var(--color-neutral-4),
    -3px 3px 5px var(--color-neutral-4);
  margin: auto;
  top: 0;
  bottom: 0;
  display: none;
}

dialog[open] {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

dialog::backdrop {
  background-color: #3843513b;
}

dialog button {
  background-color: var(--color-neutral-1);
  padding: 0.1rem 1rem;
  border-radius: 0.2rem;
  transition: background-color 0.2s ease;
}

dialog button:hover {
  background-color: var(--color-neutral-2);
}

dialog button:active {
  background-color: var(--color-neutral-3);
}

dialog form:has(:nth-child(2)) {
  display: flex;
  gap: 2rem;
}

/******************************************************************************/
/* Selectors for the rotate modal start here.
/******************************************************************************/

dialog.rotate button {
  width: 7.3rem;
}

dialog.rotate .selected {
  color: white;
  background-color: var(--color-text-1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

dialog.rotate .selected:hover {
  background-color: var(--color-brand-1d);
}

dialog.rotate .selected:active {
  background-color: var(--color-brand-1e);
}

dialog.rotate .selected img {
  width: 1rem;
}

/******************************************************************************/
/* Selectors for the gameboards start here.
/******************************************************************************/

.gameboard-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.hidden {
  display: none;
}

h2 {
  width: 100%;
  text-align: center;
  color: var(--color-text-1-inverted);
  background-color: var(--color-brand-5);
  padding: 0.2rem;
  border: 0.3rem solid transparent;
  border-radius: 0.5rem;
}

h2.turn {
  border: 0.3rem solid var(--color-brand-3);
  box-shadow:
    1px 1px 3px var(--color-brand-5a),
    -1px 1px 3px var(--color-brand-5a);
}

.board {
  display: grid;
  grid-template-columns: repeat(11, 2rem);
  grid-template-rows: repeat(11, 2rem);
  justify-items: center;
  align-items: center;
  gap: 0.15rem;
}

.box:not(.filler) {
  width: 100%;
  height: 100%;
  background-color: var(--color-brand-1b);
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
}

.box.occupied {
  background-color: var(--color-neutral-2);
}

.box:disabled:hover {
  cursor: default;
}

.user .box:not(.filler):hover {
  cursor: default;
}

.gameboard-container:not(.user) .box:not(.filler):hover {
  background-color: var(--color-brand-1c);
}

.gameboard-container:not(.user) .box:not(.filler):disabled:hover {
  cursor: default;
  background-color: var(--color-brand-1b);
}

.gameboard-container:not(.user) .box:not(.filler):has(.miss):hover {
  cursor: default;
  background-color: var(--color-brand-1b);
}

.gameboard-container:not(.user) .box:not(.filler):has(.hit):hover {
  cursor: default;
  background-color: var(--color-neutral-2);
}

.marker {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}

.ship {
  background-color: var(--color-neutral-4);
}

.miss {
  background-color: var(--color-brand-1a);
}

.hit {
  background-color: var(--color-brand-5);
}

/******************************************************************************/
/* Selectors for the ship selection start here.
/******************************************************************************/

.board-pieces-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.box.placed {
  background-color: var(--color-brand-2a);
}

.pieces {
  display: flex;
  gap: 1rem;
}

.pieces img {
  width: 3rem;
}

.pieces > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.piece {
  padding: 0.5rem;
  border: 0.1rem solid transparent;
  border-radius: 50%;
  transition: border 0.2s ease;
  position: relative;
}

.piece:disabled {
  cursor: default;
}

.piece:not(:disabled):hover {
  border-color: var(--color-text-1);
}

.piece.active {
  border-color: var(--color-text-1);
}

.piece .check {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.piece .placed {
  opacity: 0.2;
}

.controls {
  display: flex;
  gap: 1rem;
}

.controls img {
  width: 2rem;
}

.controls > button {
  background-color: var(--color-neutral-2);
  padding: 0.2rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.controls > button:hover {
  background-color: var(--color-neutral-3);
}

.controls > button:active {
  background-color: var(--color-neutral-4);
}

/******************************************************************************/
/* Selectors for the footer start here.
/******************************************************************************/

footer {
  background-color: var(--color-brand-1a);
  padding: 1rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

footer a {
  color: var(--color-text-1-inverted);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

footer img {
  width: 1.5rem;
}

/******************************************************************************/
/* Media queries start here.
/******************************************************************************/

@media screen and (max-width: 850px) {
  main {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 1rem;
  }

  .user.gameboard-container {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .opponent.gameboard-container {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,uBAAuB;EACvB,gCAAgC;EAChC,wBAAwB;EACxB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,wBAAwB;EACxB,yBAAyB;EACzB,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,2BAA2B;EAC3B,yBAAyB;EACzB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,0BAA0B;EAC1B,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,kBAAkB;EAClB,mCAAmC;EACnC,uCAAuC;EACvC,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,6BAA6B;AAC/B;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB;;uCAEqC;EACrC,YAAY;EACZ,MAAM;EACN,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;EACxC,oBAAoB;EACpB,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,WAAW;AACb;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mCAAmC;EACnC,sCAAsC;EACtC,eAAe;EACf,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC;;sCAEoC;AACtC;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uCAAuC;EACvC,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;AACxC;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,kBAAkB;EAClB,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;AACT;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE,uCAAuC;EACvC,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA,+EAA+E;AAC/E;+EAC+E;;AAE/E;EACE;IACE,aAAa;IACb,2BAA2B;IAC3B,6BAA6B;IAC7B,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;AACF","sourcesContent":["/******************************************************************************/\n/* Selectors for general elements start here.\n/******************************************************************************/\n\n:root {\n  --color-text-1: #384351;\n  --color-text-1-inverted: #ffffff;\n  --color-brand-1: #3868a6;\n  --color-brand-1a: #7295c2;\n  --color-brand-1b: #dfe7f1;\n  --color-brand-1c: #cdd5df;\n  --color-brand-1d: #4c5a6d;\n  --color-brand-1e: #61728a;\n  --color-brand-2: #5abfbf;\n  --color-brand-2a: #c2d8d8;\n  --color-brand-3: #f2c335;\n  --color-brand-4: #f2aa52;\n  --color-brand-5: #d95252;\n  --color-brand-5a: #daafaf50;\n  --color-brand-5b: #d4a7a7;\n  --color-neutral-1: #dfdfdf;\n  --color-neutral-2: #d2d2d2;\n  --color-neutral-3: #c6c6c6;\n  --color-neutral-4: #b2b2b2;\n}\n\nbody {\n  color: var(--color-text-1);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  overflow-y: auto;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  background: none;\n  border: none;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n/******************************************************************************/\n/* Selectors for the header start here.\n/******************************************************************************/\n\nheader {\n  text-align: center;\n  color: var(--color-text-1-inverted);\n  background-color: var(--color-brand-1a);\n  padding: 1rem;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.logo {\n  width: 3rem;\n}\n\n/******************************************************************************/\n/* Selectors for the main section start here.\n/******************************************************************************/\n\nmain {\n  padding: 3rem 0;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n/******************************************************************************/\n/* Selectors for modals start here.\n/******************************************************************************/\n\ndialog {\n  width: 350px;\n  height: 150px;\n  border: none;\n  border-radius: 0.3rem;\n  box-shadow:\n    3px 3px 5px var(--color-neutral-4),\n    -3px 3px 5px var(--color-neutral-4);\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  display: none;\n}\n\ndialog[open] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\ndialog::backdrop {\n  background-color: #3843513b;\n}\n\ndialog button {\n  background-color: var(--color-neutral-1);\n  padding: 0.1rem 1rem;\n  border-radius: 0.2rem;\n  transition: background-color 0.2s ease;\n}\n\ndialog button:hover {\n  background-color: var(--color-neutral-2);\n}\n\ndialog button:active {\n  background-color: var(--color-neutral-3);\n}\n\ndialog form:has(:nth-child(2)) {\n  display: flex;\n  gap: 2rem;\n}\n\n/******************************************************************************/\n/* Selectors for the rotate modal start here.\n/******************************************************************************/\n\ndialog.rotate button {\n  width: 7.3rem;\n}\n\ndialog.rotate .selected {\n  color: white;\n  background-color: var(--color-text-1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\ndialog.rotate .selected:hover {\n  background-color: var(--color-brand-1d);\n}\n\ndialog.rotate .selected:active {\n  background-color: var(--color-brand-1e);\n}\n\ndialog.rotate .selected img {\n  width: 1rem;\n}\n\n/******************************************************************************/\n/* Selectors for the gameboards start here.\n/******************************************************************************/\n\n.gameboard-container {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.hidden {\n  display: none;\n}\n\nh2 {\n  width: 100%;\n  text-align: center;\n  color: var(--color-text-1-inverted);\n  background-color: var(--color-brand-5);\n  padding: 0.2rem;\n  border: 0.3rem solid transparent;\n  border-radius: 0.5rem;\n}\n\nh2.turn {\n  border: 0.3rem solid var(--color-brand-3);\n  box-shadow:\n    1px 1px 3px var(--color-brand-5a),\n    -1px 1px 3px var(--color-brand-5a);\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(11, 2rem);\n  grid-template-rows: repeat(11, 2rem);\n  justify-items: center;\n  align-items: center;\n  gap: 0.15rem;\n}\n\n.box:not(.filler) {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-brand-1b);\n  border-radius: 0.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.2s ease;\n}\n\n.box.occupied {\n  background-color: var(--color-neutral-2);\n}\n\n.box:disabled:hover {\n  cursor: default;\n}\n\n.user .box:not(.filler):hover {\n  cursor: default;\n}\n\n.gameboard-container:not(.user) .box:not(.filler):hover {\n  background-color: var(--color-brand-1c);\n}\n\n.gameboard-container:not(.user) .box:not(.filler):disabled:hover {\n  cursor: default;\n  background-color: var(--color-brand-1b);\n}\n\n.gameboard-container:not(.user) .box:not(.filler):has(.miss):hover {\n  cursor: default;\n  background-color: var(--color-brand-1b);\n}\n\n.gameboard-container:not(.user) .box:not(.filler):has(.hit):hover {\n  cursor: default;\n  background-color: var(--color-neutral-2);\n}\n\n.marker {\n  width: 0.8rem;\n  height: 0.8rem;\n  border-radius: 50%;\n}\n\n.ship {\n  background-color: var(--color-neutral-4);\n}\n\n.miss {\n  background-color: var(--color-brand-1a);\n}\n\n.hit {\n  background-color: var(--color-brand-5);\n}\n\n/******************************************************************************/\n/* Selectors for the ship selection start here.\n/******************************************************************************/\n\n.board-pieces-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n}\n\n.box.placed {\n  background-color: var(--color-brand-2a);\n}\n\n.pieces {\n  display: flex;\n  gap: 1rem;\n}\n\n.pieces img {\n  width: 3rem;\n}\n\n.pieces > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.piece {\n  padding: 0.5rem;\n  border: 0.1rem solid transparent;\n  border-radius: 50%;\n  transition: border 0.2s ease;\n  position: relative;\n}\n\n.piece:disabled {\n  cursor: default;\n}\n\n.piece:not(:disabled):hover {\n  border-color: var(--color-text-1);\n}\n\n.piece.active {\n  border-color: var(--color-text-1);\n}\n\n.piece .check {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.piece .placed {\n  opacity: 0.2;\n}\n\n.controls {\n  display: flex;\n  gap: 1rem;\n}\n\n.controls img {\n  width: 2rem;\n}\n\n.controls > button {\n  background-color: var(--color-neutral-2);\n  padding: 0.2rem;\n  border-radius: 50%;\n  transition: background-color 0.2s ease;\n}\n\n.controls > button:hover {\n  background-color: var(--color-neutral-3);\n}\n\n.controls > button:active {\n  background-color: var(--color-neutral-4);\n}\n\n/******************************************************************************/\n/* Selectors for the footer start here.\n/******************************************************************************/\n\nfooter {\n  background-color: var(--color-brand-1a);\n  padding: 1rem;\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n\nfooter a {\n  color: var(--color-text-1-inverted);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\nfooter img {\n  width: 1.5rem;\n}\n\n/******************************************************************************/\n/* Media queries start here.\n/******************************************************************************/\n\n@media screen and (max-width: 850px) {\n  main {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto;\n    gap: 1rem;\n  }\n\n  .user.gameboard-container {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n  }\n\n  .opponent.gameboard-container {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dom/game-page.js":
/*!**************************************!*\
  !*** ./src/scripts/dom/game-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeActivePlayer: () => (/* binding */ changeActivePlayer),
/* harmony export */   renderUserGameboard: () => (/* binding */ renderUserGameboard),
/* harmony export */   showGameOver: () => (/* binding */ showGameOver),
/* harmony export */   showGamePage: () => (/* binding */ showGamePage)
/* harmony export */ });
const showGamePage = () => {
  const gameboards = document.querySelectorAll(
    '.gameboard-container:not(:nth-child(1))'
  );
  gameboards.forEach((gameboard) => gameboard.classList.toggle('hidden'));
};

const renderUserGameboard = (state) => {
  state.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col !== 0) {
        const box = document.querySelector(
          `.user .box[data-row='${rowIndex + 1}'][data-col='${colIndex + 1}']`
        );
        box.classList.toggle('occupied');
        const marker = document.createElement('div');
        marker.classList.add('ship', 'marker');
        box.appendChild(marker);
      }
    });
  });
};

const changeActivePlayer = () => {
  const currentTurn = document.querySelector('.turn');
  const nextTurn = document.querySelector(
    '.gameboard-container:not(:nth-child(1)) h2:not(.turn)'
  );
  currentTurn.classList.toggle('turn');
  nextTurn.classList.toggle('turn');
};

const showGameOver = (winner) => {
  const restart = document.createElement('button');
  restart.type = 'submit';
  restart.classList.add('submit');
  restart.textContent = 'Restart';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(restart);
  const message = document.createElement('p');

  if (winner === 'user') {
    message.textContent = 'You won!';
  } else {
    message.textContent = 'You lost!';
  }

  const dialog = document.createElement('dialog');
  dialog.classList.add('game-over');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};




/***/ }),

/***/ "./src/scripts/dom/gameboards.js":
/*!***************************************!*\
  !*** ./src/scripts/dom/gameboards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableOpponentGameboard: () => (/* binding */ disableOpponentGameboard),
/* harmony export */   enableOpponentGameboard: () => (/* binding */ enableOpponentGameboard),
/* harmony export */   updateOpponentGameboard: () => (/* binding */ updateOpponentGameboard),
/* harmony export */   updateUserGameboard: () => (/* binding */ updateUserGameboard)
/* harmony export */ });
/* harmony import */ var _logic_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/helper-functions */ "./src/scripts/logic/helper-functions.js");


const updateUserGameboard = (state, coords) => {
  const [row, letter] = coords;
  const col = (0,_logic_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getColNum)(letter);
  const box = document.querySelector(
    `.user .box[data-row='${row}'][data-col='${col}']`
  );

  if (state[row - 1][col - 1] === 'miss' && box.childElementCount === 0) {
    const marker = document.createElement('div');
    marker.classList.add('miss', 'marker');
    box.appendChild(marker);
  } else {
    const marker = box.querySelector('.marker');
    marker.classList.toggle('ship');
    marker.classList.toggle('hit');
  }
};

const updateOpponentGameboard = (state, coords) => {
  const [row, letter] = coords;
  const col = (0,_logic_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getColNum)(letter);
  const box = document.querySelector(
    `.opponent .box[data-row='${row}'][data-col='${col}']`
  );

  if (state[row - 1][col - 1] === 'miss' && box.childElementCount === 0) {
    const marker = document.createElement('div');
    marker.classList.add('miss', 'marker');
    box.appendChild(marker);
  } else {
    box.classList.toggle('occupied');
    const marker = document.createElement('div');
    marker.classList.add('hit', 'marker');
    box.appendChild(marker);
  }
};

const disableOpponentGameboard = () => {
  const gameboardLabel = document.querySelector('.turn');
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.setAttribute('disabled', ''));
};

const enableOpponentGameboard = () => {
  const gameboardLabel = document.querySelector(
    '.gameboard-container:not(:nth-child(1)) h2:not(.turn)'
  );
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.removeAttribute('disabled'));
};




/***/ }),

/***/ "./src/scripts/dom/initial-gameboard.js":
/*!**********************************************!*\
  !*** ./src/scripts/dom/initial-gameboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeOnHover: () => (/* binding */ changeOnHover),
/* harmony export */   disableInitialGameboard: () => (/* binding */ disableInitialGameboard),
/* harmony export */   getDirection: () => (/* binding */ getDirection),
/* harmony export */   hideInitialGameboard: () => (/* binding */ hideInitialGameboard),
/* harmony export */   removeHoverEffect: () => (/* binding */ removeHoverEffect),
/* harmony export */   showSelectedBoxes: () => (/* binding */ showSelectedBoxes)
/* harmony export */ });
const getSelectedHorizontalBoxes = (box) => {
  const col = box.dataset.col;
  const length = document.querySelector('.piece.active').dataset.length;
  const colMax = Number(col) + Number(length);
  const boxes = [];
  let currBox = box;
  let count = Number(col);

  while (count < colMax) {
    boxes.push(currBox);

    if (
      currBox.nextElementSibling === null ||
      !currBox.nextElementSibling.classList.contains('box')
    ) {
      break;
    }

    currBox = currBox.nextElementSibling;
    count += 1;
  }

  return boxes;
};

const getSelectedVerticalBoxes = (box) => {
  const row = box.dataset.row;
  const length = document.querySelector('.piece.active').dataset.length;
  const rowMax = Number(row) + Number(length);
  const boxes = [];
  let currBox = box;
  let count = Number(row);

  while (count < rowMax) {
    boxes.push(currBox);

    const col = box.dataset.col;
    const nextBox = document.querySelector(
      `.box[data-row='${count + 1}'][data-col='${col}']`
    );

    if (nextBox === null || !nextBox.classList.contains('box')) {
      break;
    }

    currBox = nextBox;
    count += 1;
  }

  return boxes;
};

const validColor = 'var(--color-brand-2a)';

const showValid = (box) => (box.style.backgroundColor = validColor);

const invalidColor = 'var(--color-brand-5b)';

const showInvalid = (box) => (box.style.backgroundColor = invalidColor);

const showHorizontalBoxes = (box) => {
  const col = box.dataset.col;
  const length = document.querySelector('.piece.active').dataset.length;
  const colMax = Number(col) + Number(length);
  const boxes = getSelectedHorizontalBoxes(box);

  if (boxes.length < colMax - Number(col)) {
    boxes.forEach((box) => showInvalid(box));
  } else {
    boxes.forEach((box) => {
      if (box.classList.contains('placed')) {
        showInvalid(box);
      } else {
        showValid(box);
      }
    });
  }
};

const showVerticalBoxes = (box) => {
  const row = box.dataset.row;
  const length = document.querySelector('.piece.active').dataset.length;
  const rowMax = Number(row) + Number(length);
  const boxes = getSelectedVerticalBoxes(box);

  if (boxes.length < rowMax - Number(row)) {
    boxes.forEach((box) => showInvalid(box));
  } else {
    boxes.forEach((box) => {
      if (box.classList.contains('placed')) {
        showInvalid(box);
      } else {
        showValid(box);
      }
    });
  }
};

const getDirection = () => {
  if (document.querySelector('dialog.rotate .selected') === null) {
    return 'horizontal';
  }

  const classes = document.querySelector('dialog.rotate .selected').classList;

  if (classes.contains('horizontal')) {
    return 'horizontal';
  } else {
    return 'vertical';
  }
};

const showPlacedBoxes = () => {
  const placedBoxes = document.querySelectorAll(
    '.gameboard-container:nth-child(1) .box.placed'
  );
  placedBoxes.forEach((box) => showValid(box));
};

const changeOnHover = (box) => {
  showPlacedBoxes();
  const direction = getDirection();

  if (direction === 'horizontal') {
    showHorizontalBoxes(box);
  } else {
    showVerticalBoxes(box);
  }
};

const defaultColor = 'var(--color-brand-1b)';

const removeHoverEffect = () => {
  showPlacedBoxes();
  const boxes = document.querySelectorAll(
    '.gameboard-container:nth-child(1) .box:not(.filler, .placed)'
  );
  boxes.forEach((box) => (box.style.backgroundColor = defaultColor));
};

const showSelectedBoxes = (box, isVertical) => {
  if (isVertical) {
    const boxes = getSelectedVerticalBoxes(box);
    boxes.forEach((box) => box.classList.toggle('placed'));
  } else {
    const boxes = getSelectedHorizontalBoxes(box);
    boxes.forEach((box) => box.classList.toggle('placed'));
  }
};

const disableInitialGameboard = () => {
  const boxes = document.querySelectorAll(
    '.gameboard-container:nth-child(1) .box'
  );
  boxes.forEach((box) => box.setAttribute('disabled', ''));
};

const hideInitialGameboard = () => {
  const gameboard = document.querySelector('.gameboard-container');
  gameboard.classList.toggle('hidden');
};




/***/ }),

/***/ "./src/scripts/dom/pieces.js":
/*!***********************************!*\
  !*** ./src/scripts/dom/pieces.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleActivePiece: () => (/* binding */ toggleActivePiece),
/* harmony export */   updatePieces: () => (/* binding */ updatePieces)
/* harmony export */ });
/* harmony import */ var _img_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/check.svg */ "./src/img/check.svg");


const toggleActivePiece = (selectedPiece) => {
  const activePiece = document.querySelector('.piece.active');
  activePiece.classList.toggle('active');
  selectedPiece.classList.toggle('active');
};

const updatePieces = () => {
  const checkImg = document.createElement('img');
  checkImg.src = _img_check_svg__WEBPACK_IMPORTED_MODULE_0__;
  checkImg.alt = 'Check mark to denote this ship was placed';
  checkImg.classList.add('check');
  const activePiece = document.querySelector('.piece.active');
  activePiece.appendChild(checkImg);
  activePiece.setAttribute('disabled', '');
  activePiece.classList.toggle('active');
  activePiece.firstElementChild.classList.toggle('placed');
  const piecesLeft = document.querySelectorAll('.piece:not(:disabled)');

  if (piecesLeft.length > 0) {
    piecesLeft[0].classList.toggle('active');
  }
};




/***/ }),

/***/ "./src/scripts/dom/reset-modal.js":
/*!****************************************!*\
  !*** ./src/scripts/dom/reset-modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showResetModal: () => (/* binding */ showResetModal)
/* harmony export */ });
const showResetModal = () => {
  const yes = document.createElement('button');
  yes.type = 'submit';
  yes.classList.add('yes');
  yes.textContent = 'Yes';
  const no = document.createElement('button');
  no.type = 'button';
  no.classList.add('no');
  no.textContent = 'No';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(yes);
  form.appendChild(no);
  const message = document.createElement('p');
  message.textContent = 'Are you sure you want to reset the board?';
  const dialog = document.createElement('dialog');
  dialog.classList.add('reset');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};




/***/ }),

/***/ "./src/scripts/dom/rotate-modal.js":
/*!*****************************************!*\
  !*** ./src/scripts/dom/rotate-modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRotation: () => (/* binding */ setRotation),
/* harmony export */   showRotateModal: () => (/* binding */ showRotateModal)
/* harmony export */ });
/* harmony import */ var _img_check_inverted_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/check-inverted.svg */ "./src/img/check-inverted.svg");


const setRotation = (direction) => {
  const selected = document.querySelector('.rotate .selected');

  if (selected.classList.contains(direction)) {
    return;
  }

  const notSelected = document.querySelector(
    'dialog.rotate button:not(.selected)'
  );
  selected.lastElementChild.remove();
  selected.classList.toggle('selected');
  notSelected.classList.toggle('selected');
  const checkImg = document.createElement('img');
  checkImg.src = _img_check_inverted_svg__WEBPACK_IMPORTED_MODULE_0__;
  checkImg.alt = 'This option is selected';
  notSelected.appendChild(checkImg);
};

const showRotateModal = () => {
  if (document.querySelector('dialog.rotate') !== null) {
    const modal = document.querySelector('dialog.rotate');
    modal.showModal();

    return;
  }

  const checkImg = document.createElement('img');
  checkImg.src = _img_check_inverted_svg__WEBPACK_IMPORTED_MODULE_0__;
  checkImg.alt = 'This option is selected';
  const horizontal = document.createElement('button');
  horizontal.type = 'button';
  horizontal.classList.add('horizontal', 'selected');
  horizontal.textContent = 'Horizontal';
  horizontal.appendChild(checkImg);
  const vertical = document.createElement('button');
  vertical.type = 'button';
  vertical.classList.add('vertical');
  vertical.textContent = 'Vertical';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(horizontal);
  form.appendChild(vertical);
  const message = document.createElement('p');
  message.textContent = 'Select an option to rotate your ship';
  const dialog = document.createElement('dialog');
  dialog.classList.add('rotate');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};




/***/ }),

/***/ "./src/scripts/dom/start-game-modal.js":
/*!*********************************************!*\
  !*** ./src/scripts/dom/start-game-modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReady: () => (/* binding */ isReady),
/* harmony export */   resetStartGameModal: () => (/* binding */ resetStartGameModal),
/* harmony export */   showInvalid: () => (/* binding */ showInvalid),
/* harmony export */   showStartGame: () => (/* binding */ showStartGame)
/* harmony export */ });
const showStartGame = () => {
  if (document.querySelector('dialog.start-game') !== null) {
    const modal = document.querySelector('dialog.start-game');
    modal.showModal();

    return;
  }

  const start = document.createElement('button');
  start.type = 'submit';
  start.classList.add('start');
  start.textContent = 'Start';
  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.classList.add('cancel');
  cancel.textContent = 'Cancel';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(start);
  form.appendChild(cancel);
  const message = document.createElement('p');
  message.textContent = 'Are you ready to start the game?';
  const dialog = document.createElement('dialog');
  dialog.classList.add('start-game');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};

const isReady = () => {
  const pieces = document.querySelectorAll('.piece');
  return Array.from(pieces).every((piece) => piece.childElementCount > 1);
};

const showInvalid = () => {
  const message = document.querySelector('dialog.start-game p');
  message.textContent = 'Please place all of your ships.';
  const buttons = document.querySelectorAll('dialog.start-game button');
  buttons.forEach((button) => button.remove());
  const back = document.createElement('button');
  back.type = 'button';
  back.classList.add('back');
  back.textContent = 'Back';
  const form = document.querySelector('dialog.start-game form');
  form.appendChild(back);
};

const resetStartGameModal = () => {
  const message = document.querySelector('dialog.start-game p');
  message.textContent = 'Are you ready to start the game?';
  const back = document.querySelector('dialog.start-game .back');
  back.remove();
  const start = document.createElement('button');
  start.type = 'submit';
  start.classList.add('start');
  start.textContent = 'Start';
  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.classList.add('cancel');
  cancel.textContent = 'Cancel';
  const form = document.querySelector('dialog.start-game form');
  form.appendChild(start);
  form.appendChild(cancel);
};




/***/ }),

/***/ "./src/scripts/events/emit-events.js":
/*!*******************************************!*\
  !*** ./src/scripts/events/emit-events.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setup_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-events */ "./src/scripts/events/setup-events.js");
/* harmony import */ var _rotate_modal_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate-modal-events */ "./src/scripts/events/rotate-modal-events.js");
/* harmony import */ var _reset_modal_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-modal-events */ "./src/scripts/events/reset-modal-events.js");
/* harmony import */ var _start_game_modal_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-game-modal-events */ "./src/scripts/events/start-game-modal-events.js");
/* harmony import */ var _game_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-events */ "./src/scripts/events/game-events.js");
/* harmony import */ var _game_over_modal_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-over-modal-events */ "./src/scripts/events/game-over-modal-events.js");







const emitEvents = () => {
  (0,_setup_events__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_rotate_modal_events__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_reset_modal_events__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_start_game_modal_events__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_game_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_game_over_modal_events__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitEvents);


/***/ }),

/***/ "./src/scripts/events/game-events.js":
/*!*******************************************!*\
  !*** ./src/scripts/events/game-events.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/scripts/logic/game.js");
/* harmony import */ var _logic_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/helper-functions */ "./src/scripts/logic/helper-functions.js");



const emitGameEvents = () => {
  const main = document.querySelector('main');

  main.addEventListener('click', (e) => {
    if (
      e.target.closest('article') &&
      e.target.closest('article').classList.contains('opponent')
    ) {
      const row = e.target.closest('button').dataset.row;
      const colNum = e.target.closest('button').dataset.col;
      const col = (0,_logic_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getColLetter)(colNum);
      (0,_logic_game__WEBPACK_IMPORTED_MODULE_0__.playRound)([row, col]);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitGameEvents);


/***/ }),

/***/ "./src/scripts/events/game-over-modal-events.js":
/*!******************************************************!*\
  !*** ./src/scripts/events/game-over-modal-events.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const emitGameOverModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('submit')
    ) {
      location.reload();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitGameOverModalEvents);


/***/ }),

/***/ "./src/scripts/events/reset-modal-events.js":
/*!**************************************************!*\
  !*** ./src/scripts/events/reset-modal-events.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const emitResetModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('yes')
    ) {
      location.reload();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('no')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitResetModalEvents);


/***/ }),

/***/ "./src/scripts/events/rotate-modal-events.js":
/*!***************************************************!*\
  !*** ./src/scripts/events/rotate-modal-events.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_rotate_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/rotate-modal */ "./src/scripts/dom/rotate-modal.js");


const emitRotateModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('horizontal')
    ) {
      (0,_dom_rotate_modal__WEBPACK_IMPORTED_MODULE_0__.setRotation)('horizontal');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('vertical')
    ) {
      (0,_dom_rotate_modal__WEBPACK_IMPORTED_MODULE_0__.setRotation)('vertical');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitRotateModalEvents);


/***/ }),

/***/ "./src/scripts/events/setup-events.js":
/*!********************************************!*\
  !*** ./src/scripts/events/setup-events.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ship */ "./src/scripts/logic/ship.js");
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/game */ "./src/scripts/logic/game.js");
/* harmony import */ var _logic_helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/helper-functions */ "./src/scripts/logic/helper-functions.js");
/* harmony import */ var _dom_pieces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/pieces */ "./src/scripts/dom/pieces.js");
/* harmony import */ var _dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/initial-gameboard */ "./src/scripts/dom/initial-gameboard.js");
/* harmony import */ var _dom_rotate_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/rotate-modal */ "./src/scripts/dom/rotate-modal.js");
/* harmony import */ var _dom_reset_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/reset-modal */ "./src/scripts/dom/reset-modal.js");
/* harmony import */ var _dom_start_game_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/start-game-modal */ "./src/scripts/dom/start-game-modal.js");









const emitSetupEvents = () => {
  const shipPieces = document.querySelector('.pieces');

  shipPieces.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('piece')
    ) {
      const selectedPiece = e.target.closest('button');
      (0,_dom_pieces__WEBPACK_IMPORTED_MODULE_3__.toggleActivePiece)(selectedPiece);
    }
  });

  const controls = document.querySelector('.controls');

  controls.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('rotate')
    ) {
      (0,_dom_rotate_modal__WEBPACK_IMPORTED_MODULE_5__.showRotateModal)();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('reset')
    ) {
      (0,_dom_reset_modal__WEBPACK_IMPORTED_MODULE_6__.showResetModal)();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('start-game')
    ) {
      (0,_dom_start_game_modal__WEBPACK_IMPORTED_MODULE_7__.showStartGame)();
    }
  });

  const gameboard = document.querySelector('.board');

  gameboard.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box') &&
      !e.target.closest('button').classList.contains('filler')
    ) {
      const selectedPiece = document.querySelector('.piece.active');
      const length = Number(selectedPiece.dataset.length);
      const box = e.target.closest('button');
      const coords = [box.dataset.row, (0,_logic_helper_functions__WEBPACK_IMPORTED_MODULE_2__.getColLetter)(box.dataset.col)];
      const isVertical = (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.getDirection)() === 'vertical';

      if ((0,_logic_game__WEBPACK_IMPORTED_MODULE_1__.storeInput)((0,_logic_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length), coords, isVertical) === null) {
        return;
      }

      (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.showSelectedBoxes)(box, isVertical);
      (0,_dom_pieces__WEBPACK_IMPORTED_MODULE_3__.updatePieces)();
    }
  });

  gameboard.addEventListener('mouseover', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box') &&
      !e.target.closest('button').classList.contains('filler')
    ) {
      const piecesLeft = document.querySelectorAll('.piece:not(:disabled)');

      if (piecesLeft.length > 0) {
        (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.removeHoverEffect)();
        const box = e.target.closest('button');
        (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.changeOnHover)(box);
      } else {
        (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.disableInitialGameboard)();
      }
    }
  });

  gameboard.addEventListener('mouseout', () => (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.removeHoverEffect)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitSetupEvents);


/***/ }),

/***/ "./src/scripts/events/start-game-modal-events.js":
/*!*******************************************************!*\
  !*** ./src/scripts/events/start-game-modal-events.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/game */ "./src/scripts/logic/game.js");
/* harmony import */ var _dom_start_game_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/start-game-modal */ "./src/scripts/dom/start-game-modal.js");



const emitStartGameModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('start')
    ) {
      if ((0,_dom_start_game_modal__WEBPACK_IMPORTED_MODULE_1__.isReady)()) {
        (0,_logic_game__WEBPACK_IMPORTED_MODULE_0__.startGame)();
      } else {
        (0,_dom_start_game_modal__WEBPACK_IMPORTED_MODULE_1__.showInvalid)();
      }
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('back')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
      (0,_dom_start_game_modal__WEBPACK_IMPORTED_MODULE_1__.resetStartGameModal)();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('cancel')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitStartGameModalEvents);


/***/ }),

/***/ "./src/scripts/logic/game.js":
/*!***********************************!*\
  !*** ./src/scripts/logic/game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playRound: () => (/* binding */ playRound),
/* harmony export */   startGame: () => (/* binding */ startGame),
/* harmony export */   storeInput: () => (/* binding */ storeInput)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/logic/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/logic/gameboard.js");
/* harmony import */ var _dom_game_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/game-page */ "./src/scripts/dom/game-page.js");
/* harmony import */ var _dom_gameboards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/gameboards */ "./src/scripts/dom/gameboards.js");
/* harmony import */ var _dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/initial-gameboard */ "./src/scripts/dom/initial-gameboard.js");






const user = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
const userGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

const startGame = () => {
  (0,_dom_initial_gameboard__WEBPACK_IMPORTED_MODULE_4__.hideInitialGameboard)();
  (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.showGamePage)();
  (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.renderUserGameboard)(userGameboard.getState());
  computerGameboard.placeRandom();
};

const storeInput = (ship, coords, isVertical) => {
  return userGameboard.placeShip(ship, coords, isVertical);
};

const playRound = (coords) => {
  const userAttack = user.attack(computerGameboard, coords);

  if (userAttack !== null) {
    (0,_dom_gameboards__WEBPACK_IMPORTED_MODULE_3__.updateOpponentGameboard)(computerGameboard.getState(), coords);
    (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.changeActivePlayer)();

    if (computerGameboard.isAllSunk()) {
      (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.showGameOver)('user');

      return;
    }

    (0,_dom_gameboards__WEBPACK_IMPORTED_MODULE_3__.disableOpponentGameboard)();

    setTimeout(() => {
      computer.attack(userGameboard);
      (0,_dom_gameboards__WEBPACK_IMPORTED_MODULE_3__.updateUserGameboard)(userGameboard.getState(), computer.getLastMove());
      (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.changeActivePlayer)();
    }, 2000);

    setTimeout(() => {
      if (userGameboard.isAllSunk()) {
        (0,_dom_game_page__WEBPACK_IMPORTED_MODULE_2__.showGameOver)('opponent');

        return;
      }

      (0,_dom_gameboards__WEBPACK_IMPORTED_MODULE_3__.enableOpponentGameboard)();
    }, 2000);
  }
};




/***/ }),

/***/ "./src/scripts/logic/gameboard.js":
/*!****************************************!*\
  !*** ./src/scripts/logic/gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./src/scripts/logic/helper-functions.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/scripts/logic/ship.js");



const Gameboard = () => {
  const ships = [];
  const state = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const isEmpty = (coords, shipLength, isVertical) => {
    const [row, letter] = coords;
    const col = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getColNum)(letter);

    if (isVertical) {
      const positions = [];
      let count = Number(row);

      while (count < Number(row) + shipLength) {
        positions.push(state[count - 1][col - 1]);
        count += 1;
      }

      return positions.every((position) => position === 0);
    }

    const positions = state[row - 1].slice(col - 1, col - 1 + shipLength);

    return positions.every((position) => position === 0);
  };

  const placeShip = (ship, coords, isVertical = false) => {
    const [row, letter] = coords;
    const col = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getColNum)(letter);

    if (isVertical) {
      if (row - 1 + ship.size() > 10 || !isEmpty(coords, ship.size(), true)) {
        return null;
      }

      ships.push(ship);
      let count = Number(row);

      while (count < Number(row) + ship.size()) {
        state[count - 1][col - 1] = ship;
        count += 1;
      }
    } else {
      if (col - 1 + ship.size() > 10 || !isEmpty(coords, ship.size(), false)) {
        return null;
      }

      ships.push(ship);
      state[row - 1].fill(ship, col - 1, col - 1 + ship.size());
    }
  };

  const getRandomDirection = () => {
    const num = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomNum)(1, 3);

    if (num === 1) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  };

  const placeRandom = () => {
    const movesMade = [];
    const ships = [(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5), (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)];
    let coords = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.generateCoords)(movesMade);

    ships.forEach((ship) => {
      const isVertical = getRandomDirection() === 'vertical';

      while (placeShip(ship, coords, isVertical) === null) {
        coords = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.generateCoords)(movesMade);
      }

      movesMade.push(coords);
    });
  };

  const receiveAttack = (coords) => {
    const [row, letter] = coords;
    const col = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getColNum)(letter);
    const position = state[row - 1][col - 1];

    if (position === 'hit' || position === 'miss') {
      return null;
    } else if (position === 0) {
      state[row - 1][col - 1] = 'miss';
    } else {
      const ship = state[row - 1][col - 1];
      ship.hit();
      state[row - 1][col - 1] = 'hit';
    }
  };

  const isAllSunk = () => ships.every((ship) => ship.isSunk());

  const getState = () => state.map((row) => row.slice());

  return {
    placeShip,
    placeRandom,
    receiveAttack,
    isAllSunk,
    getState,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/scripts/logic/helper-functions.js":
/*!***********************************************!*\
  !*** ./src/scripts/logic/helper-functions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCoords: () => (/* binding */ generateCoords),
/* harmony export */   getColLetter: () => (/* binding */ getColLetter),
/* harmony export */   getColNum: () => (/* binding */ getColNum),
/* harmony export */   getRandomNum: () => (/* binding */ getRandomNum)
/* harmony export */ });
const getColNum = (letter) => {
  const letters = 'abcdefghij';

  return `${letters.indexOf(letter.toLowerCase()) + 1}`;
};

const getColLetter = (colNum) => {
  const letters = 'abcdefghij';

  return letters[colNum - 1];
};

const getRandomNum = (minInclusive, maxExclusive) => {
  const min = Math.ceil(minInclusive);
  const max = Math.floor(maxExclusive);

  return Math.floor(Math.random() * (max - min) + min);
};

const generateCoords = (movesMade = []) => {
  const letters = 'abcdefghij';
  const coords = [`${getRandomNum(1, 10)}`, letters[getRandomNum(1, 10)]];

  if (movesMade.length === 0) {
    movesMade.push(coords);

    return coords;
  }

  if (
    movesMade.some((move) => JSON.stringify(move) === JSON.stringify(coords))
  ) {
    return generateCoords(movesMade);
  }

  movesMade.push(coords);

  return coords;
};




/***/ }),

/***/ "./src/scripts/logic/player.js":
/*!*************************************!*\
  !*** ./src/scripts/logic/player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ "./src/scripts/logic/helper-functions.js");


const Player = () => {
  const movesMade = [];

  const getLastMove = () => movesMade[movesMade.length - 1];

  const attack = (OppBoard, coords = null) => {
    if (coords === null) {
      return OppBoard.receiveAttack((0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.generateCoords)(movesMade));
    }

    return OppBoard.receiveAttack(coords);
  };

  return {
    getLastMove,
    attack,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/scripts/logic/ship.js":
/*!***********************************!*\
  !*** ./src/scripts/logic/ship.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  let hits = 0;

  const hit = () => (hits += 1);

  const isSunk = () => hits === length;

  const size = () => length;

  return {
    hit,
    isSunk,
    size,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/fonts/Inter-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Inter-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ca9ba81e9dcaa12b3a1.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/fonts/SourceSans3-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/SourceSans3-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5f259bc2699f6304f9a.ttf";

/***/ }),

/***/ "./src/img/check-inverted.svg":
/*!************************************!*\
  !*** ./src/img/check-inverted.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b97628acb7da2b194d7.svg";

/***/ }),

/***/ "./src/img/check.svg":
/*!***************************!*\
  !*** ./src/img/check.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d59cea3f1c6034d7acf4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _events_emit_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/emit-events */ "./src/scripts/events/emit-events.js");




(0,_events_emit_events__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyRkFBMkYsTUFBTSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sUUFBUSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFFBQVEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sUUFBUSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxRQUFRLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sUUFBUSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxRQUFRLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0scVBBQXFQLDRCQUE0QixxQ0FBcUMsNkJBQTZCLDhCQUE4Qiw4QkFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxlQUFlLElBQUk7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLMEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQzs7Ozs7Ozs7Ozs7Ozs7O0FDekIzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNBO0FBQ29COztBQUU5QywrREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS9nYW1lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS9nYW1lYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20vaW5pdGlhbC1nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS9waWVjZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS9yZXNldC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tL3JvdGF0ZS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tL3N0YXJ0LWdhbWUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2V2ZW50cy9lbWl0LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZXZlbnRzL2dhbWUtZXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ldmVudHMvZ2FtZS1vdmVyLW1vZGFsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZXZlbnRzL3Jlc2V0LW1vZGFsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZXZlbnRzL3JvdGF0ZS1tb2RhbC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2V2ZW50cy9zZXR1cC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2V2ZW50cy9zdGFydC1nYW1lLW1vZGFsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbG9naWMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9sb2dpYy9oZWxwZXItZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9sb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU291cmNlU2FuczMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEluc3BpcmVkIGJ5OiBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyAzJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgMyc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHRmJyk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsICdTb3VyY2UgU2FucyBQcm8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnZpZGVvLFxuY2FudmFzLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4jcm9vdCxcbiNfX25leHQge1xuICBpc29sYXRpb246IGlzb2xhdGU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtFQUErRTtBQUMvRTsrRUFDK0U7O0FBRS9FO0VBQ0UsNEJBQTRCO0VBQzVCLDBEQUFvRDtBQUN0RDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQXFEO0FBQ3ZEOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZEQUE2RDs7RUFFN0QsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBJbnNwaXJlZCBieTogaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIDMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0ludGVyLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIDMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1NvdXJjZVNhbnMzLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAnU291cmNlIFNhbnMgUHJvJywgJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogU2VsZWN0b3JzIGZvciBnZW5lcmFsIGVsZW1lbnRzIHN0YXJ0IGhlcmUuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG46cm9vdCB7XG4gIC0tY29sb3ItdGV4dC0xOiAjMzg0MzUxO1xuICAtLWNvbG9yLXRleHQtMS1pbnZlcnRlZDogI2ZmZmZmZjtcbiAgLS1jb2xvci1icmFuZC0xOiAjMzg2OGE2O1xuICAtLWNvbG9yLWJyYW5kLTFhOiAjNzI5NWMyO1xuICAtLWNvbG9yLWJyYW5kLTFiOiAjZGZlN2YxO1xuICAtLWNvbG9yLWJyYW5kLTFjOiAjY2RkNWRmO1xuICAtLWNvbG9yLWJyYW5kLTFkOiAjNGM1YTZkO1xuICAtLWNvbG9yLWJyYW5kLTFlOiAjNjE3MjhhO1xuICAtLWNvbG9yLWJyYW5kLTI6ICM1YWJmYmY7XG4gIC0tY29sb3ItYnJhbmQtMmE6ICNjMmQ4ZDg7XG4gIC0tY29sb3ItYnJhbmQtMzogI2YyYzMzNTtcbiAgLS1jb2xvci1icmFuZC00OiAjZjJhYTUyO1xuICAtLWNvbG9yLWJyYW5kLTU6ICNkOTUyNTI7XG4gIC0tY29sb3ItYnJhbmQtNWE6ICNkYWFmYWY1MDtcbiAgLS1jb2xvci1icmFuZC01YjogI2Q0YTdhNztcbiAgLS1jb2xvci1uZXV0cmFsLTE6ICNkZmRmZGY7XG4gIC0tY29sb3ItbmV1dHJhbC0yOiAjZDJkMmQyO1xuICAtLWNvbG9yLW5ldXRyYWwtMzogI2M2YzZjNjtcbiAgLS1jb2xvci1uZXV0cmFsLTQ6ICNiMmIyYjI7XG59XG5cbmJvZHkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTZWxlY3RvcnMgZm9yIHRoZSBoZWFkZXIgc3RhcnQgaGVyZS5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMS1pbnZlcnRlZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTFhKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDNyZW07XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTZWxlY3RvcnMgZm9yIHRoZSBtYWluIHNlY3Rpb24gc3RhcnQgaGVyZS5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbm1haW4ge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNlbGVjdG9ycyBmb3IgbW9kYWxzIHN0YXJ0IGhlcmUuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5kaWFsb2cge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBib3gtc2hhZG93OlxuICAgIDNweCAzcHggNXB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNCksXG4gICAgLTNweCAzcHggNXB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNCk7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpYWxvZ1tvcGVuXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDM1MTNiO1xufVxuXG5kaWFsb2cgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0xKTtcbiAgcGFkZGluZzogMC4xcmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbmRpYWxvZyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIpO1xufVxuXG5kaWFsb2cgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMyk7XG59XG5cbmRpYWxvZyBmb3JtOmhhcyg6bnRoLWNoaWxkKDIpKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNlbGVjdG9ycyBmb3IgdGhlIHJvdGF0ZSBtb2RhbCBzdGFydCBoZXJlLlxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZGlhbG9nLnJvdGF0ZSBidXR0b24ge1xuICB3aWR0aDogNy4zcmVtO1xufVxuXG5kaWFsb2cucm90YXRlIC5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG5kaWFsb2cucm90YXRlIC5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTFkKTtcbn1cblxuZGlhbG9nLnJvdGF0ZSAuc2VsZWN0ZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWUpO1xufVxuXG5kaWFsb2cucm90YXRlIC5zZWxlY3RlZCBpbWcge1xuICB3aWR0aDogMXJlbTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIFNlbGVjdG9ycyBmb3IgdGhlIGdhbWVib2FyZHMgc3RhcnQgaGVyZS5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMS1pbnZlcnRlZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTUpO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlcjogMC4zcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmgyLnR1cm4ge1xuICBib3JkZXI6IDAuM3JlbSBzb2xpZCB2YXIoLS1jb2xvci1icmFuZC0zKTtcbiAgYm94LXNoYWRvdzpcbiAgICAxcHggMXB4IDNweCB2YXIoLS1jb2xvci1icmFuZC01YSksXG4gICAgLTFweCAxcHggM3B4IHZhcigtLWNvbG9yLWJyYW5kLTVhKTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDJyZW0pO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMnJlbSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjE1cmVtO1xufVxuXG4uYm94Om5vdCguZmlsbGVyKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTFiKTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5ib3gub2NjdXBpZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIpO1xufVxuXG4uYm94OmRpc2FibGVkOmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udXNlciAuYm94Om5vdCguZmlsbGVyKTpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmdhbWVib2FyZC1jb250YWluZXI6bm90KC51c2VyKSAuYm94Om5vdCguZmlsbGVyKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTFjKTtcbn1cblxuLmdhbWVib2FyZC1jb250YWluZXI6bm90KC51c2VyKSAuYm94Om5vdCguZmlsbGVyKTpkaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWIpO1xufVxuXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcjpub3QoLnVzZXIpIC5ib3g6bm90KC5maWxsZXIpOmhhcygubWlzcyk6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTFiKTtcbn1cblxuLmdhbWVib2FyZC1jb250YWluZXI6bm90KC51c2VyKSAuYm94Om5vdCguZmlsbGVyKTpoYXMoLmhpdCk6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMik7XG59XG5cbi5tYXJrZXIge1xuICB3aWR0aDogMC44cmVtO1xuICBoZWlnaHQ6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNCk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWEpO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtNSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTZWxlY3RvcnMgZm9yIHRoZSBzaGlwIHNlbGVjdGlvbiBzdGFydCBoZXJlLlxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmJvYXJkLXBpZWNlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG5cbi5ib3gucGxhY2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMmEpO1xufVxuXG4ucGllY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucGllY2VzIGltZyB7XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4ucGllY2VzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpZWNlIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5waWVjZTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnBpZWNlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xufVxuXG4ucGllY2UuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xufVxuXG4ucGllY2UgLmNoZWNrIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnBpZWNlIC5wbGFjZWQge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLmNvbnRyb2xzIGltZyB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY29udHJvbHMgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIpO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5jb250cm9scyA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMyk7XG59XG5cbi5jb250cm9scyA+IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogU2VsZWN0b3JzIGZvciB0aGUgZm9vdGVyIHN0YXJ0IGhlcmUuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xYSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDMgLyA0O1xufVxuXG5mb290ZXIgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEtaW52ZXJ0ZWQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbmZvb3RlciBpbWcge1xuICB3aWR0aDogMS41cmVtO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogTWVkaWEgcXVlcmllcyBzdGFydCBoZXJlLlxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgLnVzZXIuZ2FtZWJvYXJkLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgfVxuXG4gIC5vcHBvbmVudC5nYW1lYm9hcmQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtFQUErRTtBQUMvRTsrRUFDK0U7O0FBRS9FO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLCtFQUErRTtBQUMvRTsrRUFDK0U7O0FBRS9FO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLCtFQUErRTtBQUMvRTsrRUFDK0U7O0FBRS9FO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQSwrRUFBK0U7QUFDL0U7K0VBQytFOztBQUUvRTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQjs7dUNBRXFDO0VBQ3JDLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsK0VBQStFO0FBQy9FOytFQUMrRTs7QUFFL0U7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSwrRUFBK0U7QUFDL0U7K0VBQytFOztBQUUvRTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDOztzQ0FFb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBLCtFQUErRTtBQUMvRTsrRUFDK0U7O0FBRS9FO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUEsK0VBQStFO0FBQy9FOytFQUMrRTs7QUFFL0U7RUFDRSx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSwrRUFBK0U7QUFDL0U7K0VBQytFOztBQUUvRTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogU2VsZWN0b3JzIGZvciBnZW5lcmFsIGVsZW1lbnRzIHN0YXJ0IGhlcmUuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXRleHQtMTogIzM4NDM1MTtcXG4gIC0tY29sb3ItdGV4dC0xLWludmVydGVkOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1icmFuZC0xOiAjMzg2OGE2O1xcbiAgLS1jb2xvci1icmFuZC0xYTogIzcyOTVjMjtcXG4gIC0tY29sb3ItYnJhbmQtMWI6ICNkZmU3ZjE7XFxuICAtLWNvbG9yLWJyYW5kLTFjOiAjY2RkNWRmO1xcbiAgLS1jb2xvci1icmFuZC0xZDogIzRjNWE2ZDtcXG4gIC0tY29sb3ItYnJhbmQtMWU6ICM2MTcyOGE7XFxuICAtLWNvbG9yLWJyYW5kLTI6ICM1YWJmYmY7XFxuICAtLWNvbG9yLWJyYW5kLTJhOiAjYzJkOGQ4O1xcbiAgLS1jb2xvci1icmFuZC0zOiAjZjJjMzM1O1xcbiAgLS1jb2xvci1icmFuZC00OiAjZjJhYTUyO1xcbiAgLS1jb2xvci1icmFuZC01OiAjZDk1MjUyO1xcbiAgLS1jb2xvci1icmFuZC01YTogI2RhYWZhZjUwO1xcbiAgLS1jb2xvci1icmFuZC01YjogI2Q0YTdhNztcXG4gIC0tY29sb3ItbmV1dHJhbC0xOiAjZGZkZmRmO1xcbiAgLS1jb2xvci1uZXV0cmFsLTI6ICNkMmQyZDI7XFxuICAtLWNvbG9yLW5ldXRyYWwtMzogI2M2YzZjNjtcXG4gIC0tY29sb3ItbmV1dHJhbC00OiAjYjJiMmIyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIFNlbGVjdG9ycyBmb3IgdGhlIGhlYWRlciBzdGFydCBoZXJlLlxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEtaW52ZXJ0ZWQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWEpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogU2VsZWN0b3JzIGZvciB0aGUgbWFpbiBzZWN0aW9uIHN0YXJ0IGhlcmUuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBTZWxlY3RvcnMgZm9yIG1vZGFscyBzdGFydCBoZXJlLlxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuZGlhbG9nIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBib3gtc2hhZG93OlxcbiAgICAzcHggM3B4IDVweCB2YXIoLS1jb2xvci1uZXV0cmFsLTQpLFxcbiAgICAtM3B4IDNweCA1cHggdmFyKC0tY29sb3ItbmV1dHJhbC00KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpYWxvZ1tvcGVuXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MzUxM2I7XFxufVxcblxcbmRpYWxvZyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0xKTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbmRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0yKTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0zKTtcXG59XFxuXFxuZGlhbG9nIGZvcm06aGFzKDpudGgtY2hpbGQoMikpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogU2VsZWN0b3JzIGZvciB0aGUgcm90YXRlIG1vZGFsIHN0YXJ0IGhlcmUuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5kaWFsb2cucm90YXRlIGJ1dHRvbiB7XFxuICB3aWR0aDogNy4zcmVtO1xcbn1cXG5cXG5kaWFsb2cucm90YXRlIC5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5kaWFsb2cucm90YXRlIC5zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xZCk7XFxufVxcblxcbmRpYWxvZy5yb3RhdGUgLnNlbGVjdGVkOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xZSk7XFxufVxcblxcbmRpYWxvZy5yb3RhdGUgLnNlbGVjdGVkIGltZyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBTZWxlY3RvcnMgZm9yIHRoZSBnYW1lYm9hcmRzIHN0YXJ0IGhlcmUuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xLWludmVydGVkKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTUpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbmgyLnR1cm4ge1xcbiAgYm9yZGVyOiAwLjNyZW0gc29saWQgdmFyKC0tY29sb3ItYnJhbmQtMyk7XFxuICBib3gtc2hhZG93OlxcbiAgICAxcHggMXB4IDNweCB2YXIoLS1jb2xvci1icmFuZC01YSksXFxuICAgIC0xcHggMXB4IDNweCB2YXIoLS1jb2xvci1icmFuZC01YSk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDJyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDJyZW0pO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4xNXJlbTtcXG59XFxuXFxuLmJveDpub3QoLmZpbGxlcikge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xYik7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi5ib3gub2NjdXBpZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC0yKTtcXG59XFxuXFxuLmJveDpkaXNhYmxlZDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi51c2VyIC5ib3g6bm90KC5maWxsZXIpOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmdhbWVib2FyZC1jb250YWluZXI6bm90KC51c2VyKSAuYm94Om5vdCguZmlsbGVyKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xYyk7XFxufVxcblxcbi5nYW1lYm9hcmQtY29udGFpbmVyOm5vdCgudXNlcikgLmJveDpub3QoLmZpbGxlcik6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWIpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcjpub3QoLnVzZXIpIC5ib3g6bm90KC5maWxsZXIpOmhhcygubWlzcyk6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWIpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcjpub3QoLnVzZXIpIC5ib3g6bm90KC5maWxsZXIpOmhhcyguaGl0KTpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIpO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gIHdpZHRoOiAwLjhyZW07XFxuICBoZWlnaHQ6IDAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC00KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJhbmQtMWEpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTUpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIFNlbGVjdG9ycyBmb3IgdGhlIHNoaXAgc2VsZWN0aW9uIHN0YXJ0IGhlcmUuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uYm9hcmQtcGllY2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ib3gucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTJhKTtcXG59XFxuXFxuLnBpZWNlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucGllY2VzIGltZyB7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLnBpZWNlcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5waWVjZSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5waWVjZTpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5waWVjZTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxufVxcblxcbi5waWVjZS5hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbn1cXG5cXG4ucGllY2UgLmNoZWNrIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnBpZWNlIC5wbGFjZWQge1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRyb2xzIGltZyB7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmNvbnRyb2xzID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMik7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvbnRyb2xzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtMyk7XFxufVxcblxcbi5jb250cm9scyA+IGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC00KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBTZWxlY3RvcnMgZm9yIHRoZSBmb290ZXIgc3RhcnQgaGVyZS5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xYSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xLWludmVydGVkKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE1lZGlhIHF1ZXJpZXMgc3RhcnQgaGVyZS5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLnVzZXIuZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgfVxcblxcbiAgLm9wcG9uZW50LmdhbWVib2FyZC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaG93R2FtZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuZ2FtZWJvYXJkLWNvbnRhaW5lcjpub3QoOm50aC1jaGlsZCgxKSknXG4gICk7XG4gIGdhbWVib2FyZHMuZm9yRWFjaCgoZ2FtZWJvYXJkKSA9PiBnYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykpO1xufTtcblxuY29uc3QgcmVuZGVyVXNlckdhbWVib2FyZCA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgIGlmIChjb2wgIT09IDApIHtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnVzZXIgLmJveFtkYXRhLXJvdz0nJHtyb3dJbmRleCArIDF9J11bZGF0YS1jb2w9JyR7Y29sSW5kZXggKyAxfSddYFxuICAgICAgICApO1xuICAgICAgICBib3guY2xhc3NMaXN0LnRvZ2dsZSgnb2NjdXBpZWQnKTtcbiAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdzaGlwJywgJ21hcmtlcicpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUdXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4nKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuZ2FtZWJvYXJkLWNvbnRhaW5lcjpub3QoOm50aC1jaGlsZCgxKSkgaDI6bm90KC50dXJuKSdcbiAgKTtcbiAgY3VycmVudFR1cm4uY2xhc3NMaXN0LnRvZ2dsZSgndHVybicpO1xuICBuZXh0VHVybi5jbGFzc0xpc3QudG9nZ2xlKCd0dXJuJyk7XG59O1xuXG5jb25zdCBzaG93R2FtZU92ZXIgPSAod2lubmVyKSA9PiB7XG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzdGFydC50eXBlID0gJ3N1Ym1pdCc7XG4gIHJlc3RhcnQuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gIHJlc3RhcnQudGV4dENvbnRlbnQgPSAnUmVzdGFydCc7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uYWN0aW9uID0gJyc7XG4gIGZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocmVzdGFydCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaWYgKHdpbm5lciA9PT0gJ3VzZXInKSB7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdZb3Ugd29uISc7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdZb3UgbG9zdCEnO1xuICB9XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXInKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGRpYWxvZyk7XG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmV4cG9ydCB7IHNob3dHYW1lUGFnZSwgcmVuZGVyVXNlckdhbWVib2FyZCwgY2hhbmdlQWN0aXZlUGxheWVyLCBzaG93R2FtZU92ZXIgfTtcbiIsImltcG9ydCB7IGdldENvbE51bSB9IGZyb20gJy4uL2xvZ2ljL2hlbHBlci1mdW5jdGlvbnMnO1xuXG5jb25zdCB1cGRhdGVVc2VyR2FtZWJvYXJkID0gKHN0YXRlLCBjb29yZHMpID0+IHtcbiAgY29uc3QgW3JvdywgbGV0dGVyXSA9IGNvb3JkcztcbiAgY29uc3QgY29sID0gZ2V0Q29sTnVtKGxldHRlcik7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC51c2VyIC5ib3hbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWBcbiAgKTtcblxuICBpZiAoc3RhdGVbcm93IC0gMV1bY29sIC0gMV0gPT09ICdtaXNzJyAmJiBib3guY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXJrZXIuY2xhc3NMaXN0LmFkZCgnbWlzcycsICdtYXJrZXInKTtcbiAgICBib3guYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXJrZXIgPSBib3gucXVlcnlTZWxlY3RvcignLm1hcmtlcicpO1xuICAgIG1hcmtlci5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwJyk7XG4gICAgbWFya2VyLmNsYXNzTGlzdC50b2dnbGUoJ2hpdCcpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVPcHBvbmVudEdhbWVib2FyZCA9IChzdGF0ZSwgY29vcmRzKSA9PiB7XG4gIGNvbnN0IFtyb3csIGxldHRlcl0gPSBjb29yZHM7XG4gIGNvbnN0IGNvbCA9IGdldENvbE51bShsZXR0ZXIpO1xuICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAub3Bwb25lbnQgLmJveFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYFxuICApO1xuXG4gIGlmIChzdGF0ZVtyb3cgLSAxXVtjb2wgLSAxXSA9PT0gJ21pc3MnICYmIGJveC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdtaXNzJywgJ21hcmtlcicpO1xuICAgIGJveC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICB9IGVsc2Uge1xuICAgIGJveC5jbGFzc0xpc3QudG9nZ2xlKCdvY2N1cGllZCcpO1xuICAgIGNvbnN0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcmtlci5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnbWFya2VyJyk7XG4gICAgYm94LmFwcGVuZENoaWxkKG1hcmtlcik7XG4gIH1cbn07XG5cbmNvbnN0IGRpc2FibGVPcHBvbmVudEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybicpO1xuICBjb25zdCBib3hlcyA9IGdhbWVib2FyZExhYmVsLmNsb3Nlc3QoJ2FydGljbGUnKS5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG4gIGJveGVzLmZvckVhY2goKGJveCkgPT4gYm94LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJykpO1xufTtcblxuY29uc3QgZW5hYmxlT3Bwb25lbnRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmdhbWVib2FyZC1jb250YWluZXI6bm90KDpudGgtY2hpbGQoMSkpIGgyOm5vdCgudHVybiknXG4gICk7XG4gIGNvbnN0IGJveGVzID0gZ2FtZWJvYXJkTGFiZWwuY2xvc2VzdCgnYXJ0aWNsZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3gnKTtcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiBib3gucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpKTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVVzZXJHYW1lYm9hcmQsXG4gIHVwZGF0ZU9wcG9uZW50R2FtZWJvYXJkLFxuICBkaXNhYmxlT3Bwb25lbnRHYW1lYm9hcmQsXG4gIGVuYWJsZU9wcG9uZW50R2FtZWJvYXJkLFxufTtcbiIsImNvbnN0IGdldFNlbGVjdGVkSG9yaXpvbnRhbEJveGVzID0gKGJveCkgPT4ge1xuICBjb25zdCBjb2wgPSBib3guZGF0YXNldC5jb2w7XG4gIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS5hY3RpdmUnKS5kYXRhc2V0Lmxlbmd0aDtcbiAgY29uc3QgY29sTWF4ID0gTnVtYmVyKGNvbCkgKyBOdW1iZXIobGVuZ3RoKTtcbiAgY29uc3QgYm94ZXMgPSBbXTtcbiAgbGV0IGN1cnJCb3ggPSBib3g7XG4gIGxldCBjb3VudCA9IE51bWJlcihjb2wpO1xuXG4gIHdoaWxlIChjb3VudCA8IGNvbE1heCkge1xuICAgIGJveGVzLnB1c2goY3VyckJveCk7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyQm94Lm5leHRFbGVtZW50U2libGluZyA9PT0gbnVsbCB8fFxuICAgICAgIWN1cnJCb3gubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnYm94JylcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGN1cnJCb3ggPSBjdXJyQm94Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb3VudCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGJveGVzO1xufTtcblxuY29uc3QgZ2V0U2VsZWN0ZWRWZXJ0aWNhbEJveGVzID0gKGJveCkgPT4ge1xuICBjb25zdCByb3cgPSBib3guZGF0YXNldC5yb3c7XG4gIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS5hY3RpdmUnKS5kYXRhc2V0Lmxlbmd0aDtcbiAgY29uc3Qgcm93TWF4ID0gTnVtYmVyKHJvdykgKyBOdW1iZXIobGVuZ3RoKTtcbiAgY29uc3QgYm94ZXMgPSBbXTtcbiAgbGV0IGN1cnJCb3ggPSBib3g7XG4gIGxldCBjb3VudCA9IE51bWJlcihyb3cpO1xuXG4gIHdoaWxlIChjb3VudCA8IHJvd01heCkge1xuICAgIGJveGVzLnB1c2goY3VyckJveCk7XG5cbiAgICBjb25zdCBjb2wgPSBib3guZGF0YXNldC5jb2w7XG4gICAgY29uc3QgbmV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmJveFtkYXRhLXJvdz0nJHtjb3VudCArIDF9J11bZGF0YS1jb2w9JyR7Y29sfSddYFxuICAgICk7XG5cbiAgICBpZiAobmV4dEJveCA9PT0gbnVsbCB8fCAhbmV4dEJveC5jbGFzc0xpc3QuY29udGFpbnMoJ2JveCcpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjdXJyQm94ID0gbmV4dEJveDtcbiAgICBjb3VudCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGJveGVzO1xufTtcblxuY29uc3QgdmFsaWRDb2xvciA9ICd2YXIoLS1jb2xvci1icmFuZC0yYSknO1xuXG5jb25zdCBzaG93VmFsaWQgPSAoYm94KSA9PiAoYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbGlkQ29sb3IpO1xuXG5jb25zdCBpbnZhbGlkQ29sb3IgPSAndmFyKC0tY29sb3ItYnJhbmQtNWIpJztcblxuY29uc3Qgc2hvd0ludmFsaWQgPSAoYm94KSA9PiAoYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGludmFsaWRDb2xvcik7XG5cbmNvbnN0IHNob3dIb3Jpem9udGFsQm94ZXMgPSAoYm94KSA9PiB7XG4gIGNvbnN0IGNvbCA9IGJveC5kYXRhc2V0LmNvbDtcbiAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpZWNlLmFjdGl2ZScpLmRhdGFzZXQubGVuZ3RoO1xuICBjb25zdCBjb2xNYXggPSBOdW1iZXIoY29sKSArIE51bWJlcihsZW5ndGgpO1xuICBjb25zdCBib3hlcyA9IGdldFNlbGVjdGVkSG9yaXpvbnRhbEJveGVzKGJveCk7XG5cbiAgaWYgKGJveGVzLmxlbmd0aCA8IGNvbE1heCAtIE51bWJlcihjb2wpKSB7XG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiBzaG93SW52YWxpZChib3gpKTtcbiAgfSBlbHNlIHtcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGlmIChib3guY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICBzaG93SW52YWxpZChib3gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1ZhbGlkKGJveCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dWZXJ0aWNhbEJveGVzID0gKGJveCkgPT4ge1xuICBjb25zdCByb3cgPSBib3guZGF0YXNldC5yb3c7XG4gIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS5hY3RpdmUnKS5kYXRhc2V0Lmxlbmd0aDtcbiAgY29uc3Qgcm93TWF4ID0gTnVtYmVyKHJvdykgKyBOdW1iZXIobGVuZ3RoKTtcbiAgY29uc3QgYm94ZXMgPSBnZXRTZWxlY3RlZFZlcnRpY2FsQm94ZXMoYm94KTtcblxuICBpZiAoYm94ZXMubGVuZ3RoIDwgcm93TWF4IC0gTnVtYmVyKHJvdykpIHtcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHNob3dJbnZhbGlkKGJveCkpO1xuICB9IGVsc2Uge1xuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgaWYgKGJveC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgIHNob3dJbnZhbGlkKGJveCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93VmFsaWQoYm94KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLnJvdGF0ZSAuc2VsZWN0ZWQnKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBjb25zdCBjbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLnJvdGF0ZSAuc2VsZWN0ZWQnKS5jbGFzc0xpc3Q7XG5cbiAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dQbGFjZWRCb3hlcyA9ICgpID0+IHtcbiAgY29uc3QgcGxhY2VkQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuZ2FtZWJvYXJkLWNvbnRhaW5lcjpudGgtY2hpbGQoMSkgLmJveC5wbGFjZWQnXG4gICk7XG4gIHBsYWNlZEJveGVzLmZvckVhY2goKGJveCkgPT4gc2hvd1ZhbGlkKGJveCkpO1xufTtcblxuY29uc3QgY2hhbmdlT25Ib3ZlciA9IChib3gpID0+IHtcbiAgc2hvd1BsYWNlZEJveGVzKCk7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbigpO1xuXG4gIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIHNob3dIb3Jpem9udGFsQm94ZXMoYm94KTtcbiAgfSBlbHNlIHtcbiAgICBzaG93VmVydGljYWxCb3hlcyhib3gpO1xuICB9XG59O1xuXG5jb25zdCBkZWZhdWx0Q29sb3IgPSAndmFyKC0tY29sb3ItYnJhbmQtMWIpJztcblxuY29uc3QgcmVtb3ZlSG92ZXJFZmZlY3QgPSAoKSA9PiB7XG4gIHNob3dQbGFjZWRCb3hlcygpO1xuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5nYW1lYm9hcmQtY29udGFpbmVyOm50aC1jaGlsZCgxKSAuYm94Om5vdCguZmlsbGVyLCAucGxhY2VkKSdcbiAgKTtcbiAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRlZmF1bHRDb2xvcikpO1xufTtcblxuY29uc3Qgc2hvd1NlbGVjdGVkQm94ZXMgPSAoYm94LCBpc1ZlcnRpY2FsKSA9PiB7XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgY29uc3QgYm94ZXMgPSBnZXRTZWxlY3RlZFZlcnRpY2FsQm94ZXMoYm94KTtcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QudG9nZ2xlKCdwbGFjZWQnKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYm94ZXMgPSBnZXRTZWxlY3RlZEhvcml6b250YWxCb3hlcyhib3gpO1xuICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4gYm94LmNsYXNzTGlzdC50b2dnbGUoJ3BsYWNlZCcpKTtcbiAgfVxufTtcblxuY29uc3QgZGlzYWJsZUluaXRpYWxHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmdhbWVib2FyZC1jb250YWluZXI6bnRoLWNoaWxkKDEpIC5ib3gnXG4gICk7XG4gIGJveGVzLmZvckVhY2goKGJveCkgPT4gYm94LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJykpO1xufTtcblxuY29uc3QgaGlkZUluaXRpYWxHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gIGdhbWVib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldERpcmVjdGlvbixcbiAgY2hhbmdlT25Ib3ZlcixcbiAgcmVtb3ZlSG92ZXJFZmZlY3QsXG4gIHNob3dTZWxlY3RlZEJveGVzLFxuICBkaXNhYmxlSW5pdGlhbEdhbWVib2FyZCxcbiAgaGlkZUluaXRpYWxHYW1lYm9hcmQsXG59O1xuIiwiaW1wb3J0IGNoZWNrSWNvbiBmcm9tICcuLi8uLi9pbWcvY2hlY2suc3ZnJztcblxuY29uc3QgdG9nZ2xlQWN0aXZlUGllY2UgPSAoc2VsZWN0ZWRQaWVjZSkgPT4ge1xuICBjb25zdCBhY3RpdmVQaWVjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZS5hY3RpdmUnKTtcbiAgYWN0aXZlUGllY2UuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIHNlbGVjdGVkUGllY2UuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59O1xuXG5jb25zdCB1cGRhdGVQaWVjZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoZWNrSW1nLnNyYyA9IGNoZWNrSWNvbjtcbiAgY2hlY2tJbWcuYWx0ID0gJ0NoZWNrIG1hcmsgdG8gZGVub3RlIHRoaXMgc2hpcCB3YXMgcGxhY2VkJztcbiAgY2hlY2tJbWcuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgY29uc3QgYWN0aXZlUGllY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGllY2UuYWN0aXZlJyk7XG4gIGFjdGl2ZVBpZWNlLmFwcGVuZENoaWxkKGNoZWNrSW1nKTtcbiAgYWN0aXZlUGllY2Uuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgYWN0aXZlUGllY2UuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGFjdGl2ZVBpZWNlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ3BsYWNlZCcpO1xuICBjb25zdCBwaWVjZXNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlOm5vdCg6ZGlzYWJsZWQpJyk7XG5cbiAgaWYgKHBpZWNlc0xlZnQubGVuZ3RoID4gMCkge1xuICAgIHBpZWNlc0xlZnRbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHRvZ2dsZUFjdGl2ZVBpZWNlLCB1cGRhdGVQaWVjZXMgfTtcbiIsImNvbnN0IHNob3dSZXNldE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCB5ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgeWVzLnR5cGUgPSAnc3VibWl0JztcbiAgeWVzLmNsYXNzTGlzdC5hZGQoJ3llcycpO1xuICB5ZXMudGV4dENvbnRlbnQgPSAnWWVzJztcbiAgY29uc3Qgbm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbm8udHlwZSA9ICdidXR0b24nO1xuICBuby5jbGFzc0xpc3QuYWRkKCdubycpO1xuICBuby50ZXh0Q29udGVudCA9ICdObyc7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uYWN0aW9uID0gJyc7XG4gIGZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoeWVzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChubyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHRoZSBib2FyZD8nO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0Jyk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgZm9vdGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaWFsb2cpO1xuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59O1xuXG5leHBvcnQgeyBzaG93UmVzZXRNb2RhbCB9O1xuIiwiaW1wb3J0IGNoZWNrSW52ZXJ0ZWRJY29uIGZyb20gJy4uLy4uL2ltZy9jaGVjay1pbnZlcnRlZC5zdmcnO1xuXG5jb25zdCBzZXRSb3RhdGlvbiA9IChkaXJlY3Rpb24pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlIC5zZWxlY3RlZCcpO1xuXG4gIGlmIChzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoZGlyZWN0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vdFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnZGlhbG9nLnJvdGF0ZSBidXR0b246bm90KC5zZWxlY3RlZCknXG4gICk7XG4gIHNlbGVjdGVkLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gIG5vdFNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gIGNvbnN0IGNoZWNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoZWNrSW1nLnNyYyA9IGNoZWNrSW52ZXJ0ZWRJY29uO1xuICBjaGVja0ltZy5hbHQgPSAnVGhpcyBvcHRpb24gaXMgc2VsZWN0ZWQnO1xuICBub3RTZWxlY3RlZC5hcHBlbmRDaGlsZChjaGVja0ltZyk7XG59O1xuXG5jb25zdCBzaG93Um90YXRlTW9kYWwgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cucm90YXRlJykgIT09IG51bGwpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5yb3RhdGUnKTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoZWNrSW1nLnNyYyA9IGNoZWNrSW52ZXJ0ZWRJY29uO1xuICBjaGVja0ltZy5hbHQgPSAnVGhpcyBvcHRpb24gaXMgc2VsZWN0ZWQnO1xuICBjb25zdCBob3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvcml6b250YWwudHlwZSA9ICdidXR0b24nO1xuICBob3Jpem9udGFsLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnLCAnc2VsZWN0ZWQnKTtcbiAgaG9yaXpvbnRhbC50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgaG9yaXpvbnRhbC5hcHBlbmRDaGlsZChjaGVja0ltZyk7XG4gIGNvbnN0IHZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZlcnRpY2FsLnR5cGUgPSAnYnV0dG9uJztcbiAgdmVydGljYWwuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgdmVydGljYWwudGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmFjdGlvbiA9ICcnO1xuICBmb3JtLm1ldGhvZCA9ICdkaWFsb2cnO1xuICBmb3JtLmFwcGVuZENoaWxkKGhvcml6b250YWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHZlcnRpY2FsKTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdTZWxlY3QgYW4gb3B0aW9uIHRvIHJvdGF0ZSB5b3VyIHNoaXAnO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGZvb3Rlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZGlhbG9nKTtcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuZXhwb3J0IHsgc2V0Um90YXRpb24sIHNob3dSb3RhdGVNb2RhbCB9O1xuIiwiY29uc3Qgc2hvd1N0YXJ0R2FtZSA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5zdGFydC1nYW1lJykgIT09IG51bGwpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5zdGFydC1nYW1lJyk7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGFydC50eXBlID0gJ3N1Ym1pdCc7XG4gIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG4gIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKTtcbiAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uYWN0aW9uID0gJyc7XG4gIGZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3RhcnQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSByZWFkeSB0byBzdGFydCB0aGUgZ2FtZT8nO1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUnKTtcbiAgZGlhbG9nLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGRpYWxvZyk7XG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gIGNvbnN0IHBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWVjZScpO1xuICByZXR1cm4gQXJyYXkuZnJvbShwaWVjZXMpLmV2ZXJ5KChwaWVjZSkgPT4gcGllY2UuY2hpbGRFbGVtZW50Q291bnQgPiAxKTtcbn07XG5cbmNvbnN0IHNob3dJbnZhbGlkID0gKCkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLnN0YXJ0LWdhbWUgcCcpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsZWFzZSBwbGFjZSBhbGwgb2YgeW91ciBzaGlwcy4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGlhbG9nLnN0YXJ0LWdhbWUgYnV0dG9uJyk7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24ucmVtb3ZlKCkpO1xuICBjb25zdCBiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJhY2sudHlwZSA9ICdidXR0b24nO1xuICBiYWNrLmNsYXNzTGlzdC5hZGQoJ2JhY2snKTtcbiAgYmFjay50ZXh0Q29udGVudCA9ICdCYWNrJztcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5zdGFydC1nYW1lIGZvcm0nKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChiYWNrKTtcbn07XG5cbmNvbnN0IHJlc2V0U3RhcnRHYW1lTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cuc3RhcnQtZ2FtZSBwJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXJlIHlvdSByZWFkeSB0byBzdGFydCB0aGUgZ2FtZT8nO1xuICBjb25zdCBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLnN0YXJ0LWdhbWUgLmJhY2snKTtcbiAgYmFjay5yZW1vdmUoKTtcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3RhcnQudHlwZSA9ICdzdWJtaXQnO1xuICBzdGFydC5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xuICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XG4gIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLnN0YXJ0LWdhbWUgZm9ybScpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN0YXJ0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWwpO1xufTtcblxuZXhwb3J0IHsgc2hvd1N0YXJ0R2FtZSwgaXNSZWFkeSwgc2hvd0ludmFsaWQsIHJlc2V0U3RhcnRHYW1lTW9kYWwgfTtcbiIsImltcG9ydCBlbWl0U2V0dXBFdmVudHMgZnJvbSAnLi9zZXR1cC1ldmVudHMnO1xuaW1wb3J0IGVtaXRSb3RhdGVNb2RhbEV2ZW50cyBmcm9tICcuL3JvdGF0ZS1tb2RhbC1ldmVudHMnO1xuaW1wb3J0IGVtaXRSZXNldE1vZGFsRXZlbnRzIGZyb20gJy4vcmVzZXQtbW9kYWwtZXZlbnRzJztcbmltcG9ydCBlbWl0U3RhcnRHYW1lTW9kYWxFdmVudHMgZnJvbSAnLi9zdGFydC1nYW1lLW1vZGFsLWV2ZW50cyc7XG5pbXBvcnQgZW1pdEdhbWVFdmVudHMgZnJvbSAnLi9nYW1lLWV2ZW50cyc7XG5pbXBvcnQgZW1pdEdhbWVPdmVyTW9kYWxFdmVudHMgZnJvbSAnLi9nYW1lLW92ZXItbW9kYWwtZXZlbnRzJztcblxuY29uc3QgZW1pdEV2ZW50cyA9ICgpID0+IHtcbiAgZW1pdFNldHVwRXZlbnRzKCk7XG4gIGVtaXRSb3RhdGVNb2RhbEV2ZW50cygpO1xuICBlbWl0UmVzZXRNb2RhbEV2ZW50cygpO1xuICBlbWl0U3RhcnRHYW1lTW9kYWxFdmVudHMoKTtcbiAgZW1pdEdhbWVFdmVudHMoKTtcbiAgZW1pdEdhbWVPdmVyTW9kYWxFdmVudHMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXRFdmVudHM7XG4iLCJpbXBvcnQgeyBwbGF5Um91bmQgfSBmcm9tICcuLi9sb2dpYy9nYW1lJztcbmltcG9ydCB7IGdldENvbExldHRlciB9IGZyb20gJy4uL2xvZ2ljL2hlbHBlci1mdW5jdGlvbnMnO1xuXG5jb25zdCBlbWl0R2FtZUV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJykgJiZcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2FydGljbGUnKS5jbGFzc0xpc3QuY29udGFpbnMoJ29wcG9uZW50JylcbiAgICApIHtcbiAgICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmRhdGFzZXQucm93O1xuICAgICAgY29uc3QgY29sTnVtID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuZGF0YXNldC5jb2w7XG4gICAgICBjb25zdCBjb2wgPSBnZXRDb2xMZXR0ZXIoY29sTnVtKTtcbiAgICAgIHBsYXlSb3VuZChbcm93LCBjb2xdKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1pdEdhbWVFdmVudHM7XG4iLCJjb25zdCBlbWl0R2FtZU92ZXJNb2RhbEV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAmJlxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXQnKVxuICAgICkge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXRHYW1lT3Zlck1vZGFsRXZlbnRzO1xuIiwiY29uc3QgZW1pdFJlc2V0TW9kYWxFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykgJiZcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygneWVzJylcbiAgICApIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpICYmXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ25vJylcbiAgICApIHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZS50YXJnZXQuY2xvc2VzdCgnZGlhbG9nJyk7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbWl0UmVzZXRNb2RhbEV2ZW50cztcbiIsImltcG9ydCB7IHNldFJvdGF0aW9uIH0gZnJvbSAnLi4vZG9tL3JvdGF0ZS1tb2RhbCc7XG5cbmNvbnN0IGVtaXRSb3RhdGVNb2RhbEV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAmJlxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJylcbiAgICApIHtcbiAgICAgIHNldFJvdGF0aW9uKCdob3Jpem9udGFsJyk7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5yb3RhdGUnKTtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykgJiZcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKVxuICAgICkge1xuICAgICAgc2V0Um90YXRpb24oJ3ZlcnRpY2FsJyk7XG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5yb3RhdGUnKTtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXRSb3RhdGVNb2RhbEV2ZW50cztcbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL2xvZ2ljL3NoaXAnO1xuaW1wb3J0IHsgc3RvcmVJbnB1dCB9IGZyb20gJy4uL2xvZ2ljL2dhbWUnO1xuaW1wb3J0IHsgZ2V0Q29sTGV0dGVyIH0gZnJvbSAnLi4vbG9naWMvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyB0b2dnbGVBY3RpdmVQaWVjZSwgdXBkYXRlUGllY2VzIH0gZnJvbSAnLi4vZG9tL3BpZWNlcyc7XG5pbXBvcnQge1xuICBnZXREaXJlY3Rpb24sXG4gIGNoYW5nZU9uSG92ZXIsXG4gIHJlbW92ZUhvdmVyRWZmZWN0LFxuICBzaG93U2VsZWN0ZWRCb3hlcyxcbiAgZGlzYWJsZUluaXRpYWxHYW1lYm9hcmQsXG59IGZyb20gJy4uL2RvbS9pbml0aWFsLWdhbWVib2FyZCc7XG5pbXBvcnQgeyBzaG93Um90YXRlTW9kYWwgfSBmcm9tICcuLi9kb20vcm90YXRlLW1vZGFsJztcbmltcG9ydCB7IHNob3dSZXNldE1vZGFsIH0gZnJvbSAnLi4vZG9tL3Jlc2V0LW1vZGFsJztcbmltcG9ydCB7IHNob3dTdGFydEdhbWUgfSBmcm9tICcuLi9kb20vc3RhcnQtZ2FtZS1tb2RhbCc7XG5cbmNvbnN0IGVtaXRTZXR1cEV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWVjZXMnKTtcblxuICBzaGlwUGllY2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAmJlxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaWVjZScpXG4gICAgKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFBpZWNlID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgICB0b2dnbGVBY3RpdmVQaWVjZShzZWxlY3RlZFBpZWNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG5cbiAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpICYmXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpXG4gICAgKSB7XG4gICAgICBzaG93Um90YXRlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAmJlxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNldCcpXG4gICAgKSB7XG4gICAgICBzaG93UmVzZXRNb2RhbCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpICYmXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0LWdhbWUnKVxuICAgICkge1xuICAgICAgc2hvd1N0YXJ0R2FtZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG5cbiAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSAmJlxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdib3gnKSAmJlxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnZmlsbGVyJylcbiAgICApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUGllY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGllY2UuYWN0aXZlJyk7XG4gICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VsZWN0ZWRQaWVjZS5kYXRhc2V0Lmxlbmd0aCk7XG4gICAgICBjb25zdCBib3ggPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IFtib3guZGF0YXNldC5yb3csIGdldENvbExldHRlcihib3guZGF0YXNldC5jb2wpXTtcbiAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBnZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJztcblxuICAgICAgaWYgKHN0b3JlSW5wdXQoU2hpcChsZW5ndGgpLCBjb29yZHMsIGlzVmVydGljYWwpID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2hvd1NlbGVjdGVkQm94ZXMoYm94LCBpc1ZlcnRpY2FsKTtcbiAgICAgIHVwZGF0ZVBpZWNlcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykgJiZcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnYm94JykgJiZcbiAgICAgICFlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbGxlcicpXG4gICAgKSB7XG4gICAgICBjb25zdCBwaWVjZXNMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpZWNlOm5vdCg6ZGlzYWJsZWQpJyk7XG5cbiAgICAgIGlmIChwaWVjZXNMZWZ0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVtb3ZlSG92ZXJFZmZlY3QoKTtcbiAgICAgICAgY29uc3QgYm94ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZU9uSG92ZXIoYm94KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc2FibGVJbml0aWFsR2FtZWJvYXJkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiByZW1vdmVIb3ZlckVmZmVjdCgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXRTZXR1cEV2ZW50cztcbiIsImltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4uL2xvZ2ljL2dhbWUnO1xuaW1wb3J0IHtcbiAgaXNSZWFkeSxcbiAgc2hvd0ludmFsaWQsXG4gIHJlc2V0U3RhcnRHYW1lTW9kYWwsXG59IGZyb20gJy4uL2RvbS9zdGFydC1nYW1lLW1vZGFsJztcblxuY29uc3QgZW1pdFN0YXJ0R2FtZU1vZGFsRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpICYmXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXJ0JylcbiAgICApIHtcbiAgICAgIGlmIChpc1JlYWR5KCkpIHtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93SW52YWxpZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpICYmXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhY2snKVxuICAgICkge1xuICAgICAgY29uc3QgbW9kYWwgPSBlLnRhcmdldC5jbG9zZXN0KCdkaWFsb2cnKTtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICByZXNldFN0YXJ0R2FtZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykgJiZcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsJylcbiAgICApIHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZS50YXJnZXQuY2xvc2VzdCgnZGlhbG9nJyk7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbWl0U3RhcnRHYW1lTW9kYWxFdmVudHM7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHtcbiAgcmVuZGVyVXNlckdhbWVib2FyZCxcbiAgY2hhbmdlQWN0aXZlUGxheWVyLFxuICBzaG93R2FtZU92ZXIsXG4gIHNob3dHYW1lUGFnZSxcbn0gZnJvbSAnLi4vZG9tL2dhbWUtcGFnZSc7XG5pbXBvcnQge1xuICB1cGRhdGVVc2VyR2FtZWJvYXJkLFxuICB1cGRhdGVPcHBvbmVudEdhbWVib2FyZCxcbiAgZGlzYWJsZU9wcG9uZW50R2FtZWJvYXJkLFxuICBlbmFibGVPcHBvbmVudEdhbWVib2FyZCxcbn0gZnJvbSAnLi4vZG9tL2dhbWVib2FyZHMnO1xuaW1wb3J0IHsgaGlkZUluaXRpYWxHYW1lYm9hcmQgfSBmcm9tICcuLi9kb20vaW5pdGlhbC1nYW1lYm9hcmQnO1xuXG5jb25zdCB1c2VyID0gUGxheWVyKCk7XG5jb25zdCBjb21wdXRlciA9IFBsYXllcigpO1xuY29uc3QgdXNlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBoaWRlSW5pdGlhbEdhbWVib2FyZCgpO1xuICBzaG93R2FtZVBhZ2UoKTtcbiAgcmVuZGVyVXNlckdhbWVib2FyZCh1c2VyR2FtZWJvYXJkLmdldFN0YXRlKCkpO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVJhbmRvbSgpO1xufTtcblxuY29uc3Qgc3RvcmVJbnB1dCA9IChzaGlwLCBjb29yZHMsIGlzVmVydGljYWwpID0+IHtcbiAgcmV0dXJuIHVzZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkcywgaXNWZXJ0aWNhbCk7XG59O1xuXG5jb25zdCBwbGF5Um91bmQgPSAoY29vcmRzKSA9PiB7XG4gIGNvbnN0IHVzZXJBdHRhY2sgPSB1c2VyLmF0dGFjayhjb21wdXRlckdhbWVib2FyZCwgY29vcmRzKTtcblxuICBpZiAodXNlckF0dGFjayAhPT0gbnVsbCkge1xuICAgIHVwZGF0ZU9wcG9uZW50R2FtZWJvYXJkKGNvbXB1dGVyR2FtZWJvYXJkLmdldFN0YXRlKCksIGNvb3Jkcyk7XG4gICAgY2hhbmdlQWN0aXZlUGxheWVyKCk7XG5cbiAgICBpZiAoY29tcHV0ZXJHYW1lYm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICAgIHNob3dHYW1lT3ZlcigndXNlcicpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzYWJsZU9wcG9uZW50R2FtZWJvYXJkKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbXB1dGVyLmF0dGFjayh1c2VyR2FtZWJvYXJkKTtcbiAgICAgIHVwZGF0ZVVzZXJHYW1lYm9hcmQodXNlckdhbWVib2FyZC5nZXRTdGF0ZSgpLCBjb21wdXRlci5nZXRMYXN0TW92ZSgpKTtcbiAgICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgIH0sIDIwMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodXNlckdhbWVib2FyZC5pc0FsbFN1bmsoKSkge1xuICAgICAgICBzaG93R2FtZU92ZXIoJ29wcG9uZW50Jyk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbmFibGVPcHBvbmVudEdhbWVib2FyZCgpO1xuICAgIH0sIDIwMDApO1xuICB9XG59O1xuXG5leHBvcnQgeyBzdGFydEdhbWUsIHN0b3JlSW5wdXQsIHBsYXlSb3VuZCB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29sTnVtLCBnZXRSYW5kb21OdW0sIGdlbmVyYXRlQ29vcmRzIH0gZnJvbSAnLi9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3Qgc3RhdGUgPSBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBdO1xuXG4gIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzLCBzaGlwTGVuZ3RoLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgY29uc3QgW3JvdywgbGV0dGVyXSA9IGNvb3JkcztcbiAgICBjb25zdCBjb2wgPSBnZXRDb2xOdW0obGV0dGVyKTtcblxuICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgIGxldCBjb3VudCA9IE51bWJlcihyb3cpO1xuXG4gICAgICB3aGlsZSAoY291bnQgPCBOdW1iZXIocm93KSArIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgcG9zaXRpb25zLnB1c2goc3RhdGVbY291bnQgLSAxXVtjb2wgLSAxXSk7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3NpdGlvbnMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb25zID0gc3RhdGVbcm93IC0gMV0uc2xpY2UoY29sIC0gMSwgY29sIC0gMSArIHNoaXBMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSAwKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRzLCBpc1ZlcnRpY2FsID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBbcm93LCBsZXR0ZXJdID0gY29vcmRzO1xuICAgIGNvbnN0IGNvbCA9IGdldENvbE51bShsZXR0ZXIpO1xuXG4gICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgIGlmIChyb3cgLSAxICsgc2hpcC5zaXplKCkgPiAxMCB8fCAhaXNFbXB0eShjb29yZHMsIHNoaXAuc2l6ZSgpLCB0cnVlKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIGxldCBjb3VudCA9IE51bWJlcihyb3cpO1xuXG4gICAgICB3aGlsZSAoY291bnQgPCBOdW1iZXIocm93KSArIHNoaXAuc2l6ZSgpKSB7XG4gICAgICAgIHN0YXRlW2NvdW50IC0gMV1bY29sIC0gMV0gPSBzaGlwO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29sIC0gMSArIHNoaXAuc2l6ZSgpID4gMTAgfHwgIWlzRW1wdHkoY29vcmRzLCBzaGlwLnNpemUoKSwgZmFsc2UpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgc3RhdGVbcm93IC0gMV0uZmlsbChzaGlwLCBjb2wgLSAxLCBjb2wgLSAxICsgc2hpcC5zaXplKCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21EaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gZ2V0UmFuZG9tTnVtKDEsIDMpO1xuXG4gICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVzTWFkZSA9IFtdO1xuICAgIGNvbnN0IHNoaXBzID0gW1NoaXAoNSksIFNoaXAoNCksIFNoaXAoMyksIFNoaXAoMyksIFNoaXAoMildO1xuICAgIGxldCBjb29yZHMgPSBnZW5lcmF0ZUNvb3Jkcyhtb3Zlc01hZGUpO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldFJhbmRvbURpcmVjdGlvbigpID09PSAndmVydGljYWwnO1xuXG4gICAgICB3aGlsZSAocGxhY2VTaGlwKHNoaXAsIGNvb3JkcywgaXNWZXJ0aWNhbCkgPT09IG51bGwpIHtcbiAgICAgICAgY29vcmRzID0gZ2VuZXJhdGVDb29yZHMobW92ZXNNYWRlKTtcbiAgICAgIH1cblxuICAgICAgbW92ZXNNYWRlLnB1c2goY29vcmRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IFtyb3csIGxldHRlcl0gPSBjb29yZHM7XG4gICAgY29uc3QgY29sID0gZ2V0Q29sTnVtKGxldHRlcik7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGF0ZVtyb3cgLSAxXVtjb2wgLSAxXTtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2hpdCcgfHwgcG9zaXRpb24gPT09ICdtaXNzJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgc3RhdGVbcm93IC0gMV1bY29sIC0gMV0gPSAnbWlzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzdGF0ZVtyb3cgLSAxXVtjb2wgLSAxXTtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICBzdGF0ZVtyb3cgLSAxXVtjb2wgLSAxXSA9ICdoaXQnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZS5tYXAoKHJvdykgPT4gcm93LnNsaWNlKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHBsYWNlUmFuZG9tLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldFN0YXRlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgZ2V0Q29sTnVtID0gKGxldHRlcikgPT4ge1xuICBjb25zdCBsZXR0ZXJzID0gJ2FiY2RlZmdoaWonO1xuXG4gIHJldHVybiBgJHtsZXR0ZXJzLmluZGV4T2YobGV0dGVyLnRvTG93ZXJDYXNlKCkpICsgMX1gO1xufTtcblxuY29uc3QgZ2V0Q29sTGV0dGVyID0gKGNvbE51bSkgPT4ge1xuICBjb25zdCBsZXR0ZXJzID0gJ2FiY2RlZmdoaWonO1xuXG4gIHJldHVybiBsZXR0ZXJzW2NvbE51bSAtIDFdO1xufTtcblxuY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1pbkluY2x1c2l2ZSwgbWF4RXhjbHVzaXZlKSA9PiB7XG4gIGNvbnN0IG1pbiA9IE1hdGguY2VpbChtaW5JbmNsdXNpdmUpO1xuICBjb25zdCBtYXggPSBNYXRoLmZsb29yKG1heEV4Y2x1c2l2ZSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQ29vcmRzID0gKG1vdmVzTWFkZSA9IFtdKSA9PiB7XG4gIGNvbnN0IGxldHRlcnMgPSAnYWJjZGVmZ2hpaic7XG4gIGNvbnN0IGNvb3JkcyA9IFtgJHtnZXRSYW5kb21OdW0oMSwgMTApfWAsIGxldHRlcnNbZ2V0UmFuZG9tTnVtKDEsIDEwKV1dO1xuXG4gIGlmIChtb3Zlc01hZGUubGVuZ3RoID09PSAwKSB7XG4gICAgbW92ZXNNYWRlLnB1c2goY29vcmRzKTtcblxuICAgIHJldHVybiBjb29yZHM7XG4gIH1cblxuICBpZiAoXG4gICAgbW92ZXNNYWRlLnNvbWUoKG1vdmUpID0+IEpTT04uc3RyaW5naWZ5KG1vdmUpID09PSBKU09OLnN0cmluZ2lmeShjb29yZHMpKVxuICApIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVDb29yZHMobW92ZXNNYWRlKTtcbiAgfVxuXG4gIG1vdmVzTWFkZS5wdXNoKGNvb3Jkcyk7XG5cbiAgcmV0dXJuIGNvb3Jkcztcbn07XG5cbmV4cG9ydCB7IGdldENvbE51bSwgZ2V0Q29sTGV0dGVyLCBnZXRSYW5kb21OdW0sIGdlbmVyYXRlQ29vcmRzIH07XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvb3JkcyB9IGZyb20gJy4vaGVscGVyLWZ1bmN0aW9ucyc7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgbW92ZXNNYWRlID0gW107XG5cbiAgY29uc3QgZ2V0TGFzdE1vdmUgPSAoKSA9PiBtb3Zlc01hZGVbbW92ZXNNYWRlLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IGF0dGFjayA9IChPcHBCb2FyZCwgY29vcmRzID0gbnVsbCkgPT4ge1xuICAgIGlmIChjb29yZHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBPcHBCb2FyZC5yZWNlaXZlQXR0YWNrKGdlbmVyYXRlQ29vcmRzKG1vdmVzTWFkZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBPcHBCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMYXN0TW92ZSxcbiAgICBhdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4gKGhpdHMgKz0gMSk7XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA9PT0gbGVuZ3RoO1xuXG4gIGNvbnN0IHNpemUgPSAoKSA9PiBsZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNpemUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBlbWl0RXZlbnRzIGZyb20gJy4vZXZlbnRzL2VtaXQtZXZlbnRzJztcblxuZW1pdEV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9