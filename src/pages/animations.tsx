import React from "react"

import { Code, SEO } from "../components"

const Animations = () => (
  <>
    <SEO title="Animations" />

    <h1>Animations</h1>

    <h2>bInterpolate(node: Node, from: Node, to: Node): Node</h2>

    <p>Interpolate the node from 0 to 1 without clamping.</p>

    <Code
      code={`
const animation = useTransition(isVisible)

const styles = {
  opacity: bInterpolate(animation, 1, 0),
}
      `}
    />
  </>
)

export default Animations
