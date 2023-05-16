import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

const App = (): JSX.Element => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
  )
}

export default App
