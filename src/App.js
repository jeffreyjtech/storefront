import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import SimpleCart from './components/SimpleCart';

function App() {
  return (
    <div className="App">
      <Box sx={{ p: 2 }}>
        <Header />
        <Box sx={{ float: 'right' }}>
          <SimpleCart />
        </Box>
        <Products />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
