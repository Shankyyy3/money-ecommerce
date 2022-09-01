import './App.css';
import NavbarComponent from './component/NavbarComponent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import AddProduct from './component/AddProduct';
import UpdateAndDelete from './component/UpdateAndDelete';
import EditProduct from './component/EditProduct';

function App() {
  return (

    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/upadateandDelete" element={<UpdateAndDelete />} />
        <Route exact path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router >
  );
}

export default App;
