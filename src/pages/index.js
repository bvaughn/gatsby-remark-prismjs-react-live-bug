import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Homage page</h1>
        <Link to="/test.html">Markdown page</Link>
      </div>
    )
  }
}
