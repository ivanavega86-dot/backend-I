import fs from "fs/promises";
import { GenericManager } from "./GenericManager.js";

class ProductManager extends GenericManager {
    constructor(filePath) {
        super(filePath);
    }
    async getProducts() {
        try {
        const products = await fs.readFile(this.filePath, { encoding: "utf-8" });
        return JSON.parse(products);
    } catch (error) {
       return [];
    }
    }
    async getProductById() {
        const products = await this.getProducts();
        const requiredProduct = products.find(product => product.id === pid);
        return requiredProduct;
    }
    async createProduct(product) {
        if(!product.thumbnails) product.thumbnails = [];
        if(product.status== "on") {
            product.status = true;
        }else product.status = false;
        const products = await this.getProducts();
        if (products.length === 0) product.id= 1;
        else product.id = products[products.length - 1].id + 1;
        products.push(product);
        await fs.writeFile(this.filePath, JSON.stringify(products), { encoding: "utf-8" });
        return product;
    }
async updateProductById(pid, updateData) {
    const products = await this.getProducts();
    const requiredProductIndex = products.findIndex((product) => product.id === pid);
    products[requiredProductIndex] = { ... updateData, id:parseInt(pid) };
    await fs.writeFile(this.filePath, JSON.stringify(products), { encoding: "utf-8" });
    return products[requiredProductIndex];
}
async deleteProductById(pid) {
    const requiredProduct = await this.getProductById(pid);
    let products = await this.getProducts();
    products = products.filter((product) => product.id !== pid);

    await fs.writeFile(this.filePath, JSON.stringify(products), { encoding: "utf-8" });
    return requiredProduct;
}
}

export default new ProductManager("./products.json");