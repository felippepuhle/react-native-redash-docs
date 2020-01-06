import React from "react"

import { LayoutProvider } from "src/contexts"

const AppContexts: React.FC = ({ children }) => (
  <LayoutProvider>{children}</LayoutProvider>
)

export default AppContexts
