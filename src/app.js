import express from "express";
import { __dirname } from "./utils.js";
import { engine } from "express-handlebars";
import productRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import viewsRoutes from "./routes/views.routes.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.engine("handlebars",engine(
    {
        partialsDir: __dirname + "/views/partials",
        helpers: {
           isStock:(stock) => stock > 0
        }
    }
));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use("/api/products", productRoutes); 
app.use("/api/cart", cartRoutes);
app.use("/", viewsRoutes);



app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

