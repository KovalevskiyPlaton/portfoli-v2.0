import React from "react";
import styled from 'styled-components'

import Burger from "./Burger";

const Nav = styled.nav`
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #f1f1f1
    padding: 0 20px;
    display:flex;
    justify-content: space-between;
    background: linear-gradient(to right, #312b2a, #e0ddd3);
    border-radius:0px 0px 10px 10px;

.logo{
    padding: 15px 0;
}


  
`

const NavBar = ()=>{
    return(
        <Nav>
            <Burger/>
       </Nav>
                
            
      
    )
}



export default NavBar;