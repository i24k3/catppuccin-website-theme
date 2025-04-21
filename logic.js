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
  document.body.style.backgroundColor = colors.base;
  document.body.style.color = colors.text;

  document.querySelectorAll('a').forEach(link => {
    link.style.color = colors.links;
  });

  const style = document.createElement('style');
  style.innerHTML = `
  *{
    background-color: ${colors.base} !important;
    color: ${colors.text} !important;
  }

  img {
  padding: 1%;
  border: 1px solid ${colors.borders};
  border-radius: 11px;
    
  }

  a {
    color: ${colors.links} !important;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.headings} !important;
  }
`;
  document.head.appendChild(style);
};

// Run when the page is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setColor(colors));
} else {
  setColor(colors);
}
