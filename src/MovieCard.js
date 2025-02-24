function MovieCard(props){
    const renderStars = (note) => {
        let stars = 0;
        
        if (note < 3) {
            stars = 1;
        } else if (note < 5) {
            stars = 2;
        } else if (note < 7) {
            stars = 3;
        } else if (note < 9) {
            stars = 4;
        } else if (note <= 10) {
            stars = 5;
        }

        let arrayStars = [];
        for (let i = 0; i < stars; i++) {
            arrayStars.push(<i className="bx bxs-star text-yellow-500"></i>);
        }

        return arrayStars;
    };

    return(
        
    <a href="#" className="flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow-sm sm:flex-row md:max-w-sm md:h-72 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg" src={props.image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.titre}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            <div className="flex">
                {renderStars(props.note)}
            </div>
        </div>
    </a>

    )
}

export default MovieCard