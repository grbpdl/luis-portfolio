import React from 'react'

const Full = () => {
  return (
    
       <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory border border-e-red-300">
        {/* First Full-Screen Div */}
        <div className="w-full h-screen bg-blue-500 flex items-center justify-center snap-start border border-e-green-300">
          <h1 className="text-white text-4xl">First Full-Screen Div</h1>
        </div>
        {/* Second Full-Screen Div */}
        <div className="w-full h-screen bg-green-500 flex items-center justify-center snap-start border border-e-green-300">
          <h1 className="text-white text-4xl">Second Full-Screen Div</h1>
        </div>
      </div>
  )
}

export default Full
