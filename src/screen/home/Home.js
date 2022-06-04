import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}><h2>Home</h2></Link>
                </li>
                <li>
                    <Link to={'/search'}><h2>Buscar</h2></Link>
                </li>
            </ul>
        </nav>
        <div>
            <p>Lorem</p>
        </div>
    </div>
  )
}

export default Home