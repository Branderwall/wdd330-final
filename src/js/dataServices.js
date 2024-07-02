import { convertToJson } from './utils';

let apiUrl = import.meta.env.VITE_API_URL;

export async function getJson(title) {
  return await fetch(`../json/${title}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function getAPI(url, filter = (info) => info) {
  let path = '';
  if (url.includes('http')) {
    path = url;
  } else {
    path = apiUrl + url;
  }

  let data = [];
  let response = await fetch(path);
  let rawData = await convertToJson(response);
  data = data.concat(rawData.results);

  if (rawData.next !== null) {
    let nextData = await getAPI(rawData.next);
    data = data.concat(nextData);
  }

  let filteredData = data.filter(filter);
  return filteredData;
}
