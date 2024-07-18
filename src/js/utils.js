export function qs(selector) {
  return document.querySelector(selector);
}

export function qsAll(selector) {
  return document.querySelectorAll(selector);
}

export async function convertToJson(res) {
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export function getParam(param) {
  const params = window.location.search.toLowerCase();
  const urlParams = new URLSearchParams(params);
  return urlParams.get(param);
}

export function getParams() {
  const params = window.location.search.toLowerCase();
  let urlParams = new URLSearchParams(params);
  let paramSet = paramsToObject(urlParams.entries());
  return paramSet;
}

function paramsToObject(entries) {
  const result = {}
  for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

export function setData(selector, data) {
  const el = qs(selector);
  el.textContent = '';
  el.insertAdjacentHTML('afterbegin', data);
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

