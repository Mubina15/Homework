import "./App.css"
import Album from "./Components/Album/Album";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";


function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Album />
        <Footer />
      </div>
    </>
  )
}

export default App;
