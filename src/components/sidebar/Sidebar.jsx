import "./sidebar.css";
import {useEffect, useState} from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar_image from "../../images/Sidebar_image.png";
import { axiosInstance } from "../../config";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => 
    {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    }
    getCats();
  }, [])

  return (
    <div className="sidebar" id="About">

      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sidebarImg" src={Sidebar_image} alt="#" />
          <p className="sidebarPara">Hi, I am Shailka Bhatnagar, currently pursuing my bachelor's in English from Lady Shree Ram College. I am a queer writer, poet, an artist when my words are silent and reader when there are books which I love to read.</p>
      </div>

      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
          </ul>
      </div>

      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
          <a href="https://www.linkedin.com/in/shailka-bhatnagar-115866204/" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i class="sidebarIcon fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/Shai_kespeare" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <a href="https://www.instagram.com/shailka_why/" alt="#" target = "_blank" rel="noreferrer" className='link cursor-pointer'><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>   
          </div>
      </div>


    </div>
  )
}
