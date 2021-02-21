import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Error() {

  useEffect(() => {
    document.title = "404 Error! | Recipe App"
  }, [])

  return (
    <div>
      <h1>404 Error! <br/> Page not Found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
