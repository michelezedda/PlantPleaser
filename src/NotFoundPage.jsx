import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function NotFoundPage() {

  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <h1>404 PAGE NOT FOUND</h1>
        <Link to="/">Go Home</Link>
      </div>
    </>
  )
}

export default NotFoundPage