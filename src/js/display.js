import { qs, qsAll } from './utils';

export function renderSlider(slider) {
  let carousel = [];

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
