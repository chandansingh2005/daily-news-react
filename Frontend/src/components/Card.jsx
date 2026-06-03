import React from 'react'
import axios from "axios"

function Card({ data }) {


    

    return (

        <div className="bg-gray-800 w-full sm:w-[45%] md:w-[30%] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

           
            <img
                src={data.image || "https://picsum.photos/300"}
                alt="news"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://picsum.photos/300"
                }}
                className="w-full h-52 object-cover"
            />

            <div className="p-4 flex flex-col gap-3">

                <h3 className="text-lg font-bold line-clamp-2">
                    {data.title}
                </h3>

                <p className="text-gray-300 text-sm line-clamp-3">
                    {data.description || "No description available"}
                </p>

                <div className="flex justify-between items-center mt-2">

                    <span className="text-sm text-gray-400">
                        {data.source?.name || "News"}
                    </span>

                    <a
                        href={data.url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                    >
                        Read More
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Card