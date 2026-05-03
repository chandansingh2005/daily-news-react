import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar({ onSearch }) {
  const [input, setInput] = useState("")

  const handleSearch = () => {
    if (!input.trim()) return
    onSearch(input)
    setInput("")
  }

  return (
    <div className="flex  flex-col md:flex-row justify-between  items-center gap-3 px-6 py-4 bg-gray-800">

      <h1 className="text-xl font-bold ">DailyNews</h1>

      <div className="flex items-center gap-2 bg-white px-3 py-1 rounded">
        <input
          className="bg-transparent outline-none text-black px-2"
          type="text"
          placeholder="Search tech news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button onClick={handleSearch}>
          <i className="ri-search-line text-black text-xl cursor-pointer"></i>
        </button>
      </div>

    </div>
  )
}

export default Navbar