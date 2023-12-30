import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from "react-icons/bs"

import "./Movie.css"
import MovieCard from "../Components/MovieCard";


const moviesURL = import.meta.env.VITE_API; 
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url)=> {

        const resposta = await fetch(url); 
        // tranformar em json 
        const data = await resposta.json(); 

        setMovie(data); 

    }

    useEffect(()=>{
        const movieUrl =`${moviesURL}${id}?${apikey}`
        getMovie(movieUrl)
    }, [])


    const FormatarMoeda = (number) =>{

        return number.toLocaleString("en-US", {
            style: "currency", 
            currency: "USD"
        }); 

    }

  return (

    <div className="movie_page">
        
        {movie && (

        <>
         <MovieCard movie={movie}  showlink={false}/>

         <p className="tagline"> {movie.tagline} </p>

         <div className="info">

            <h3>
                <BsWallet2 /> Orçamento:
            </h3>

            <p>{ FormatarMoeda(movie.budget)}</p>

         </div>

         <div className="info">

          <h3>
             <BsGraphUp /> Receita: 
          </h3>

          <p>{ FormatarMoeda(movie.revenue)}</p>

          </div>


         <div className="info">

        <h3>
         <BsHourglassSplit /> Duração:
        </h3>

        <p>{movie.runtime} minutos</p>

        </div>


          <div className="info discription">

            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
           </h3>

          <p>{movie.overview}</p>

          </div>
        
         </>

    )}</div>
  )

}; 

export default Movie; 