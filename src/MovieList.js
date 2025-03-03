import { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal"
import Filter from "./filter";


function MovieList({films, setFilms}){
    
   

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