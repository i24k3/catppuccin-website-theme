'use strict';

const colors = {
  base: '#1e1e2e',
  text: '#cdd6f4',
  subtext: '#a6adc8',
  headings: '#cba6f7',
  borders: '#f3bce6',
  links: '#89b4fa',
  visited: '#b4befe',
};

const setColor = (colors) => {

  /*
  document.body.style.backgroundColor = colors.base;
  document.body.style.color = colors.text;

  document.querySelectorAll('a').forEach(link => {
    link.style.color = colors.links;
  });
  */

  const style = document.createElement('style');
  style.innerHTML = `
:root {
  /* Base colors */
  --ctp-base: #1e1e2e;
  --ctp-mantle: #181825;
  --ctp-crust: #11111b;

  /* Text colors */
  --ctp-text: #cdd6f4;
  --ctp-subtext1: #bac2de;
  --ctp-subtext0: #a6adc8;

  /* Accent colors */
  --ctp-blue: #89b4fa;
  --ctp-sky: #89dceb;
  --ctp-surface0: #313244;
  --ctp-surface1: #45475a;
  --ctp-surface2: #585b70;
}

* {
background-color: transparent !important;
  color: var(--ctp-text) !important;
}

div, ul {
background-color: transparent !important;
  color: var(--ctp-text) !important;
}

document,
body,
section,
main,
header, footer, article, nav, aside, figure {
  background-color: var(--ctp-base) !important;
  color: var(--ctp-text) !important;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--ctp-subtext0) !important;
}
p, span, li, strong, em {
  color: var(--ctp-text) !important;
}
p {
  background-color: var(--ctp-base) !important;
}

a {
  color: var(--ctp-blue) !important;
  background-color: transparent !important;
}
a:hover {
  color: var(--ctp-sky) !important;
}

button,
input[type="button"],
input[type="submit"] {
  background-color: var(--ctp-surface0) !important;
  color: var(--ctp-text) !important;
  border: 1px solid var(--ctp-surface2) !important;
}
button:hover {
  background-color: var(--ctp-surface1) !important;
}

input,
textarea,
select {
  background-color: var(--ctp-mantle) !important;
  color: var(--ctp-text) !important;
  border: 1px solid var(--ctp-surface2) !important;
}

input::placeholder {
  color: var(--ctp-text) !important;
}

textarea::palceholder {
  color: var(--ctp-text) !important;
}

table {
  background-color: var(--ctp-surface0) !important;
  color: var(--ctp-text) !important;
}
th, td {
  border: 1px solid var(--ctp-surface2) !important;
}
th {
  background-color: var(--ctp-surface1) !important;
}
td {
  background-color: var(--ctp-surface0) !important;
}

img {
  border: 1px solid var(--ctp-surface2) !important;
  background-color: var(--ctp-surface0) !important;
}

code, pre {
  background-color: var(--ctp-crust) !important;
  color: var(--ctp-blue) !important;
}

`;
  document.head.appendChild(style);
};


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setColor(colors);
  });
} else {
  setColor(colors);
}
