import MovieList from "./MovieList"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Description from "./decription";


export default function App() {
  const [films, setFilms] = useState([
    {
      titre: "Inception",
      description: "Un voleur de secrets utilise des technologies de rêve pour infiltrer l'esprit d'une cible.",
      posterURL: "./images/Inception.jpg",
      note: 8.8,
      trailer : "https://www.youtube.com/embed/W7OTkEY1tMI?si=8V40e8G3hLEtIx9-"
    },
    {
      titre: "The Matrix",
      description: "Un hacker découvre la vérité sur la réalité virtuelle dans laquelle il vit.",
      posterURL: "./images/thematrix.jpg",
      note: 8.7,
      trailer : "https://www.youtube.com/embed/9ix7TUGVYIo?si=luOkA1VVuN5X8Uh4"
    },
    {
      titre: "Interstellar",
      description: "Des astronautes voyagent à travers un trou de ver pour sauver l'humanité.",
      posterURL: "./images/interstellar.jpg",
      note: 8.6,
      trailer : "https://www.youtube.com/embed/zSWdZVtXT7E?si=nJh6NVq_Bvur0M7R"
    },
    {
        titre: "The Dark Knight",
        description: "Le justicier masqué Batman affronte le Joker, un criminel chaotique qui veut détruire Gotham.",
        posterURL: "./images/The Dark Knight.jpg",
        note: 9.0,
        trailer : "https://www.youtube.com/embed/kmJLuwP3MbY?si=HxuFiTMAGrfkrwAx"
      },
      {
        titre: "Fight Club",
        description: "Un homme insatisfait de sa vie crée un club de combat clandestin avec un étrange partenaire.",
        posterURL: "./images/fightclub.jpg",
        note: 8.8,
        trailer : "https://www.youtube.com/embed/O1nDozs-LxI?si=wTxI1TpjDgJaMry9"
      },
      {
        titre: "The Shawshank Redemption",
        description: "Un banquier est incarcéré à Shawshank où il forge une amitié avec un autre détenu et trouve une échappatoire.",
        posterURL: "./images/TheShawshankRedemption.jpg",
        note: 9.3,
        trailer : "https://www.youtube.com/embed/9iY4oA8VWnA?si=KEyRm1vmTaA2h0tX"

      },
      {
        titre: "The Godfather",
        description: "L'histoire de la famille Corleone et de son patriarche, Don Vito Corleone, à la tête d'un empire criminel.",
        posterURL: "./images/TheGodfather.jpg",
        note: 9.2,
        trailer : "https://www.youtube.com/embed/sY1S34973zA?si=oe-nssiHfU2Kt7Fm"
      },
      {
        titre: "Pulp Fiction",
        description: "Les vies de plusieurs personnages criminels se croisent à travers des récits entrelacés.",
        posterURL: "./images/pulpfiction.jpg",
        note: 8.9,
        trailer : "https://www.youtube.com/embed/tGpTpVyI_OQ?si=p54mcz2w4vgK4A4k"
      },
      {
        titre: "Forrest Gump",
        description: "L'histoire d'un homme simple et naïf qui traverse des événements marquants de l'histoire des États-Unis.",
        posterURL: "./images/Forrest.jpg",
        note: 8.8,
        trailer : "https://www.youtube.com/embed/Mj9IA9tTfio?si=fHSM3d4vTNArW5sX"
      },
      {
        titre: "Gladiator",
        description: "Un général romain trahi devient un gladiateur en quête de vengeance contre l'empereur corrompu.",
        posterURL: "./images/gladiator.jpg",
        note: 8.5,
        trailer : "https://www.youtube.com/embed/4rgYUipGJNo?si=rytoS-nAcxUBmvoF"

      },
      {
        titre: "The Lion King",
        description: "Un lionceau, Simba, lutte pour reprendre son royaume après la mort tragique de son père.",
        posterURL: "./images/theLionKing.jpg",
        note: 8.5,
        trailer : "https://www.youtube.com/embed/o17MF9vnabg?si=60BNN7oYe5FjoWEl"
      },
      {
        titre: "The Prestige",
        description: "Deux magiciens rivaux rivalisent pour créer le tour de magie ultime, au prix de sacrifices inimaginables.",
        posterURL: "./images/prestige.jpg",
        note: 8.5,
        trailer : "https://www.youtube.com/embed/RLtaA9fFNXU?si=HnEgW6bVlfXIl7EH"
      },
      {
        titre: "Spider-Man: No Way Home",
        description: "Spider-Man doit faire face à de puissants ennemis venant de différentes dimensions.",
        posterURL: "./images/spiderman.jpg",
        note: 8.7,
        trailer : "https://www.youtube.com/embed/JfVOs4VSpmA?si=bNmqeAXCjS2mCwDD"
      },
      {
        titre: "Avatar",
        description: "Sur la planète Pandora, un ex-soldat utilise un avatar pour s'infiltrer dans une tribu indigène.",
        posterURL: "./images/avatar.jpeg",
        note: 7.8,
        trailer : "https://www.youtube.com/embed/d9MyW72ELq0?si=zzFYvIEv0jF4d_9P"
      },
      {
        titre: "Jurassic Park",
        description: "Des scientifiques réaniment des dinosaures et les placent dans un parc à thème, mais les choses tournent mal.",
        posterURL: "./images/jurassicpark.jpg",
        note: 8,
        trailer : "https://www.youtube.com/embed/jan5CFWs9ic?si=W-wkTd_rgA9lzHPH"
      }
    
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList films = {films} setFilms = {setFilms} />}/>
        <Route path="/description/:name" element={<Description films = {films}/>}/>
      </Routes>
    </BrowserRouter>

  )
}