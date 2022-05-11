import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box sx={{ p: 2 }}>
        <Header />
        <Box sx={{ float: 'right' }}>
          <Categories />
        </Box>
        <Products />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
