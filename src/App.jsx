import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Temperature from './page/Temperature'
import Currency from './page/Currency'
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/temperature" element={<Temperature />} />
      <Route path="/currency" element={<Currency />} />
    </Routes>
  )
}
