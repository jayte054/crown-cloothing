import { useContext } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { UserContext } from "../../authentication/usercontext"
import "./navbar.css"

const Navbar = () => {
    const {setUsername} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSignout = () => {
        setUsername("")
        navigate("/")
    }

   

    return(
        <>
            <div className="navbar-container">
                <span style={{color: "black"}}>Movie Page</span>
                <span className="span" onClick={handleSignout}>Signout</span>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar