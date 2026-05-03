import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'
import Pagination from './components/Pagination'

function App() {
  const [news, setNews] = useState([])
  const [query, setQuery] = useState("technology")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&page=${page}&apikey=${API_KEY}`
      )
      setNews(res.data.articles)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [query, page])

  return (
    <div className="bg-gray-900 min-h-screen text-white">

      <Navbar onSearch={setQuery} />
      

      <NewsList news={news} />

      <Pagination page={page} setPage={setPage} />

    </div>
  )
}

export default App