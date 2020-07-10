const mongoose = require('../server/index');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        defaulf: Date.now
    },
});

module.exports = mongoose.model("User",UserSchema);