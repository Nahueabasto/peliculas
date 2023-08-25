import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

//     const [click, setClick] = useState(false);
//      const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);


    return(
        <div className= "header header-bg">
        <div className="logo-h1">
          
                 <h1 className="text-nav">Noticias financieras</h1>
                 </div>  
               <ul className= "nav-menu active">
               <li>
                 <Link to="/"></Link>
               </li>
               <li>
                 <Link to="/products"></Link>
               </li>
               <li>
                 <Link to="/elaborados"></Link>
               </li>
               <li>
                 <Link to="/pastas"></Link>
               </li>
               </ul>
        
             </div>
           );
         }
         