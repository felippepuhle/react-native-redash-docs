import React from "react"

import AppTheme from "./AppTheme"
import AppContexts from "./AppContexts"
import Layout from "./layout"

const App: React.FC = ({ children }) => (
  <AppTheme>
    <AppContexts>
      <Layout>{children}</Layout>
    </AppContexts>
  </AppTheme>
)

export default App
