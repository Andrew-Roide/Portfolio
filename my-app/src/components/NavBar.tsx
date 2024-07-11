import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <>
      <Link to="/">
        <h1>Andrew John Roide</h1>
      </Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link>
    </>
  )
}
