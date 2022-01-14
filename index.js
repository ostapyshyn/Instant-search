import {data} from "./data.js";

const results = document.querySelector("#results-list");
const search = document.querySelector("#app-search");

const render = (query = "") => {
    const cleanedupQuery = query.trim().toLowerCase();
    const filtered = data.filter(item => item.spacecraft.toLowerCase().includes(cleanedupQuery));

    results.innerHTML = "";
    filtered.forEach(item => {
        results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
    });
}

// render as the user types
search.addEventListener("keyup", () => {
    render(search.value);
});

// render on page load
render();

// Note on the performance of this approach. If you had a list that contained a lot more data, and/or you had more complicated data being rendered inside the <li> (for example, images), then this approach would be slow. That's because, for every render, we're clearing the `innerHTML` and then inserting every spacecraft again into the DOM.
// This is one of the main reasons why developers resort to a front-end library/framework (Lit, React, Vue, Angular, Ember, etc.)

// If you'd like an efficient approach in JavaScript, then you can render all of the spacecraft once, and then hide/show the ones that match the correct result.
