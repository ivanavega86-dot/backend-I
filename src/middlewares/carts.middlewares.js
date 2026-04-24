import CartManager from "../dao/CartManager.js";



export async function attachManagerToRequest(req, res, next)  {   
    req.CartManager = CartManager;
    next();
}