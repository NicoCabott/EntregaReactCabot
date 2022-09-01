
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Productos from './components/Producto';
import CartWidget from './components/CartWidget';
import Promesas from './test/Promesas';
import ItemListContainer from './components/ItemListContainer';





function App() {
  
  return (
    <div className='App'>
      
      <ItemListContainer />
      <NavBar />
      
    
      <Footer />
        
      </div>
      
    
  )
}
export default App;
