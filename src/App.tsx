import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import TeamDashboard from './pages/TeamDashboard'
import NotFoundPage from './pages/NotFoundPage'

const App = (): JSX.Element => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<TeamDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
