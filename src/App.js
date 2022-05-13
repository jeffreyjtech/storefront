import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import ProductDetails from './routes/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
