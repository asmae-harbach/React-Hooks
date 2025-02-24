import { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal"
import Filter from "./filter";



function MovieList(){
    
    const [films, setFilms] = useState([
        {
          titre: "Inception",
          description: "Un voleur de secrets utilise des technologies de rêve pour infiltrer l'esprit d'une cible.",
          posterURL: "./images/Inception.jpg",
          note: 8.8
        },
        {
          titre: "The Matrix",
          description: "Un hacker découvre la vérité sur la réalité virtuelle dans laquelle il vit.",
          posterURL: "./images/thematrix.jpg",
          note: 8.7
        },
        {
          titre: "Interstellar",
          description: "Des astronautes voyagent à travers un trou de ver pour sauver l'humanité.",
          posterURL: "./images/interstellar.jpg",
          note: 8.6
        },
        {
            titre: "The Dark Knight",
            description: "Le justicier masqué Batman affronte le Joker, un criminel chaotique qui veut détruire Gotham.",
            posterURL: "./images/The Dark Knight.jpg",
            note: 9.0
          },
          {
            titre: "Fight Club",
            description: "Un homme insatisfait de sa vie crée un club de combat clandestin avec un étrange partenaire.",
            posterURL: "./images/fightclub.jpg",
            note: 8.8
          },
          {
            titre: "The Shawshank Redemption",
            description: "Un banquier est incarcéré à Shawshank où il forge une amitié avec un autre détenu et trouve une échappatoire.",
            posterURL: "./images/TheShawshankRedemption.jpg",
            note: 9.3
          },
          {
            titre: "The Godfather",
            description: "L'histoire de la famille Corleone et de son patriarche, Don Vito Corleone, à la tête d'un empire criminel.",
            posterURL: "./images/TheGodfather.jpg",
            note: 9.2
          },
          {
            titre: "Pulp Fiction",
            description: "Les vies de plusieurs personnages criminels se croisent à travers des récits entrelacés.",
            posterURL: "./images/pulpfiction.jpg",
            note: 8.9
          },
          {
            titre: "Forrest Gump",
            description: "L'histoire d'un homme simple et naïf qui traverse des événements marquants de l'histoire des États-Unis.",
            posterURL: "./images/Forrest.jpg",
            note: 8.8
          },
          {
            titre: "Gladiator",
            description: "Un général romain trahi devient un gladiateur en quête de vengeance contre l'empereur corrompu.",
            posterURL: "./images/gladiator.jpg",
            note: 8.5
          },
          {
            titre: "The Lion King",
            description: "Un lionceau, Simba, lutte pour reprendre son royaume après la mort tragique de son père.",
            posterURL: "./images/theLionKing.jpg",
            note: 8.5
          },
          {
            titre: "The Prestige",
            description: "Deux magiciens rivaux rivalisent pour créer le tour de magie ultime, au prix de sacrifices inimaginables.",
            posterURL: "./images/prestige.jpg",
            note: 8.5
          },
          {
            titre: "Spider-Man: No Way Home",
            description: "Spider-Man doit faire face à de puissants ennemis venant de différentes dimensions.",
            posterURL: "./images/spiderman.jpg",
            note: 8.7
          },
          {
            titre: "Avatar",
            description: "Sur la planète Pandora, un ex-soldat utilise un avatar pour s'infiltrer dans une tribu indigène.",
            posterURL: "./images/avatar.jpeg",
            note: 7.8
          },
          {
            titre: "Jurassic Park",
            description: "Des scientifiques réaniment des dinosaures et les placent dans un parc à thème, mais les choses tournent mal.",
            posterURL: "./images/jurassicpark.jpg",
            note: 8
          }
        
      ]);

      const addMovie = (movie) => {

        setFilms((prevMovies) => [...prevMovies, movie]);
    
      };

      const [filmsFiltre, setFilmsFiltre] = useState(null)

      function filterNote(selectNote){
        const filmsNote = films.filter(film => parseInt(film.note) === selectNote);
        setFilmsFiltre(filmsNote) ;
    }

    function filtreTitre(titre){
        for(let i=0; i<titre.length; i++){
            const filmsTitre = films.filter(film => film.titre.toLowerCase().includes(titre.toLowerCase())); 
            setFilmsFiltre(filmsTitre) ;
        }
    }


    return(
       <>
            <Filter filterNote={filterNote} filtreTitre = {filtreTitre}/>
            <div className="flex flex-wrap justify-center gap-4">
                
                {(filmsFiltre ? filmsFiltre : films).map((film) => {
                    return(
                        <div className="flex mt-8">
                            <MovieCard titre = {film.titre} description = {film.description} image = {film.posterURL} note = {film.note} />
                        </div>
                    )
                }
                )}
                <Modal addMovie={addMovie} />
            </div>
       </>
    )
}

export default MovieList