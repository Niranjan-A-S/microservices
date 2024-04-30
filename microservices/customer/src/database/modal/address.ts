import { InferSchemaType, Schema, model } from "mongoose";

const AddressSchema = new Schema({
    street: String,
    postalCode: String,
    city: String,
    country: String,
});

export type Address = InferSchemaType<typeof AddressSchema>;

export const AddressModal = model('address', AddressSchema);