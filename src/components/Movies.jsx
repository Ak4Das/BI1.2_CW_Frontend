import useFetch from "../useFetch"
import {useState} from "react"

const Movies = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { data, loading, error } = useFetch(
    "https://bi-1-2-cw-backend.vercel.app/getMovies"
  )
  // console.log(data)

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://bi-1-2-cw-backend.vercel.app/delete/${movieId}`,
        { method: "DELETE" }
      )
      if (!response.ok) {
        throw "Failed to delete movie"
      }
      const data = await response.json()
      if (data) {
        setSuccessMessage("Movie Deleted Successfully.")
        window.location.reload()
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>}
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>
            {movie.title}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  )
}

export default Movies
