// Main App component
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import MovieRow from "./components/MovieRow/MovieRow"
import movies from "./data/movies"

function App() {
  // Filter movies by category
  const trending = movies.filter(movie => movie.category === "Trending Now")
  const popular = movies.filter(movie => movie.category === "Popular on Netflix")

  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      
      {/* Movie rows section */}
      <div style={{ paddingBottom: "40px" }}>
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Popular on Netflix" movies={popular} />
      </div>
    </div>
  )
}

export default App