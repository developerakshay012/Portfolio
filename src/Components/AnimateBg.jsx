import React from 'react'

const AnimateBg = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
  {/* Top Left Glow */}
  <div
    className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full
    bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300
    opacity-20 blur-3xl animate-blob"
  ></div>

  {/* Top Right Glow */}
  <div
    className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full
    bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-200
    opacity-15 blur-3xl animate-blob animation-delay-4000"
  ></div>
</div>
  )
}

export default AnimateBg