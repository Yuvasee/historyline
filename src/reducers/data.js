import exampleData from '../config/example_data'

const data = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':

    case 'LOAD_EXAMPLE':
      return exampleData;

    default:
      return state;
  }
};

export default data