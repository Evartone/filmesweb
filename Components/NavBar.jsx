import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "./Navbar.css"; 

const NavBar = () => {
    const [search, setSearch ] = useState("")
    const navigate = useNavigate(); 

    const handleSubmit =(e)=>{

        e.preventDefault();  

        if(!search) return 

        navigate(`/search?q=${search}`);  

        setSearch("") //limpando o campo

    }

  return (
    
        <nav id='navbar'>

          <h2>

            <Link to="/"> <BiCameraMovie />Only Movies<span className='com'>.Com</span></Link>
          </h2>

           <form onSubmit={handleSubmit} >

             <input type="text"  placeholder='Busque um filme' onChange={(e)=> setSearch(e.target.value)} 
             value={search}/>
             <button > <BiSearchAlt2 /></button>
 
           </form>

       </nav>
  )
}

export default NavBar; 