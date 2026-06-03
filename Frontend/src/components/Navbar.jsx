import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {

  const [input, setInput] = useState("")

  const handleSearch = () => {

    if (!input.trim()) return

    onSearch(input)

    setInput("")
  }

  const categories = [
    "Technology",
    "India",
    "Sports",
    "Business",
    "AI",
    "Cricket"
  ]

  return (

    <div className="bg-gray-900 border-b border-gray-700 px-6 py-4 sticky top-0 z-50 backdrop-blur-lg">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* LEFT SIDE */}

        <div className="flex flex-col md:flex-row items-center gap-6">

          {/* LOGO */}

          <Link to="/">

            <h1 className="text-4xl font-extrabold text-blue-400 tracking-wide cursor-pointer hover:scale-105 transition duration-300">
              DailyNews
            </h1>

          </Link>

          {/* NAVIGATION */}

          <div className="flex items-center gap-5 text-lg font-semibold">

            <Link
              to="/"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Home
            </Link>

            <Link
              to="/feed"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Community
            </Link>

            <Link
              to="/create-post"
              className="px-5 py-2 rounded-full bg-gray-800 hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Create News
            </Link>

          </div>

        </div>

        {/* SEARCH BAR */}

        <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-[420px] shadow-lg">

          <input
            className="w-full px-5 py-3 text-black outline-none"
            type="text"
            placeholder="Search latest news..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 px-5 py-3 hover:bg-blue-600 transition-all duration-300"
          >
            <i className="ri-search-line text-white text-2xl"></i>
          </button>

        </div>

      </div>

      {/* CATEGORIES */}

      <div className="flex flex-wrap justify-center gap-4 mt-6">

        {
          categories.map((item, index) => (

            <button
              key={index}
              onClick={() => onSearch(item)}
              className="bg-gray-800 hover:bg-blue-500 hover:scale-105 px-5 py-2 rounded-full transition-all duration-300 shadow-md font-medium"
            >
              {item}
            </button>
          ))
        }

      </div>

    </div>
  )
}

export default Navbar