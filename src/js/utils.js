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

export function consoleLog(test) {
  console.log(`${test}: ${JSON.stringify(test)}`);
}

export function getArgs(args) {
  var argsObj = {};

  var argList = /\(([^)]*)/.exec(args.callee)[1];
  var argCnt = 0;
  var tokens;
  var argRe = /\s*([^,]+)/g;

  while (tokens = argRe.exec(argList)) {
      argsObj[tokens[1]] = args[argCnt++];
  }

  return argsObj;
}

export function getParam(param) {
  const params = window.location.search;
  const urlParams = new URLSearchParams(params);
  return urlParams.get(param);
}

export function setData(selector, data) {
  const el = qs(selector);
  el.textContent = '';
  el.insertAdjacentHTML('afterbegin', data);
}