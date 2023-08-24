import { useContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toastify from "toastify-js"
import { UserContext } from "../../authentication/usercontext"
import { search, defaultMovies } from "../../services/omdbService"
import Footer from "../Footer/footer"
import Navbar from "../Navbar/navbar"
import "./moviebody.css"

const MovieBody = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {username} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSearch = async() => {
        try{
                const response = await search(searchTerm)
                setMovies(response)
        }catch(error){
            console.error("error fetching movie", error)
            fetchAllMovies()
        }
    }

    const fetchAllMovies = async () => {
        setIsLoading(true)
        const response = await defaultMovies()
        setMovies(response)        
      };

    // const fetchAllMovies = async () => {
    //     try {
    //       const response = await defaultMovies();
    //       setMovies(response);
    //     } catch (error) {
    //       console.error("Error fetching movies:", error);
    //       toastify({
    //         text: "Error fetching movies",
    //         duration: 3000,
    //         gravity: "top",
    //         backgroundColor: "red"
    //       }).showToast();
    //     } 
    //   };

    useEffect(() => {
        fetchAllMovies()
    },[])

    const refresh = () => {
        fetchAllMovies()
        setSearchTerm("")
        navigate("/body")
    }

    return (
        <>
            <Navbar />
            <div className="movie-container">
                <div className="movie-title">
                <span className="movie-title-header" onClick={refresh}> My Movies</span>  
                <span> Welcome {username}! </span> 
                </div>
                <div>
                <span>Search</span>  
                <input type="text"
                       placeholder="search for movies"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type="submit" style={{cursor:"pointer"}} onClick={handleSearch}>Submit</button> 
                </div>      
            </div>
            <div className="movie-list-container">
                   {movies.map((movie) => (
                            <ul key={movie.imdbID}>
                                <li>
                                    <img src={movie.Poster} alt="movie.Title" />
                                    <p>{movie.Title}</p>
                                </li>
                            </ul>
                        )
                    )}                         
                </div> 
                <Footer />
        </>
    )

}

export default MovieBody