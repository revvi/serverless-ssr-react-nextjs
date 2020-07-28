// pages/about.js
import React from 'react'
import Default from '../layouts/default'
import axios from 'axios'
import Link from 'next/link'
const meta = { title: 'About title', description: 'About description' }

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Default meta={meta}>
        <div>
          <h1>This is About page Page.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Unum facilisi duo et. Saepe imperdiet at per, appareat vituperata vix te, pri sint assueverit te. No vis iuvaret appareat. Scripta periculis ei eam, te pro movet reformidans. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Electram intellegat voluptaria et eam, eam ex aperiri temporibus scriptorem. Pro ea animal dolores. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Liber nusquam insolens has ei, appetere accusamus intellegam id ius.</p>
        </div>
      </Default>
    )
  }
}

export default IndexPage