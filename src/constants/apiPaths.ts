
const API_PATHS = {
  product: `https://${process.env.REACT_APP_URL_PRODUCTS_GATEWAY}.execute-api.us-east-1.amazonaws.com/dev`,
  order: 'https://.execute-api.us-east-1.amazonaws.com/dev',
  import: `https://${process.env.REACT_APP_URL_IMPORT_GATEWAY}.execute-api.us-east-1.amazonaws.com/dev`,
  cart: 'https://.execute-api.us-east-1.amazonaws.com/dev',
};

export default API_PATHS;
