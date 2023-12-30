import React from 'react'; 
import { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';
import "./Moviegrid.css"


const moviesURL = import.meta.env.VITE_API; 
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topmovies, setTopmovies] = useState([])

    const getopMovies = async(url)=>{
        const resposta = await fetch(url); 
        // tranformar em json 
        const data = await resposta.json(); 

        setTopmovies(data.results);   

    }

    useEffect(()=>{

        const topRatedUrl = `${moviesURL}top_rated?${apikey}`; 

        getopMovies(topRatedUrl)

    }, [])


  return (

    <div className='container'>

        <h2 className='title'>Melhores filmes</h2>

        <div className='movies_container'>

            {topmovies.length === 0 && <p>Carregando...</p>}
            {topmovies.length>0 && topmovies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
 
        </div>
        
    </div>
  )
}

export default Home