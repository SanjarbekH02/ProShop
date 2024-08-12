import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
// import Advertising from './Components/Advertising/Advertising.jsx';
// import Products from './Components/Products/Products.jsx';
// import AutumnAdversiting from './Components/AutumnAdversiting/AutumnAdversiting.jsx';
// import SummerAdversiting from './Components/SummerAdversiting/SummerAdversiting.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useState } from 'react';
import ProductsWiew from './Components/ProductsWiew/ProductsWiew.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './Components/Collection/Collection.jsx';

function App() {

  const [selectedData, setSelectedData] = useState(null)

  return (
    <div className="App container">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>

            <Route path='/' element={<Home onItemSelect={setSelectedData} />} />
            <Route path='/products' element={<ProductsWiew selectedData={selectedData} />} />
            <Route path='/collection' element={<Collection onItemSelect={setSelectedData} />} />

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
