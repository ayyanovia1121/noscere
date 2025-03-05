"use client";
import { AppType, MenuItem } from "@/types/AppTypes";
import { createContext, useContext, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdHistory, MdSubscriptions } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";


// use to set initial state
const defaultState = {
  mainMenuItemsObject: {
    mainMenuItems: [],
    setMainMenuItems: () => {},
  },
};

// create context with initial state to hold value of apptype
const AppContext = createContext<AppType>(defaultState);

// define context provider for app context
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {

    const [mainMenuItems, setMainMenuItems] = useState<MenuItem[]>([
        {
            icon: LuLayoutDashboard,
            label: "Dashboard",
            isSelected: true, 
        },
        {
            icon: MdHistory,
            label: "History",
            isSelected: false, 
        },
        {
            icon: MdSubscriptions,
            label: "Subscriptions",
            isSelected: false, 
        },
        {
            icon: TbTemplate,
            label: "Templates",
            isSelected: false,
        }
    ]);
  return (
    <AppContext.Provider
      value={{
        mainMenuItemsObject: {
          mainMenuItems,
          setMainMenuItems,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
