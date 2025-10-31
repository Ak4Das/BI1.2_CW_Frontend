import { useState } from "react"

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "releaseYear" || name === "rating" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (event)=> {
    event.preventDefault()
    try {
        const response = await fetch ("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })

        if(!response.ok) {
            throw "Failed to add movie"
        } else {
            const data = await response.json()
            console.log("Added Movie", data);
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label htmlFor="title">Title: </label>
      <br />
      <input type="text" name="title" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="releaseYear">Release Year: </label>
      <br />
      <input type="text" name="releaseYear" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="genre">Genre: </label>
      <br />
      <input type="text" name="genre" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="director">Director: </label>
      <br />
      <input type="text" name="director" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="actors">Actors: </label>
      <br />
      <input type="text" name="actors" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="language">Language: </label>
      <br />
      <input type="text" name="language" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="country">Country: </label>
      <br />
      <input type="text" name="country" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="rating">Rating: </label>
      <br />
      <input type="text" name="rating" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="plot">Plot: </label>
      <br />
      <input type="text" name="plot" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="awards">Awards: </label>
      <br />
      <input type="text" name="awards" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="posterUrl">Poster URL: </label>
      <br />
      <input type="text" name="posterUrl" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="trailerUrl">Trailer URL: </label>
      <br />
      <input type="text" name="trailerUrl" onChange={handleChange} />
      <br />
      <br />
      <button>submit</button>
    </form>
  )
}

export default AddMovieForm
