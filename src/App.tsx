import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ArticlesForm} from './pages/ArticlesForm'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route element={<ArticlesForm />} path="/" />
      </Routes>
     </Router>
    </>
  )
}

export default App
