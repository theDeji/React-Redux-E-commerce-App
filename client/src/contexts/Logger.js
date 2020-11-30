import React, { createContext, useState } from 'react';

export const LoggerContext = createContext();

const LoggerContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <LoggerContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </LoggerContext.Provider>
    )

}

export default LoggerContextProvider