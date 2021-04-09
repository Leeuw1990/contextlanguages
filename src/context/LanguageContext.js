import React, {createContext, useState} from 'react';

export const LanguageContext = createContext({})

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('es');

    function setNl() {
        toggleLanguage('nl')
    }

    function setEs() {
        toggleLanguage('es')
    }

    const data = {
        activeLanguage: language,
        setNlFunction: setNl,
        setEsFunction: setEs
    }
    return(

        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>

    )
}

export default LanguageContextProvider;