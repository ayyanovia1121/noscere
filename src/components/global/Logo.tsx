import { Zap } from "lucide-react";
import React from "react";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-9 h-9 bg-amber-600 rounded-md flex items-center justify-center">
        <Zap className="text-white text-[19px]" />
      </div>
      <h1 className="text-[20px]">
        <span className="text-amber-300 font-semibold">No</span>
        <span className="text-amber-600 font-bold">scere</span>
      </h1>
    </div>
  );
};

export default Logo;
