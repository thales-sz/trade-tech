import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

const App = (): JSX.Element => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </main>
  )
}

export default App
