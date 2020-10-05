/* ======================================
=============== UTILS ===================
======================================= */

/* ============ Selector Functions ========== */
export function qs(selector) {
  return document.querySelector(selector);
}
export function qsa(selector) {
  return document.querySelectorAll(selector);
}
export function bid(selector) {
  return document.getElementById(selector);
}
export function bcn(selector) {
  return document.getElementsByClassName(selector);
}
export function btn(selector) {
  return document.getElementsByTagName(selector);
}

/* =============== Console Log ================== */
export function cl(...logs) {
  return console.log(...logs);
}
