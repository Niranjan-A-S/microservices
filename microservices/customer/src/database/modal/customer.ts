import { InferSchemaType, Schema, model } from "mongoose";

const CustomerSchema = new Schema(
    {
        email: String,
        password: String,
        salt: String,
        phone: String,
        address: [
            {
                type: Schema.Types.ObjectId,
                ref: 'address',
                require: true
            }
        ],
        cart: [
            {
                product: {
                    _id: { type: String, required: true },
                    name: { type: String },
                    banner: { type: String },
                    price: { type: Number }
                },
                unit: {
                    type: Number,
                    required: true
                }
            }
        ],
        wishlist: [
            {
                _id: { type: String, required: true },
                name: { type: String },
                description: { type: String },
                available: { type: Boolean },
                banner: { type: String },
                price: { type: Number }
            }
        ],
        orders: [
            {
                _id: { type: String, required: true },
                amount: { type: String },
                date: { type: Date, default: Date.now() }
            }
        ]
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.salt;
                delete ret.__v;
            }
        }
    }
);


export type Customer = InferSchemaType<typeof CustomerSchema>;


export const CustomerModal = model('customer', CustomerSchema);