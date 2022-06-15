const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(re);
            },
            message: "Please enter valid address",
        }
    },
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {

                return value.length >= 6;
            },
            message: "Please enter more than 6 digits",
        }
    },
    address: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: 'user'
    },

})
const User = mongoose.model("User", userSchema);
module.exports = User;