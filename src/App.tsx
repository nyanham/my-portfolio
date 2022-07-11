import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Skils } from './components/Skils/Skils'
import { Footer } from './components/Footer/Footer'

import './global.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Skils />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
