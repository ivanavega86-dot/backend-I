import {fileURLToPath} from "url";
import path from "path";
import {dirname} from "path";   
import e from "express";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);


export const __dirname = dirname(__filename);  


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed!"));
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
});
export const upload = multer({ storage});



