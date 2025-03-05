import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='w-[274px] bg-sidebar h-screen px-5 py-7 border-slate-200 border-r'>
            <Logo />
            <MainSection />
            <OtherSection />
        </div>
    </div>
  )
}

export default Sidebar