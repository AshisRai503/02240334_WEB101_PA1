// MovieRow component - displays a row of movies with navigation arrows
import { useRef } from "react"
import MovieCard from "../MovieCard/MovieCard"

function MovieRow({ title, movies }) {
  // Allows us control the scroll position of the row
  const rowRef = useRef(null)

  // Scrolls the rows when arrows are clicked
  function handleScroll(direction) {
    if (direction === "left") {
      rowRef.current.scrollLeft -= 500
    } else {
      rowRef.current.scrollLeft += 500
    }
  }

  return (
    <div style={{
      padding: "20px 40px",
      color: "white",
      position: "relative"
    }}>

      {/* Row title "Trending Now" */}
      <h2 style={{
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "15px"
      }}>
        {title}
      </h2>

      {/* Left arrow button */}
      <button
        onClick={() => handleScroll("left")}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          border: "none",
          padding: "20px 10px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1
        }}>
        ❮
      </button>

      {/* Horizontal scrollable row of movie cards */}
      <div
        ref={rowRef}
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollbarWidth: "none",
          scrollBehavior: "smooth"
        }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Right arrow button */}
      <button
        onClick={() => handleScroll("right")}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          border: "none",
          padding: "20px 10px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 1
        }}>
        ❯
      </button>

    </div>
  )
}

export default MovieRow