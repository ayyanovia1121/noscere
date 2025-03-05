import React from 'react'
import Logo from '../global/Logo'
import { FiSidebar } from 'react-icons/fi';
import MainSection from './main-section';
import SettingSection from './settingSection';

const Sidebar = () => {
  return (
    <div>
      <div className="w-[274px] bg-sidebar h-screen px-5 py-7 border-slate-200 border-r">
        <div className="flex items-center justify-between space-x-2 mt-1 mb-16">
          <Logo />
          <FiSidebar className="text-sm text-slate-500" />
        </div>
        <MainSection />
        <SettingSection />
      </div>
    </div>
  );
}

export default Sidebar