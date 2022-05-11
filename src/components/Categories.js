// Redux stuff
import { connect } from 'react-redux';
import { setActiveCategory, resetActiveCategory } from '../store/categories';
import { filterProducts } from '../store/products';

import shortUUID from 'short-uuid';

import { Box, MenuItem, Select } from '@mui/material';

function Categories({ categories, activeCategory, setActiveCategory, filterProducts }) {
  return (
    <>
      <Box component="span" sx={{ p: 1 }}>Select a category</Box>
      <Select
        label="Category"
        onChange={(e) => {
          e.preventDefault();
          const newCategoryKey = e.target.value;
          setActiveCategory(newCategoryKey);
          filterProducts(newCategoryKey);
        }}
        value={activeCategory.key}
        data-testid="categories-select"
      >
        {categories.map((category) => (
          <MenuItem
            key={shortUUID.generate()}
            value={category.key}
            data-testid={`category-${category.key}`}
          >
            {category.displayName}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

// This function's parameter takes in a magical redux state object
// Important thing is that it will have the properties defined in the whole state object
// We define it's shape in the respective store file (../store/categories.js)
// When this React app starts, this magical redux state object will be in it's initial form
const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    activeCategory: categories.activeCategory,
  };
};

const mapDispatchToProps = {
  setActiveCategory,
  resetActiveCategory,
  filterProducts,
};

// connect() takes in a stateToProps function and an object containing the dispatch functions
// The dispatch functions must be imported in from their respective store files (../store/categories.js & ../store/products.js)
// It curries some internal function in React-Redux and then returns it
// That return function is invoked with our React component to do the connection magic
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
