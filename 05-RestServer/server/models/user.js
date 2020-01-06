const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true,'nombre requerido']
    },
    email: {
        type: String,
        required: [true,'email requerido']
    },
    password: {
        type: String,
        required: [true,'pass requerido']
    },
    img: {
        type: String,
        required: [false]
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model('user', userSchema)