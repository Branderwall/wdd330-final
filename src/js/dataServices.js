import { convertToJson } from './utils';

export async function getJson(title) {
  return await fetch(`../json/${title}.json`)
    .then(convertToJson)
    .then((data) => data);
}
