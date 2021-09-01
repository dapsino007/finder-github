import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {Link} from "react-router-dom";

const Navbar = () =>{
  return(
    <nav className = "navbar btn-primary">
       <h1>
         <GitHubIcon /> Github Finder
        </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> 
      </ul>
    </nav>
    
  );
};

export default Navbar;

 