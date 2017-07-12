import React from "react"
import Link from "gatsby-link"

// Including anything from the react-live package is sufficient to trigger the bug.
import {LiveEditor} from "react-live"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <p>Click on the "Docs" link above to see thie issue.</p>
      </div>
    )
  }
}
