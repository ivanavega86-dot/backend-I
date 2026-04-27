import { Schema, model, Types } from "mongoose";


const cartSchema = new Schema({
        product:{
          type:[{
  
              product:{
                  type:Types.ObjectId,
                  ref: "products"
              },
                 quantity: {
                  type: Number,
                  default: 1
              }
          }],
        default: []

        }           
    }
);
const Cart = model("Cart", cartSchema);
export default Cart;