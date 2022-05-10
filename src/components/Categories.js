// Redux stuff
import { connect } from 'react-redux';
import { setActiveCategory, resetActiveCategory } from '../store/categories';
import { filterProducts, resetProducts } from '../store/products';

import shortUUID from 'short-uuid';

import { MenuItem, Select, Typography } from '@mui/material';

function Categories({ categories, activeCategory, setActiveCategory, filterProducts }) {
  return (
    <Select
      label="Category"
      onChange={(e) => {
        e.preventDefault();
        const newCategoryKey = e.target.value;
        setActiveCategory(newCategoryKey);
        filterProducts(newCategoryKey);
      }}
      value={activeCategory.key}
    >
      {categories.map((category) => (
        <MenuItem key={shortUUID.generate()} value={category.key}>
          {category.displayName}
        </MenuItem>
      ))}
      {/* <MenuItem key={shortUUID.generate()} value="RESET">
        <Typography variant="caption">None</Typography>
      </MenuItem> */}
    </Select>
  );
}

// This function's parameter takes in a magical redux state object
// Important thing is that it will have the properties defined in the whole state object
// We define it's shape in the respective store file
// When this React app starts that will be the initialState object
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
// The dispatch functions must be imported in from their respective store files
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
