// The big banner section at the top of the page

function Hero() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundImage: "url(https://jojo-news.com/wp-content/uploads/2025/04/Steel-Ball-Run-Anime-Revealed.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      padding: "0 40px",
    }}>
      
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}/>

      {/* title and buttons */}
      <div style={{
        position: "relative",
        zIndex: 1,
        color: "white",
        maxWidth: "600px"
      }}>
        <h1 style={{
          fontSize: "clamp(22px, 4vw, 62px)",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          Steel Ball Run: JoJo's Bizarre Adventure
        </h1>

        <p style={{
          fontSize: "clamp(14px, 2vw, 20px)",
          marginBottom: "30px",
          lineHeight: "1.5"
        }}>
          A paraplegic ex-jockey joins forces with an outlaw to compete 
          in the first cross-continental horse race across North America in the 1800s.
        </p>

        {/* Play and More Info buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            ▶ Play
          </button>

          <button style={{
            backgroundColor: "rgba(109,109,110,0.7)",
            color: "white",
            border: "none",
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero