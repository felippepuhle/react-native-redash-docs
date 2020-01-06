import React, { useEffect } from "react"
import Prism from "prismjs"

type Props = {
  children: string
}

const Code: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <pre className="line-numbers">
      <code className="language-js">{children.trim("\n")}</code>
    </pre>
  )
}
export default Code
