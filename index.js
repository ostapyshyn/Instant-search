import { data } from './data.js';
let field = document.querySelector('#app-search');
let spacecrafts = data.map((craft) => craft.spacecraft);
let list = document.querySelector('#results-list');
spacecrafts.forEach((space) => {
  list.insertAdjacentHTML('beforeend', `<li>${space}</li>`);
});
field.addEventListener('keyup', (event) => {
  let filtered = spacecrafts.filter((space) => {
    return space.toLowerCase().includes(field.value.trim().toLowerCase());
  });
  list.textContent = '';
  filtered.forEach((space) => {
    list.insertAdjacentHTML('beforeend', `<li>${space}</li>`);
  });
});
