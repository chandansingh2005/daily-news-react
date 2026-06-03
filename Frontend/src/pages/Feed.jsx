import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Feed() {

  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:4000/feed"
      )

      setPosts(res.data.post)

    } catch (err) {

      console.log(err)

    }
  }



  useEffect(() => {
    fetchPosts()
  }, [])

  // delete
  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:4000/delete-post/${id}`
      )

      alert("Post Deleted Successfully")

      window.location.reload()

    } catch (err) {

      console.log(err)

    }
  }

  return (

    <div className="bg-gray-900 min-h-screen text-white p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Community Feed
      </h1>

      <div className="flex flex-wrap justify-center gap-6">

        
           <button
                onClick={() => handleDelete(data._id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10"
            >
                ✕
            </button>
        {
          posts.map((item) => (
            
            <div
            key={item._id}
            className="bg-gray-800 w-full sm:w-[45%] md:w-[30%] rounded-xl overflow-hidden shadow-lg"
            >
            

            <img
                src={item.image}
                alt=""
                className="w-full h-52 object-cover"
                />
              


              <div className="p-4">

                <h2 className="text-xl font-bold mb-3">
                  {item.heading}
                </h2>
                

                <p className="text-gray-300">
                  {item.details}
                </p>

              </div>

            </div>
          ))
        }
       

      </div>

    </div>
  )
}

export default Feed