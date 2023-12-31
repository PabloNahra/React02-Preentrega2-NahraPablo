import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import ItemList from './components/ItemList'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const marca = "ART MATUIZ"
  const link1 = "Para tu bebé"
  const link2 = "Para tu casa"
  const link3 = "Que es una artesania"
  const link4 = "Contacto"
  const containerPpal = "BIENVENID@S A NUESTRA TIENDA"

  return (
    <BrowserRouter>
      <NavBar title={marca} link1={link1} link2={link2} link3={link3} link4={link4}/>
      <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={containerPpal}/>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={containerPpal}/>} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/prueba" element={<p>Probando</p>} />
          <Route exact path="/queesartesania" element={<p>Que es una artesania</p>} />
          <Route exact path="/contacto" element={<p>Contacto</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
