import React, { useState, useEffect } from "react"
import { globalHistory } from "@reach/router"

import LayoutContext from "./LayoutContext"

const LayoutProvider: React.FC = ({ children }) => {
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false)

  useEffect(() => {
    const removeListener = globalHistory.listen(() =>
      setMobileSidebarVisible(false)
    )

    return () => {
      removeListener()
    }
  }, [])

  return (
    <LayoutContext.Provider
      value={{ isMobileSidebarVisible, setMobileSidebarVisible }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
