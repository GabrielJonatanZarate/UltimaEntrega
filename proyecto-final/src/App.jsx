import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import PromocionCuotas from "./components/PromocionCuotas"
import Sumate from "./components/Sumate"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <PromocionCuotas />
        <NavBar />
        <Banner />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
        <Banner2 />
        <Sumate />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App