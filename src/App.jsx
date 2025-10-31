import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Movies from "./components/Movies"
import MovieByTitle from "./components/MovieByTitle"
import AddMovieForm from "./components/AddMovieForm"

function App() {
  return (
    <main>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="Dilwale Dulhania Le Jayenge" />
    </main>
  )
}

export default App
