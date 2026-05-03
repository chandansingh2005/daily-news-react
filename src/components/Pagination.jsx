import React from 'react'

function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center gap-4 p-5">

      <button
        onClick={() => page > 1 && setPage(page - 1)}
        className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
      >
        Prev
      </button>

      <h3 className='bg-black px-4 py-2 rounded cursor-pointer'>Page {page}</h3>

      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
      >
        Next
      </button>

    </div>
  )
}

export default Pagination