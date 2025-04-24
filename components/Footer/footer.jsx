import React from 'react'

function footer() {
  return (
    <footer className="bg-footer text-white px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        
        {/* Left: Contact Info */}
        <div className="space-y-2 sm:text-left text-center z-10">
          <h2 className="text-lg sm:text-xl font-semibold">Contact.</h2>
          <p className="text-sm sm:text-base">Visar Labs</p>
          <p className="text-sm sm:text-base">1952 Quilly Lane</p>
          <p className="text-sm sm:text-base">Upper Arlington</p>
          <p className="text-sm sm:text-base">Ohio</p>
        </div>

        {/* Center: Email */}
        <div className="flex justify-center items-center z-10">
          <p className="text-lg sm:text-2xl font-semibold font-serif text-center">
            info@visarlabs.com
          </p>
        </div>

        {/* Right: Decorative Visar text */}
        <div className="hidden sm:block  z-0">
          <div className="text-4xl sm:text-5xl relative font-bold text-white/10 leading-tight text-right">
         
            <p className="tracking-wide">Visar Visar Visar</p>
            <p className="tracking-wide">Visar Visar Visar</p>
            <p className="tracking-wide">
              ar Visar <span className="text-white font-extrabold">Visar</span> Vi
            </p>
            <div class="w-0 h-0 absolute
               border-r-[50px] border-r-transparent
                border-t-[195px] border-t-footer"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
