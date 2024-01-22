import './reset.css';
import './App.css';
import SiteNavigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <SiteNavigation/>
       <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={< ProductsPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/cart' element={<CartPage />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
