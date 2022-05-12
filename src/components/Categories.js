// Redux stuff
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory, getCategories } from '../store/categories';
import { filterProducts } from '../store/products';

import shortUUID from 'short-uuid';

import { Box, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';

function Categories() {
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Box component="span" sx={{ p: 1 }}>Select a category</Box>
      <Select
        label="Category"
        value={activeCategory.name}
        data-testid="categories-select"
      >
        {categories.map((category) => (
          <MenuItem
            key={shortUUID.generate()}
            value={category.name}
            data-testid={`category-${category.name}`}
            onClick={() => {
              dispatch(setActiveCategory(category));
              dispatch(filterProducts(category));
            }}
          >
            {category.name}
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

// const mapStateToProps = ({ categories }) => {
//   return {
//     categories: categories.categories,
//     activeCategory: categories.activeCategory,
//   };
// };

// const mapDispatchToProps = {
//   setActiveCategory,
//   resetActiveCategory,
//   filterProducts,
// };

// connect() takes in a stateToProps function and an object containing the dispatch functions
// The dispatch functions must be imported in from their respective store files (../store/categories.js & ../store/products.js)
// It curries some internal function in React-Redux and then returns it
// That return function is invoked with our React component to do the connection magic
export default Categories;
