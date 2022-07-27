import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    team: false,
    instructors: false,
    colorPicker: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, SetActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{ activeMenu, }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);