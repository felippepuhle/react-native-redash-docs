import React from "react"
import { Redirect } from "@reach/router"

const AnimationsPage: React.FC = () => (
  <Redirect to="/animations/bInterpolate" noThrow replace />
)

export default AnimationsPage
