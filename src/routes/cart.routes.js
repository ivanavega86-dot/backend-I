import  {  Router } from "express";
import { attachManagerToRequest } from "../middlewares/carts.middlewares.js";
const router = Router();

router.use(attachManagerToRequest);

router.get("/", async (req, res, next) => {
    try {
        const carts = await req.CartManager.getCarts();
        res.status(200).json(carts);
    } catch (error) {
       next(error);
    }
});
router.delete("/:id",async (req, res, next) => {
    try {
       const cart = await req.CartManager.deletePCartById(req.params.id);
        res.status(200).send(cart);
    } catch (error) {
        next(error);
    }
});



router.post("/", async (req, res, next) => {
    try {
        const cart = await req.CartManager.createCart(req.body);
        res.status(201).json(cart);
    } catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const cart = req.CartManager.updateCart(req.params.id, req.body);
        res.json(cart);
    } catch (error) {
        next(error);
    }
});
export default router;