const links = document.querySelectorAll("#link");
links.forEach((a, index) => {
  const letters = a.textContent.split("");
  const newHTML = letters
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");
  a.innerHTML = newHTML;
});