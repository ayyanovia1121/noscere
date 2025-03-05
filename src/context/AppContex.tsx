import { createContext, useContext } from "react";

// app context type
interface AppType {}

// use to set initial state
const defaultState={};

// create context with initial state to hold value of apptype
const AppContext = createContext<AppType>(defaultState);

// define context provider for app context
export default function AppContextProvider ({
    children,
}:{
    children: React.ReactNode;
}) {
    return <AppContext.Provider value={defaultState}>{children}</AppContext.Provider>
}

export function useAppContext() {
    return useContext(AppContext);
}