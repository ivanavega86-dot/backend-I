import { Router } from "express";
import  attachManagerToRequest  from "../middlewares/products.middlewares.js";
import { upload } from "../utils.js";
const router = Router();

router.use(attachManagerToRequest);


router.get("/", async (req, res, next) => {
    try {
        const products = await req.productManager.getProducts();
        res.status(200).json(products);
    } catch (error) {
       next(error);
    }
});
router.delete("/:id",async (req, res, next) => {
    try {
         await req.productManager.deleteProduct(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        next(error);
    }
});

router.post("/",
     upload.single("thumbnail"),
     async (req, res, next) => {
    try {
        const product = await req.productManager.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const product = await req.productManager.updateProduct(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

export default router;