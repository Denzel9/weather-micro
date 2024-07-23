import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const root = document.getElementById('root')

if (!root) throw new Error('root not found')

const container = createRoot(root)

container.render(
  <Router>
    <App />
  </Router>
)
