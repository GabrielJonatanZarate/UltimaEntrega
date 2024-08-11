import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import PromocionCuotas from "./components/PromocionCuotas"
import Sumate from "./components/Sumate"

function App() {

  return (
    <>
      <PromocionCuotas />
      <NavBar />
      <Banner />
      <ItemListContainer texto={"No hay productos"}/>
      <ItemCount stock={10}/>
      <Banner2/>
      <Sumate/>
      <Footer/>
    </>
  )
}

export default App