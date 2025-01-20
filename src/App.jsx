import { useState } from 'react'
import NavBar from './component/navBar/NavBar'
import Hero from './component/hero/Hero'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
    <NavBar/>
    <section>
      <Hero/>
    </section>
    <section>
      Dos seccion
    </section>
    <section>
      Tres seccion
    </section>
    <Footer/>
    </>
  )
}

export default App
