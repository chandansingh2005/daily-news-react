import React from 'react'
import Card from './Card'

function NewsList({ news }) {

  return (

    <div className="flex flex-wrap justify-center gap-6 p-6 min-h-[70vh]">

      {
        news.length > 0 ? (

          news.map((item, i) => (
            <Card key={i} data={item} />
          ))

        ) : (

          <div className="flex items-center justify-center w-full">

            <h2 className='text-3xl font-bold text-gray-400'>
              No News Found
            </h2>

          </div>
        )
      }

    </div>
  )
}

export default NewsList