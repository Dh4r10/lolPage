export default function Dark() {
  document.body.classList.toggle("dark");
  document.querySelector(".sun").classList.toggle("DarkSun");
  document.querySelector(".moon").classList.toggle  ("DarkMoon");
  document.querySelector(".footerConteiner").classList.toggle ("DarkfooterConteiner");
  document.querySelector(".textosContactos").classList.toggle  ("DarktextosContactos");
  document.querySelector(".brandIcons").classList.toggle  ("DarkbrandIcons");
  document.querySelector(".copyright").classList.toggle("Darkcopyright");
  document.querySelector(".scroll").classList.toggle("Darkscroll");
  document.querySelector(".redes").classList.toggle("Darkredes");
  document.querySelector(".form").classList.toggle("Darkform");
  document.querySelector(".controlBuscador").classList.toggle("DarkcontrolBuscador");
}