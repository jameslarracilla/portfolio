document.querySelector(".to-projs").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(e.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
