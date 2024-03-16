const input = document.querySelector("input");
const h1 = document.querySelector(".changeHead");
function ageCaluclator() {
  const today = new Date().getTime();
  const birthDate = new Date(input.value).getTime();
  const age = today - birthDate;
  h1.innerHTML = `Your Age is ${Math.floor(age / 1000 / 60 / 60 / 24 / 365)}`;
}
