import { useRouteError, Link } from "react-router-dom"; // Use "react-router" if you went with v7

const Error = () => {
  // This hook catches whatever error React Router throws
  const err = useRouteError();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🍔💔</div>
        
        {/* Fallback to 404 if the error status isn't available */}
        <h1 style={styles.errorCode}>{err?.status || "404"}</h1>
        <h2 style={styles.title}>Oops! Something went wrong.</h2>
        
        <p style={styles.message}>
          {err?.statusText || err?.message || "We couldn't find the page you're looking for."}
        </p>
        
        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

// Clean, modern UI using inline styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  icon: {
    fontSize: "60px",
    marginBottom: "10px",
  },
  errorCode: {
    fontSize: "80px",
    fontWeight: "900",
    color: "#ff5200", // Swiggy-style orange
    margin: "0",
    lineHeight: "1",
  },
  title: {
    fontSize: "24px",
    color: "#1f2937",
    marginTop: "16px",
    marginBottom: "8px",
  },
  message: {
    fontSize: "16px",
    color: "#6b7280",
    marginBottom: "32px",
    lineHeight: "1.5",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#ff5200",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
};

export default Error;