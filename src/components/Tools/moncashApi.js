import * as moncash from 'nodejs-moncash-sdk';
import {Constants} from "./constants";

moncash.configure(Constants.moncash_config)

export default class MoncashApi{

    createTransaction = (amount, orderId) => {

        let create_payment_json = {
            amount: amount,
            orderId: orderId
        }

        let paymentCreator = moncash.payment
        paymentCreator.create(create_payment_json, (error, payment)=> {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(paymentCreator.redirect_uri(payment));
            }
        })
    }
}