import { Schema, model } from "mongoose";

const productSchema = new Schema(
     {
        title: String,
        description: String,
        price: Number,
        category: String,
        stock: Number,
        status: Boolean,
        code: String,
        thumbnails: Array
    }
);

const productModel = model("products", productSchema);

export default productModel;