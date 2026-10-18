import { useState } from 'react'
import Home from './pages/Home.jsx'
import HachiwarePage from './pages/HachiwarePage.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'hachiware') {
    return <HachiwarePage onBack={() => setPage('home')} />
  }
  return <Home onStart={() => setPage('hachiware')} />
}
