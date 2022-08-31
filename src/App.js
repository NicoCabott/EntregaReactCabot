
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Productos from './components/Producto';
import CartWidget from './components/CartWidget';
import ListadoDeProductosLayout from './components/ListadoDeProductosLayout';





function App() {
  
  
  
  
  
  let producto1 = { id: 100, name: 'zapato nike', precio: 100 }
  let producto2 = { id: 101, name: 'zapato nike', precio: 100 }
  let producto3 = { id: 102, name: 'zapato nike', precio: 100 }

 
  

  return (
    <div className='App'>
      <NavBar />
      
      <ListadoDeProductosLayout />      
      <Productos item={producto1} color="coral"/>
      <Productos item={producto2} color="red" />
      <Productos item={producto3} color="aqua" />
    
      
      <Footer />
        
      </div>
      
    
  )
}
export default App;
