import { Router } from "express";
import ProductManager from "../dao/ProductManager.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("index.handlebars",{
       title:"Home"
       
    });
});
router.get("/products", async (req, res) => {
    const products = await ProductManager.getProducts();
    res.render("products.handlebars",{

        title:"Products",
        products
    });
});

router.get("/add-product", (req, res) => {
    res.render("product-form.handlebars",{
        title:"Add Product",
        style:"/css/main.css"
    });
});
export default router;