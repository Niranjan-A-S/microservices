import { Router, Express } from "express";
import { signup, addAddress, getProfile, getWishlist, login, getShoppingDetails } from "../controllers/customer";

export const setupCustomerRoutes = (app: Express) => {
    const router = Router();

    //TODO: add auth middleware and payload schema validation

    router.route('/signup').post(signup);
    router.route('/login').post(login);
    router.route('/address').post(addAddress);
    router.route('/profile').get(getProfile);
    router.route('/shopping-details').get(getShoppingDetails);
    router.route('/wishlist').get(getWishlist);

    app.use('/customer', router);
}