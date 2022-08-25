
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Productos from './components/Productos';
import ListadoDeProductos from './components/ListadoDeProductos';
import CartWidget from './components/CartWidget';


function App() {
  
  let producto1 = {id: 100, name: "Camiseta 2022", price: 10000}
  let producto2 = { id: 101, name: "Camiseta 2000", price: 12500 }
  let producto3 = { id: 102, name: "Pantalon 2022", price: 8000 }


  return (
    <div className='App'>
      <NavBar />

      <ListadoDeProductos />
      
      <Productos producto={producto1} color="coral"/>
      <Productos producto={producto2} color="red" />
      <Productos producto={producto3} color="aqua" />

      <CartWidget />
      <Footer />
        
      </div>
      
    
  )
}
export default App;
