import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App" sx={{ p: 2 }} >
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Box>
  );
}

export default App;
