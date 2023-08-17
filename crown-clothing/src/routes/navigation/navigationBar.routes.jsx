import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {FaCrown} from "react-icons/fa"
import "./navigationBar.routes.scss"
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  const signOutHandler = async() => {
     await signOutUser()
  }

  

    return (
      <Fragment>
            <div className="navigation-container">
               <Link className="logo-container" to="/">
                 <FaCrown className="logo" />
                 </Link>
            <div className="nav-link-container">
                <Link className="shop-link" to="/shop">
                Shop
                </Link> 
                {currentUser? (
                  <span className="signOut-link" onClick={signOutHandler}>Sign Out</span>
                ): (
              <Link className = "signIn-link" to = "/auth">
                  Sign In
              </Link>
                )}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
            </div>
            <Outlet /> 
      
      </Fragment>
    )
  }

  export default Navigation;