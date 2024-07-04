import { qs, qsAll, setData } from './utils';
import { getJson } from './dataServices.js';

export async function renderSlider() {
  let carousel = [];
  let data = await getJson('slider');
  let slider = data.images;

  let slideContainer = qs('#slider');
  // let slides = qsAll('.slide::before');
  let prevBtn = qs('#slide-arrow-prev');
  let nextBtn = qs('#slide-arrow-next');

  const slideWidth = slideContainer.clientWidth;

  // Add each slide to an array
  for (let i = 0; i < slider.length; i++) {
    carousel[i] =
      `<li id="slide-${i}" class="slide" style="--bg-image: url(${slider[i].src})">
        <img id="slide-image-${i}" class="slide-image" src="${slider[i].src}" alt="${slider[i].alt}" />
      </li>`;
  }

  let carouselHTML = carousel.join('');

  slideContainer.textContent = '';
  slideContainer.insertAdjacentHTML('afterbegin', carouselHTML);

  prevBtn.addEventListener('click', (event) => {
    slideContainer.scrollLeft -= slideWidth;
  });

  nextBtn.addEventListener('click', (event) => {
    slideContainer.scrollLeft += slideWidth;
  });
}


export function renderDestination(data) {
  setData('#planet-name', data.name);
  setData('#climate', 'Climate: ' + data.climate);
  setData('#terrain', 'Terrain: ' + data.terrain);
  setData('#population', 'Population: ' + data.population);


}


// {"name":"Tatooine",
//   "climate":"arid",
//   "terrain":"desert",
//   "population":"200000",
//   "residents":
//   ["https://swapi.py4e.com/api/people/1/",
//     "https://swapi.py4e.com/api/people/2/",
//     "https://swapi.py4e.com/api/people/4/",
//     "https://swapi.py4e.com/api/people/6/",
//     "https://swapi.py4e.com/api/people/7/",
//     "https://swapi.py4e.com/api/people/8/",
//     "https://swapi.py4e.com/api/people/9/",
//     "https://swapi.py4e.com/api/people/11/",
//     "https://swapi.py4e.com/api/people/43/",
//     "https://swapi.py4e.com/api/people/62/"
//   ]}