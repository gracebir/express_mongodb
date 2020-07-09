const mongodb = require('../server/index');

const postSchema = mongodb.Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongodb.model("posts",postSchema);