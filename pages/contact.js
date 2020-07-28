// pages/about.js
import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
import Link from 'next/link'
const meta = { title: 'Contact title', description: 'Contact description' }

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Default meta={meta}>
        <div>
          <h1>This is Contact page.</h1>
          <p>Contact page holder</p>
        </div>
      </Default>
    )
  }
}

export default IndexPage