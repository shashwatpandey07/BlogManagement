import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Logo from "../../images/Logo.png";

export default function Topbar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
  return (
    <div className="top">
        <div className="topleft">
            <a href="https://www.linkedin.com/in/shailka-bhatnagar-115866204/" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i class="topIcon fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/Shai_kespeare" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i className="topIcon fa-brands fa-square-twitter"></i></a>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <a href="https://www.instagram.com/shailka_why/" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i className="topIcon fa-brands fa-square-instagram"></i></a>          
        </div>

        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <a href="#About" className="link">
                <li className="topListItem">ABOUT</li>
                </a>
                <a href="#footeri" className="link">
                <li className="topListItem">CONTACT</li>
                </a>
                <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>

        <div className="topright">
            {
                user ? (
                    <Link to="/settings" className="link">
                    <img
                        className="topImg"
                        src={Logo} alt="" />
                        </Link>

                ) :
                (
                    <ul className="topList">
                        <li className="topListItem ">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        {/* <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li> */}
                    </ul>
                )
            }
            {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}
