import React from "react"

import { LayoutProvider } from "./contexts"

const AppContexts: React.FC = ({ children }) => (
  <LayoutProvider>{children}</LayoutProvider>
)

export default AppContexts
