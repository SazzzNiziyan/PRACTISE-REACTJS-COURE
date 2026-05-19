import React from 'react'

const navbar = () => {
  return (
    <>
    <div>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">My App</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default navbar