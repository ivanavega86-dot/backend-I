import  {  Router } from "express";
import cartModel from "../models/cartModel.js";
import productModel from "../models/productModel.js";
const router = Router();

/* router.use(attachManagerToRequest); */


router.get("/", async (req, res, next) => {
    try {
        const carts = await cartModel.find({});
        /* const carts = await req.CartManager.getCarts(); */
        res.status(200).json(carts);
    } catch (error) {
       next(error);
    }
});
router.get("/:cartId", async (req, res, next) => {
    try {
        const cart = await cartModel.findById(req.params.cartId).populate("product.product");
        res.json(cart);
    } catch (error) {
        next(error);
    }
});
router.delete("/:id",async (req, res, next) => {
    try {
        const cart = await cartModel.findByIdAndDelete(req.params.id);
     /*   const cart = await req.CartManager.deletePCartById(req.params.id); */
        res.status(200).send(cart);
    } catch (error) {
        next(error);
    }
});



router.post("/", async (req, res, next) => {
    try {
        const cart = await cartModel.create(req.body);
        /* const cart = await req.CartManager.createCart(req.body); */
        res.status(201).send(cart);
    } catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(cart);
    } catch (error) {
        next(error);
    }
});

router.post("/:cartId/product/:productId", async (req, res, next) => {
    try {
        const cart = await cartModel.findById(req.params.cartId);
        if (cart == null) throw new Error("Cart not found");
        const requiredProduct = await productModel.findById(req.params.productId);
        if (requiredProduct == null) throw new Error("Product not found");
       cart.product.push(requiredProduct._id);
       cart.save();
       res.status(200).json(cart);
          
    }
        catch (error) {
            next(error);
        }
});
export default router;