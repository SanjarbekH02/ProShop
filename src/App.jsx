import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home.jsx';
// import Advertising from './Components/Advertising/Advertising.jsx';
// import Products from './Components/Products/Products.jsx';
// import AutumnAdversiting from './Components/AutumnAdversiting/AutumnAdversiting.jsx';
// import SummerAdversiting from './Components/SummerAdversiting/SummerAdversiting.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useState } from 'react';
import ProductsWiew from './Pages/ProductsWiew/ProductsWiew.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './Pages/Collection/Collection.jsx';
import ScrollToTop from './Components/ScrollTop/ScrollTop.jsx';
import About from './Pages/About/About.jsx';
import Products from './Components/Products/Products.jsx';

function App() {

  const [selectedData, setSelectedData] = useState(null)

  return (
    <div className="App container">

      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/'>

            <Route path='/' element={<Home onItemSelect={setSelectedData} />} />
            <Route path='/products' element={<ProductsWiew selectedData={selectedData} />} />
            <Route path='/collection' element={<Collection onItemSelect={setSelectedData} />} />
            <Route path='/about' element={<About />} />

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
