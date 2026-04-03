// MovieCard component - Displays a single movie thumbnail

function MovieCard({ movie }) {
  return (
    <div style={{
      minWidth: "150px",
      height: "225px",
      borderRadius: "4px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s",
    }}
      // When mouse hovers over card, scale it up slightly
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </div>
  )
}

export default MovieCard