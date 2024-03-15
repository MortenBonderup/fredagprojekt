import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Forside from './sider/Forside'
import Omos from './sider/Omos'
import Produkt from './sider/Produkt'
import Kontakt from './sider/Kontakt'
import Navigation from './komponenter/Navigation'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="omos" element={<Omos />} />
        <Route path="produkt" element={<Produkt />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
