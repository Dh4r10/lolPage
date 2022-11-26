import axios from "axios";

export const allPersonajes = async (state) => {
  const riotChamps =
    "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json";

  const peticion = await axios.get(riotChamps);
  state(peticion.data.data);
};

export const unicoChamp = async (id, state) => {
  const peticion = await axios.get(
    `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${id}.json`
  );
  state(peticion.data.data);
};

//Scroll
export const scrollUp = () => {
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 40);
  }
};
