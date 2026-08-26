import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SiteExpress from './pages/SiteExpress'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/site-express" element={<SiteExpress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
