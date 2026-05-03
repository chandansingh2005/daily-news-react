import React from 'react'

function Card({ data }) {
    return (
        <div className="bg-gray-800 w-full sm:w-[45%] md:w-[30%] p-4 rounded-lg">

            <img
                src={data.image || "https://picsum.photos/300"}
                onError={(e) => {
                    e.target.src = "https://picsum.photos/300";
                }}
                alt="news"
                className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-3 font-bold">{data.title}</h3>

            <a
                href={data.url}
                target="_blank"
                className="text-blue-400"
            >
                Read More
            </a>

        </div>
    )
}

export default Card