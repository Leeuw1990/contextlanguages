import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagEs} from '../../assets/spain.svg'
import content from '../../data/content.json';
import './Header.css';
import {LanguageContext} from "../../context/LanguageContext";



function Header() {
  const { activeLanguage, setNlFunction, setEsFunction} = useContext(LanguageContext)
  return (
    <>
      <header key={activeLanguage}>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                {content[activeLanguage].header.menuItems.home}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about-us">
                {content[activeLanguage].header.menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[activeLanguage].header.menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              {/*<p>{content[activeLanguage].header.changeTo}</p>*/}
              <button className="spain" onClick={setEsFunction} ><FlagEs/></button>
              <button className="dutch" onClick={setNlFunction} ><FlagNL/></button>
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content[activeLanguage].header.title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
