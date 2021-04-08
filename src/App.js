import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const [language, toggleLanguage] = useState('nl');

  const data = {
    languageSwitch: setLanguage

  }

  function setLanguage() {

    if(language === "nl") {
      toggleLanguage("es");

      if (language === "es") {
        toggleLanguage("nl");
      }
    }
  }



console.log(data)
  return (
      <LanguageContext.Provider value={data}>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/all-plants">
            <AllPlants />
          </Route>
        </Switch>
    </Router>
        </LanguageContext.Provider>

  );
}

export default App;
