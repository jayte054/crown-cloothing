import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; 
import "./authpage.css"
import { UserContext } from "./usercontext";

const Authpage = () => {
    const {setUsername} = useContext(UserContext)
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => setName(e.target.value)

    const handleLogin = async() => {
        try{
            if (name.trim() !== "") {
                setIsLoading(true)
                setTimeout(() => {
                    setUsername(name);
                    navigate("/body");
                  }, 1000);
              }
        }catch(error){
            return ("error signinin")
        } 
    }

    return(
        <div>
            {/* <Navbar /> */}
            <div className="authentication-container">
                <p className="authentication-header"> Authentication Page</p>
                    <div className="auth-input">
                        {/* <span> Name : </span> */}
                        <span>
                            <input type="text" 
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </span>
                    </div>
                <button type="submit"
                        onClick={handleLogin}
                >
                  {isLoading ? (
                    <ClipLoader color="gray" 
                                loading={isLoading} 
                                size={20} /> 
          ) : (
            "Submit"
          )}
                </button>
            </div>
        </div>
    )

}

export default Authpage