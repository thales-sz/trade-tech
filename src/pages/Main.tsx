import Footer from '../components/Footer'
import Header from '../components/Header'
import SignIn from '../components/SignIn'

function Main (): JSX.Element {
  return (
    <div className='h-screen bg-slate-300'>
      <Header />
      <SignIn />
      <Footer />
    </div>
  )
}

export default Main
