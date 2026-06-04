import React from 'react'

function Pagination({ page, setPage }) {

  return (

    <div className="flex justify-center items-center gap-5 py-8">

      <button
        onClick={() => page > 1 && setPage(page - 1)}
        disabled={page === 1}
        className={`px-5 py-2 rounded font-semibold transition
          
          ${page === 1
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
          }
        `}
      >
        Prev
      </button>

      <h3 className='bg-gray-800 px-5 py-2 rounded text-lg font-bold shadow'>
        Page {page}
      </h3>

      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded font-semibold transition"
      >
        Next
      </button>

    </div>
  )
}

export default Pagination