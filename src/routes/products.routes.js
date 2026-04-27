import { Router } from "express";
import  attachManagerToRequest  from "../middlewares/products.middlewares.js";
import { upload } from "../utils.js";
import products from "../models/productModel.js";
import productModel from "../models/productModel.js";

const router = Router();

/* router.use(attachManagerToRequest); */


router.get("/", async (req, res, next) => {
    try {
        const products = await productModel.find({});
      /*   const products = await req.productManager.getProducts(); */
        res.status(200).json(products);
    } catch (error) {
       next(error);
    }
});
router.delete("/:id",async (req, res, next) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
      /*    await req.productManager.deleteProduct(req.params.id); */
        res.status(200).json({ message: "Product deleted", product: deletedProduct });
    } catch (error) {
        next(error);
    }
});

router.post("/",
     upload.array("thumbnail"),
     async (req, res, next) => {
        console.log(req.file);
        
    try {
        if (req.file)req.body.thumbnails = [req.file.path];
        const product = await productModel.create(req.body);
       /*  const product = await req.productManager.createProduct(req.body); */
        res.status(201).send(product);
    } catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        /* const product = await req.productManager.updateProduct(req.params.id, req.body); */
        res.json(product);
    } catch (error) {
        next(error);
    }
});

export default router;