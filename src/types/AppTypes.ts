import React, { ComponentType, Dispatch } from "react";

export type MenuItem = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  isSelected: boolean;
};

export type AppType = {
  mainMenuItemsObject: {
    mainMenuItems: MenuItem[];
    setMainMenuItems: Dispatch<React.SetStateAction<MenuItem[]>>;
  };
};
