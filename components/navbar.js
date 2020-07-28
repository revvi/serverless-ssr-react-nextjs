// components/navbar.js
import React from 'react'
import Link from 'next/link'

export default () => (
  <nav className='nav'>
    <ul>
      <li>
        <Link href='/'><a>Home</a></Link>
      </li>
      <li>
        <Link href='/dogs'><a>Dogs</a></Link>
      </li>
      <li>
        <Link href='/dogs/shepherd'><a>Only Shepherds</a></Link>
      </li>
      <li>
        <Link href='/about'><a>About</a></Link>
      </li>
      <li>
        <Link href='/contact'><a>Contact</a></Link>
      </li>
    </ul>
  </nav>
)