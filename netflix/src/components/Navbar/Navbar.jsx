// Displays navigation bar

function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#141414",
      zIndex: 999,
      boxSizing: "border-box"
    }}>
      {/* Netflix Logo text */}
      <h1 style={{
        color: "#E50914",
        fontSize: "32px",
        fontWeight: "bold",
        letterSpacing: "2px"
      }}>
        NETFLIX
      </h1>

      {/* Sign In button */}
      <button style={{
        backgroundColor: "#E50914",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer"
      }}>
        Sign In
      </button>
    </nav>
  )
}

export default Navbar