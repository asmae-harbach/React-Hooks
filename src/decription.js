import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Description = ({films})=>{
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/")
      };
    const params = useParams() ;
    const [filmFiltre, setFilmFiltre] = useState([])
    
    useEffect(() => {
        const filteredFilm = films.filter((film) => film.titre.toLowerCase() === params.name.toLowerCase());
        setFilmFiltre(filteredFilm);
      }, [params.name, films]);
    return(
        <div className="w-full bg-black h-screen flex justify-around items-center">
            <button className="self-start rounded-md bg-red-600" onClick={handleClick}><i class='bx bx-chevron-left text-white text-5xl'></i></button>
            
            {filmFiltre.map((filter)=>
                (                       
                    <a href="#" class="flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-col md:w-[80%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <iframe class="object-cover w-full h-96 rounded-t-lg  md:rounded-none md:rounded-s-lg"  src={filter.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class="flex flex-col justify-around p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{filter.titre}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{filter.description}</p>
                        </div>
                    </a>
                )

            )}
            
        </div>
    )
}
export default Description