import ProductManager from "../dao/ProductManager.js"; 

const attachManagerToRequest = (req, res, next) => {
    req.productManager = ProductManager;
    next();
}
export default attachManagerToRequest;
