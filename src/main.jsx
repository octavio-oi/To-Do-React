import ToDo from './components/ToDo.jsx'

import { createRoot } from 'react-dom/client'
import './main.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <ToDo/>
)
