import React from 'react'
import Card from './Card'

function NewsList({ news }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">

      {news.length > 0 ? (
        news.map((item, i) => (
          <Card key={i} data={item} />
        ))
      ) : (
        <h2 className='text-2xl font-bold top-1/2 left-1/2'>Loading...</h2>
      )}

    </div>
  )
}

export default NewsList