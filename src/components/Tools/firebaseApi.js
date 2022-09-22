import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import MD5 from "crypto-js/md5";

import {Constants} from "./constants";

export default class FirebaseApi{

    app = initializeApp(Constants.firebase_config)
    database = getDatabase(this.app)

    getUser = (userId, callback) => {
        onValue(ref(this.database, '/Users/'+userId), (snapshot) => {
            let value = snapshot.val()
            callback(value)
        })
    }

    login = (phoneNumber, password, callback) => {
        let md5Password = MD5(password).toString().toUpperCase()
        onValue(ref(this.database, '/Users'), (snapshot) => {
            let value = snapshot.val()
            let keys = Object.keys(value)
            let foundedUser = null
            for (let i = 0; i<keys.length; i++) {
                let key = keys[i]
                let user = value[key]
                if (user.phoneNumber === phoneNumber && user.password.toUpperCase() === md5Password){
                    foundedUser = user
                }
            }
            callback(foundedUser)
        })
    }

}