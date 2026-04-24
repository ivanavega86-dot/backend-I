import fs from "fs";
import path from "path"; // Recomendado para manejar rutas
import { __dirname } from "../utils.js";

export class GenericManager {
    constructor(fileName) {
        // 1. Definimos las rutas por separado para mayor claridad
        const dataFolder = path.join(__dirname, "dao", "data");
        this.filePath = path.join(dataFolder, fileName);

        // 2. Creamos la carpeta si no existe (con recursive no falla si ya existe)
        if (!fs.existsSync(dataFolder)) {
            fs.mkdirSync(dataFolder, { recursive: true });
        }

        // 3. Creamos el archivo con un array vacío solo si no existe
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify([]), "utf-8");
        }
    }
}
