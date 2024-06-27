import { qs, qsAll } from './utils';

export function renderSlider(slider) {
  let carousel = [];

  let slideContainer = qs('#slider');
  // let slides = qsAll('.slide');
  let prevBtn = qs('#slide-arrow-prev');
  let nextBtn = qs('#slide-arrow-next');

  const slideWidth = slideContainer.clientWidth;

  // Add each slide to an array
  for (let i = 0; i < slider.length; i++) {
    carousel[i] =
      `<li class="slide" style="background-image: url('${slider[i].src}')"></li>`;
    // <img id="slide-${i}" class="slide-image" src="${slider[i].src}" alt="${slider[i].alt}"></img>
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
