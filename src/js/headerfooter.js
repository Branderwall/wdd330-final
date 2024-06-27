import { qs } from "./utils";

export default function renderHeaderFooter() {
  const values = generateRandomCoords(700);
  const values2 = generateRandomCoords(200);
  const values3 = generateRandomCoords(100);

  let stars = `<div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>`;

  // let stars = `<section class="star-container">
  //   <div id="stars"></div>
  //   <div id="stars2"></div>
  //   <div id="stars3"></div>
  //   </section>`;

  let headerEl = qs('header');
  let footerEl = qs('footer');

  headerEl.insertAdjacentHTML('beforebegin', stars);

  document.getElementById('stars').style.setProperty('--star-coords', values);
  document
    .getElementById('stars2')
    .style.setProperty('--star-coords2', values2);
  document
    .getElementById('stars3')
    .style.setProperty('--star-coords3', values3);

  let header = `<div class="site-title">galactic<br />travels</div>
      <div class="header-menu">
        <ul class="menu">
          <li onclick="location.href = '/'">Home</li>
          <li onclick="location.href = '/destination/'">Destinations</li>
          <li onclick="location.href = '/about/'">About</li>
        </ul>
      </div>`;

  
  let footer = `<p>&copy; Not a real website</p>`;

    

  headerEl.textContent = '';
  headerEl.insertAdjacentHTML('afterbegin', header);

  footerEl.textContent = '';
  footerEl.insertAdjacentHTML('afterbegin', footer);

}

function generateRandomCoords(length) {
  let output = '';
  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * document.documentElement.clientWidth);
    const y =
      Math.floor(
        Math.random() * document.documentElement.clientHeight +
          Math.random() * 2200,
      ) - 200;

    if (i < length - 1) output += `${x}px ${y}px #FFF, `;
    else output += `${x}px ${y}px #FFF`;
  }
  return output;
}
