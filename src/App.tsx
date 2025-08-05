import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Helper from "./components/Helper"
import Footer from "./components/Footer"
import BigHelper from "./components/BigHelper"

function App() {


  return (
    <>
      <div className="w-lvw">
        <Nav />
        <Hero />
        <Helper />
        <BigHelper/>
       <Footer/>
      </div>
    </>
  )
}

export default App
