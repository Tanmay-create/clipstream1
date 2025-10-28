import { createContext } from "react";
import {useState} from 'react'

export const AppContext= createContext();

export const AppProvider=({children})=>{

    const [sidebarData, setSidebarData]=useState("");

    return(
        <AppContext.Provider value={{sidebarData, setSidebarData}}>
            {children}
        </AppContext.Provider>

    );
};