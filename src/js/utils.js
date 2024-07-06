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

export function setData(selector, data) {
  const el = qs(selector);
  el.textContent = '';
  el.insertAdjacentHTML('afterbegin', data);
}

