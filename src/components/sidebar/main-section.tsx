"use client";
import { useAppContext } from "@/context/AppContex";
import { createElement } from "react";

function MainSection() {
  const {
    mainMenuItemsObject: { mainMenuItems, setMainMenuItems },
  } = useAppContext();

  const handleSelectionChange = (index: number) => {
    setMainMenuItems(
      mainMenuItems.map((item, i) => ({
        ...item,
        isSelected: i === index,
      }))
    );
  };
  return (
    <div className="space-x-3">
      <h2 className="text-[13px] px-2 font-semibold text-gray-400 uppercase">
        Main Menu
      </h2>

      <div className="flex flex-col gap-[4px] pr-12">
        {mainMenuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelectionChange(index)}
            className={`flex items-center space-x-2 select-none cursor-pointer 
          ${
            item.isSelected
              ? "bg-amber-50 py-[6px] px-2 rounded-md text-amber-600"
              : "text-gray-400 px-2 py-[6px]"
          }`}
          >
            {createElement(item.icon, {
              className: `${
                item.isSelected ? "text-amber-600" : "text-gray-400"
              }`,
            })}
            <span className="text-[14px]">{item.label}</span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
