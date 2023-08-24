import {GiLion} from "react-icons/gi"
import "./footer.css"

const Footer = () => {
   

    return (
        <div className="footer-container">
            <div>
            <h3 className="footer-title"> About </h3>
            <p className="footer-text">This is a single page app designed with respect to the specifications as instructed. <br />
                                        A single page application that fetches the OMDB Api which enables a user to view <br />
                                        movies of interest
                                        
            </p>
            <p className="footer-tech"> Technologies Used</p>
            <ul className="footer-list">
                <li>React: For Development</li>
                <li>Vercel: For Deployment</li>
            </ul>
            </div>
            <div className="footer-dev">
                <GiLion className="lion"/>
                <p>Developer Portfolio: <a href="https://portfolio-two-hazel-71.vercel.app/" target="_blank">Protfolio</a></p>
            </div>

            
        </div>
    )
}

export default Footer