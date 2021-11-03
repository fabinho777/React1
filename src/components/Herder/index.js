import React, { useState}  from 'react';
import { Link } from 'react-router-dom'

import { AreaHeader } from './styled';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header(){
    return (
        <AreaHeader>
        <div className="container">
            <div className="logo">
               <img src="../../../fb.png" />
            </div>
            

            <nav>
                <ul>
                    <li><Link to="/"> <HomeIcon />Inicio</Link></li>
                    <li><Link to="/config"><BuildIcon />Configurações</Link></li>
                    <li><Link to="/logout"><ExitToAppIcon />Sair</Link></li>
                </ul>
            </nav>

        </div>
        </AreaHeader>
    );
    
}
export default Header;