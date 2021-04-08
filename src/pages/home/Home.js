import React from 'react';
import { useContext } from 'react'
import content from '../../data/content.json';
import { LanguageContext} from "../../context/LanguageContext";


function Home() {

  return (

    <div className="page-container">

      <h2>{content.nl.home.title}</h2>
      <p>{content.nl.home.introText}</p>
    </div>

  );
}

export default Home;
