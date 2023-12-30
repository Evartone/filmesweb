import { useEffect, useState } from "react"
import { useSearchParams  } from "react-router-dom"
import MovieCard from "../Components/MovieCard"
import "./Moviegrid.css"

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

const Search = () => {

    const [searchParams] = useSearchParams(); 

    const [movies, setMovies] = useState([])
    // pegando o parametro 
    const query = searchParams.get("q");  

    const Getsearchmovie = async (url) =>{

        const res = await fetch(url)
        const data = await res.json(); 
         
        setMovies(data.results); 
    }; 

    useEffect(()=> {

        const Seachedmovies = `${searchURL}?${apikey}&query=${query}`; 

        Getsearchmovie(Seachedmovies); 

    }, [query]); 

  return (

    <div className='container'>

        <h2 className='title'>
          Resultados para:<span className="query_text">{query}</span>
        </h2>

       <div className='movies_container'>

          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length>0 && movies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}

       </div>
    
    </div>
  )

}

export default Search; 